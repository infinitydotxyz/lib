export const FlowMatchExecutorABI = [
  {
    inputs: [
      { internalType: 'contract IFlowExchange', name: '_exchange', type: 'address' },
      { internalType: 'address', name: '_initiator', type: 'address' },
      { internalType: 'address', name: '_weth', type: 'address' }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  { inputs: [], name: 'BadContractSignature', type: 'error' },
  { inputs: [{ internalType: 'uint8', name: 'v', type: 'uint8' }], name: 'BadSignatureV', type: 'error' },
  { inputs: [], name: 'InvalidSignature', type: 'error' },
  { inputs: [], name: 'InvalidSigner', type: 'error' },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'destination', type: 'address' },
      { indexed: true, internalType: 'address', name: 'currency', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'ERC20Withdrawn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'destination', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'ETHWithdrawn',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'oldVal', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newVal', type: 'address' }
    ],
    name: 'InitiatorChanged',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' }
    ],
    name: 'OwnershipTransferred',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Paused',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'address', name: 'account', type: 'address' }],
    name: 'Unpaused',
    type: 'event'
  },
  {
    inputs: [],
    name: 'exchange',
    outputs: [{ internalType: 'contract IFlowExchange', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  { internalType: 'bytes', name: 'data', type: 'bytes' },
                  { internalType: 'uint256', name: 'value', type: 'uint256' },
                  { internalType: 'address payable', name: 'to', type: 'address' }
                ],
                internalType: 'struct FlowMatchExecutorTypes.Call[]',
                name: 'calls',
                type: 'tuple[]'
              },
              {
                components: [
                  { internalType: 'address', name: 'collection', type: 'address' },
                  {
                    components: [
                      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                      { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                    ],
                    internalType: 'struct OrderTypes.TokenInfo[]',
                    name: 'tokens',
                    type: 'tuple[]'
                  }
                ],
                internalType: 'struct OrderTypes.OrderItem[]',
                name: 'nftsToTransfer',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct FlowMatchExecutorTypes.ExternalFulfillments',
            name: 'externalFulfillments',
            type: 'tuple'
          },
          {
            components: [
              {
                components: [
                  { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
                  { internalType: 'address', name: 'signer', type: 'address' },
                  { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
                  {
                    components: [
                      { internalType: 'address', name: 'collection', type: 'address' },
                      {
                        components: [
                          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                          { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                        ],
                        internalType: 'struct OrderTypes.TokenInfo[]',
                        name: 'tokens',
                        type: 'tuple[]'
                      }
                    ],
                    internalType: 'struct OrderTypes.OrderItem[]',
                    name: 'nfts',
                    type: 'tuple[]'
                  },
                  { internalType: 'address[]', name: 'execParams', type: 'address[]' },
                  { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
                  { internalType: 'bytes', name: 'sig', type: 'bytes' }
                ],
                internalType: 'struct OrderTypes.MakerOrder[]',
                name: 'buys',
                type: 'tuple[]'
              },
              {
                components: [
                  { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
                  { internalType: 'address', name: 'signer', type: 'address' },
                  { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
                  {
                    components: [
                      { internalType: 'address', name: 'collection', type: 'address' },
                      {
                        components: [
                          { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                          { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                        ],
                        internalType: 'struct OrderTypes.TokenInfo[]',
                        name: 'tokens',
                        type: 'tuple[]'
                      }
                    ],
                    internalType: 'struct OrderTypes.OrderItem[]',
                    name: 'nfts',
                    type: 'tuple[]'
                  },
                  { internalType: 'address[]', name: 'execParams', type: 'address[]' },
                  { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
                  { internalType: 'bytes', name: 'sig', type: 'bytes' }
                ],
                internalType: 'struct OrderTypes.MakerOrder[]',
                name: 'sells',
                type: 'tuple[]'
              },
              {
                components: [
                  { internalType: 'address', name: 'collection', type: 'address' },
                  {
                    components: [
                      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                      { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                    ],
                    internalType: 'struct OrderTypes.TokenInfo[]',
                    name: 'tokens',
                    type: 'tuple[]'
                  }
                ],
                internalType: 'struct OrderTypes.OrderItem[][]',
                name: 'constructs',
                type: 'tuple[][]'
              },
              { internalType: 'enum FlowMatchExecutorTypes.MatchOrdersType', name: 'matchType', type: 'uint8' }
            ],
            internalType: 'struct FlowMatchExecutorTypes.MatchOrders[]',
            name: 'matches',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct FlowMatchExecutorTypes.Batch[]',
        name: 'batches',
        type: 'tuple[]'
      }
    ],
    name: 'executeBrokerMatches',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            components: [
              { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
              { internalType: 'address', name: 'signer', type: 'address' },
              { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
              {
                components: [
                  { internalType: 'address', name: 'collection', type: 'address' },
                  {
                    components: [
                      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                      { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                    ],
                    internalType: 'struct OrderTypes.TokenInfo[]',
                    name: 'tokens',
                    type: 'tuple[]'
                  }
                ],
                internalType: 'struct OrderTypes.OrderItem[]',
                name: 'nfts',
                type: 'tuple[]'
              },
              { internalType: 'address[]', name: 'execParams', type: 'address[]' },
              { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
              { internalType: 'bytes', name: 'sig', type: 'bytes' }
            ],
            internalType: 'struct OrderTypes.MakerOrder[]',
            name: 'buys',
            type: 'tuple[]'
          },
          {
            components: [
              { internalType: 'bool', name: 'isSellOrder', type: 'bool' },
              { internalType: 'address', name: 'signer', type: 'address' },
              { internalType: 'uint256[]', name: 'constraints', type: 'uint256[]' },
              {
                components: [
                  { internalType: 'address', name: 'collection', type: 'address' },
                  {
                    components: [
                      { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                      { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                    ],
                    internalType: 'struct OrderTypes.TokenInfo[]',
                    name: 'tokens',
                    type: 'tuple[]'
                  }
                ],
                internalType: 'struct OrderTypes.OrderItem[]',
                name: 'nfts',
                type: 'tuple[]'
              },
              { internalType: 'address[]', name: 'execParams', type: 'address[]' },
              { internalType: 'bytes', name: 'extraParams', type: 'bytes' },
              { internalType: 'bytes', name: 'sig', type: 'bytes' }
            ],
            internalType: 'struct OrderTypes.MakerOrder[]',
            name: 'sells',
            type: 'tuple[]'
          },
          {
            components: [
              { internalType: 'address', name: 'collection', type: 'address' },
              {
                components: [
                  { internalType: 'uint256', name: 'tokenId', type: 'uint256' },
                  { internalType: 'uint256', name: 'numTokens', type: 'uint256' }
                ],
                internalType: 'struct OrderTypes.TokenInfo[]',
                name: 'tokens',
                type: 'tuple[]'
              }
            ],
            internalType: 'struct OrderTypes.OrderItem[][]',
            name: 'constructs',
            type: 'tuple[][]'
          },
          { internalType: 'enum FlowMatchExecutorTypes.MatchOrdersType', name: 'matchType', type: 'uint8' }
        ],
        internalType: 'struct FlowMatchExecutorTypes.MatchOrders[]',
        name: 'matches',
        type: 'tuple[]'
      }
    ],
    name: 'executeNativeMatches',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'initiator',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'bytes32', name: 'message', type: 'bytes32' },
      { internalType: 'bytes', name: 'signature', type: 'bytes' }
    ],
    name: 'isValidSignature',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'address', name: '', type: 'address' },
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'bytes', name: '', type: 'bytes' }
    ],
    name: 'onERC721Received',
    outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
    stateMutability: 'pure',
    type: 'function'
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'pause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [],
    name: 'paused',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function'
  },
  { inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { inputs: [], name: 'unpause', outputs: [], stateMutability: 'nonpayable', type: 'function' },
  {
    inputs: [{ internalType: 'address', name: '_initiator', type: 'address' }],
    name: 'updateInitiator',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [],
    name: 'weth',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function'
  },
  {
    inputs: [{ internalType: 'address', name: 'destination', type: 'address' }],
    name: 'withdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      { internalType: 'address', name: 'destination', type: 'address' },
      { internalType: 'address', name: 'currency', type: 'address' },
      { internalType: 'uint256', name: 'amount', type: 'uint256' }
    ],
    name: 'withdrawTokens',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  { stateMutability: 'payable', type: 'receive' }
];
