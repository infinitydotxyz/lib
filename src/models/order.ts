import { isBigNumberish, BigNumber, BigNumberish } from '@ethersproject/bignumber/lib/bignumber';
import { isAddress } from '@ethersproject/address';
import { parseEther, formatEther } from '@ethersproject/units';
import {
  ChainId,
  ChainNFTs,
  ChainOBOrder,
  ExecParams,
  ExtraParams,
  FirestoreOrder,
  FirestoreOrderItem,
  OBOrder,
  OBOrderItem,
  OBTokenInfo,
  SignedOBOrder
} from '../types/core';
import { orderHash } from '../utils';

export interface FirestoreOrderProps {
  order: FirestoreOrder;
  items: FirestoreOrderItem[];
}

export interface Constraints {
  numItems: BigNumber;
  startPriceWei: BigNumber;
  endPriceWei: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
  nonce: BigNumber;
  maxGasPriceWei: BigNumber;
}

export class Order {
  public readonly chainId: ChainId;
  public readonly isSellOrder: boolean;
  public readonly numItems: number;
  public readonly constraints: Constraints;
  public readonly execParams: ExecParams;
  public readonly extraParams: ExtraParams;
  public readonly nfts: OBOrderItem[];

  public readonly signer: string;
  public readonly signature: string;

  public get isSigned() {
    return !!this.signer && !!this.signature;
  }

  constructor(chainOBOrder: ChainOBOrder, chainId: ChainId);
  constructor(obOrder: OBOrder, chainId: ChainId);
  constructor(signedOBOrder: SignedOBOrder, chainId: ChainId);
  constructor(firestoreOrder: FirestoreOrderProps, chainId: ChainId);
  constructor(props: ChainOBOrder | OBOrder | SignedOBOrder | FirestoreOrderProps, chainId: ChainId) {
    const isChainOBOrder = 'constraints' in props;
    const isFirestoreOrder = 'order' in props && 'items' in props;
    const isOBOrder = 'startPriceEth' in props && !('signedOrder' in props);
    const isSignedOBOrder = 'startPriceEth' in props && 'signedOrder' in props;

    const checks = [isFirestoreOrder, isOBOrder, isSignedOBOrder, isChainOBOrder].filter((item) => item);
    if (checks.length < 1) {
      throw new Error('Invalid order type');
    } else if (checks.length > 1) {
      throw new Error('Failed to detect order type');
    }

    this.chainId = chainId;
    if (isFirestoreOrder) {
      this.isSellOrder = props.order.isSellOrder;
      this.constraints = Order.decodeConstraints(props.order.signedOrder.constraints);
      this.execParams = Order.decodeExecParams(props.order.signedOrder.execParams);
      this.extraParams = Order.decodeExtraParams(props.order.signedOrder.extraParams);
      this.signer = props.order.signedOrder.signer;
      this.signature = props.order.signedOrder.sig;
      this.nfts = Order.firestoreOrderItemsToOBOrderItems(props.items);
    } else if (isSignedOBOrder) {
      this.isSellOrder = (props as SignedOBOrder).isSellOrder;
      this.constraints = Order.decodeConstraints((props as SignedOBOrder).signedOrder.constraints);
      this.execParams = (props as SignedOBOrder).execParams;
      this.extraParams = Order.decodeExtraParams((props as SignedOBOrder).signedOrder.extraParams);
      this.signer = (props as SignedOBOrder).signedOrder.signer;
      this.signature = (props as SignedOBOrder).signedOrder.sig;
      this.nfts = (props as SignedOBOrder).nfts;
    } else if (isOBOrder) {
      this.isSellOrder = props.isSellOrder;
      const { numItems, startPriceEth, endPriceEth, startTimeMs, endTimeMs, maxGasPriceWei, nonce } = props;
      this.constraints = Order.decodeConstraints(
        Order.formatConstraints({
          numItems,
          startPriceEth,
          endPriceEth,
          startTimeMs,
          endTimeMs,
          maxGasPriceWei,
          nonce
        })
      );
      this.execParams = props.execParams;
      this.extraParams = props.extraParams;
      this.signer = '';
      this.signature = '';
      this.nfts = props.nfts;
    } else if (isChainOBOrder) {
      this.isSellOrder = props.isSellOrder;
      this.constraints = Order.decodeConstraints(props.constraints);
      this.execParams = Order.decodeExecParams(props.execParams);
      this.extraParams = Order.decodeExtraParams(props.extraParams);
      this.signer = props.signer;
      this.signature = props.sig;
      this.nfts = Order.chainNftsToOBOrderItems(props.nfts, this.chainId);
    }
  }

  static obOrderItemsToChainNfts(obOrderItems: OBOrderItem[]): ChainNFTs[] {
    const chainNftsByAddress: Record<string, ChainNFTs> = {};
    for (const obOrderItem of obOrderItems) {
      const collectionAddress = obOrderItem.collectionAddress;
      const chainNfts = chainNftsByAddress[collectionAddress] ?? {
        collection: collectionAddress,
        tokens: []
      };

      for (const token of obOrderItem.tokens) {
        const tokenId = token.tokenId;
        const numTokens = token.numTokens;
        chainNfts.tokens.push({ tokenId, numTokens });
      }

      chainNftsByAddress[collectionAddress] = chainNfts;
    }
    return Object.values(chainNftsByAddress);
  }

  static chainNftsToOBOrderItems(chainNfts: ChainNFTs[], chainId: ChainId): OBOrderItem[] {
    const obOrderItems: OBOrderItem[] = [];
    for (const nfts of chainNfts) {
      const collectionAddress = nfts.collection;
      const orderItem: OBOrderItem = {
        chainId,
        collectionAddress,
        collectionName: '',
        collectionImage: '',
        collectionSlug: '',
        hasBlueCheck: false,
        tokens: []
      };
      for (const nft of nfts.tokens) {
        const tokenId = nft.tokenId;
        const numTokens = nft.numTokens;
        const tokenInfo: OBTokenInfo = {
          tokenId,
          tokenName: '',
          tokenImage: '',
          takerUsername: '',
          takerAddress: '',
          numTokens,
          attributes: []
        };
        orderItem.tokens.push(tokenInfo);
      }
    }
    return obOrderItems;
  }

  static firestoreOrderItemsToOBOrderItems(firestoreOrderItems: FirestoreOrderItem[]): OBOrderItem[] {
    const obOrderItemsByAddress: Record<string, OBOrderItem> = {};
    for (const item of firestoreOrderItems) {
      const collection: OBOrderItem = obOrderItemsByAddress[item.collectionAddress] ?? {
        chainId: item.chainId,
        collectionAddress: item.collectionAddress,
        collectionName: item.collectionName,
        collectionImage: item.collectionImage,
        collectionSlug: item.collectionSlug,
        hasBlueCheck: item.hasBlueCheck,
        tokens: []
      };

      const tokenInfo: OBTokenInfo = {
        tokenId: item.tokenId,
        tokenName: item.tokenName,
        tokenImage: item.tokenImage,
        takerUsername: item.takerUsername,
        takerAddress: item.takerAddress,
        numTokens: item.numTokens,
        attributes: item.attributes
      };

      collection.tokens.push(tokenInfo);

      obOrderItemsByAddress[item.collectionAddress] = collection;
    }
    return Object.values(obOrderItemsByAddress);
  }

  static decodeConstraints(constraints: BigNumberish[]): Constraints {
    const [
      numItemsBn,
      startPriceWeiBn,
      endPriceWeiBn,
      startTimeSecondsBn,
      endTimeSecondsBn,
      nonceBn,
      maxGasPriceWeiBn
    ] = constraints;

    const areBigNumberish = constraints.map((item) => isBigNumberish(item)).every((item) => item);
    const constraintsValid = areBigNumberish && constraints.length === 7;

    if (!constraintsValid) {
      throw new Error(`Invalid constraints: ${constraints.join(', ')}`);
    }

    const numItems = BigNumber.from(numItemsBn);
    const startPriceWei = BigNumber.from(startPriceWeiBn);
    const endPriceWei = BigNumber.from(endPriceWeiBn);
    const startTime = BigNumber.from(startTimeSecondsBn);
    const endTime = BigNumber.from(endTimeSecondsBn);
    const nonce = BigNumber.from(nonceBn);
    const maxGasPriceWei = BigNumber.from(maxGasPriceWeiBn);

    return {
      numItems,
      startPriceWei,
      endPriceWei,
      startTime,
      endTime,
      nonce,
      maxGasPriceWei
    };
  }

  static formatConstraints(rawConstraints: {
    numItems: BigNumberish;
    startPriceEth: BigNumberish;
    endPriceEth: BigNumberish;
    startTimeMs: BigNumberish;
    endTimeMs: BigNumberish;
    nonce: BigNumberish;
    maxGasPriceWei: BigNumberish;
  }): BigNumberish[] {
    const { numItems, startPriceEth, endPriceEth, startTimeMs, endTimeMs, nonce, maxGasPriceWei } = rawConstraints;

    const numItemsBn = BigNumber.from(numItems);
    const startPriceWeiBn = parseEther(startPriceEth.toString());
    const endPriceWeiBn = parseEther(endPriceEth.toString());
    const startTimeSeconds = Math.floor(parseInt(startTimeMs.toString(), 10) / 1000);
    const startTimeSecondsBn = BigNumber.from(startTimeSeconds);
    const endTimeSeconds = Math.floor(parseInt(endTimeMs.toString(), 10) / 1000);
    const endTimeSecondsBn = BigNumber.from(endTimeSeconds);
    const nonceBn = BigNumber.from(nonce);
    const maxGasPriceWeiBn = BigNumber.from(maxGasPriceWei);

    const constraints = [
      numItemsBn,
      startPriceWeiBn,
      endPriceWeiBn,
      startTimeSecondsBn,
      endTimeSecondsBn,
      nonceBn,
      maxGasPriceWeiBn
    ];

    return constraints;
  }

  static encodeConstraints(constraints: Constraints): BigNumberish[] {
    const encoded = [
      constraints.numItems.toString(),
      constraints.startPriceWei.toString(),
      constraints.endPriceWei.toString(),
      constraints.startTime.toString(),
      constraints.endTime.toString(),
      constraints.nonce.toString(),
      constraints.maxGasPriceWei.toString()
    ];
    return encoded;
  }

  static decodeExecParams(execParams: string[]): ExecParams {
    if (execParams.length !== 2) {
      throw new Error(`Invalid execParams: ${execParams.join(', ')}`);
    }
    for (const execParam of execParams) {
      if (isAddress(execParam)) {
        throw new Error(`Invalid exec param: ${execParam} is not a valid address`);
      }
    }
    const [complicationAddress, currencyAddress] = execParams;
    return {
      complicationAddress,
      currencyAddress
    };
  }

  static encodeExecParams(execParams: ExecParams): string[] {
    const encoded = [execParams.complicationAddress, execParams.currencyAddress];
    return encoded;
  }

  static decodeExtraParams(extraParams: string): ExtraParams {
    if (extraParams && isAddress(extraParams)) {
      return {
        buyer: extraParams
      };
    } else if (extraParams) {
      throw new Error(`Invalid extraParams: ${extraParams} is not a valid address`);
    }
    return {};
  }

  static encodeExtraParams(extraParams: ExtraParams): string {
    const encoded = extraParams.buyer ?? '';
    return encoded;
  }

  public getChainOBOrder(): ChainOBOrder {
    const chainOBOrder: ChainOBOrder = {
      isSellOrder: this.isSellOrder,
      signer: this.signer,
      constraints: Order.encodeConstraints(this.constraints),
      nfts: Order.obOrderItemsToChainNfts(this.nfts),
      execParams: Order.encodeExecParams(this.execParams),
      extraParams: Order.encodeExtraParams(this.extraParams),
      sig: this.signature ?? ''
    };
    return chainOBOrder;
  }

  public getOBOrder(): OBOrder {
    const id = orderHash(this.getChainOBOrder());
    const order: OBOrder = {
      id,
      chainId: this.chainId,
      isSellOrder: this.isSellOrder,
      numItems: this.numItems,
      makerUsername: '',
      makerAddress: this.signer,
      startPriceEth: parseFloat(formatEther(this.constraints.startPriceWei)),
      endPriceEth: parseFloat(formatEther(this.constraints.endPriceWei)),
      startTimeMs: this.constraints.startTime.toNumber() * 1000,
      endTimeMs: this.constraints.endTime.toNumber() * 1000,
      nonce: this.constraints.nonce.toNumber(),
      nfts: this.nfts,
      execParams: this.execParams,
      extraParams: this.extraParams,
      maxGasPriceWei: this.constraints.maxGasPriceWei.toString()
    };
    return order;
  }

  public getSignedOBOrder(): SignedOBOrder {
    if (!this.isSigned) {
      throw new Error('Order is not signed');
    }
    const obOrder = this.getOBOrder();
    const signedOBOrder: SignedOBOrder = {
      ...obOrder,
      signedOrder: this.getChainOBOrder()
    };
    return signedOBOrder;
  }
}
