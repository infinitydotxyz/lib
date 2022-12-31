export enum RequestKind {
  TokenApproval = 'TOKEN_APPROVAL',
  DepositCurrency = 'DEPOSIT_CURRENCY',
  CurrencyAllowance = 'CURRENCY_ALLOWANCE',
  Signature = 'SIGNATURE'
}

export interface BaseRequest {
  status: 'incomplete' | 'complete';
  message: string;
  kind: RequestKind;
}

export interface IncompleteTransactionRequest extends BaseRequest {
  status: 'incomplete';
  txData: {
    from: string;
    to: string;
    data: string;
    value?: string;
  };
}

export interface CompleteTransactionRequest extends BaseRequest {
  status: 'complete';
}

export type TransactionRequest = IncompleteTransactionRequest | CompleteTransactionRequest;

export type TokenApprovalRequest = TransactionRequest & {
  kind: RequestKind.TokenApproval;
};

export type CurrencyAllowanceRequest = TransactionRequest & {
  kind: RequestKind.CurrencyAllowance;
};

export type DepositCurrencyRequest = Omit<TransactionRequest, 'txData'> & {
  kind: RequestKind.DepositCurrency;
};

export interface EIP721Data {
  signatureKind: 'eip712';
  domain: {
    name: string;
    version: string;
    chainId: number;
    verifyingContract: string;
  };
  types: Record<string, { name: string; type: string }[]>;
  value: unknown;
}

export type IncompleteGenerateSignatureRequest = BaseRequest & {
  kind: RequestKind.Signature;
  status: 'incomplete';
  signatureData: EIP721Data;
};

export type CompleteGenerateSignatureRequest = BaseRequest & {
  kind: RequestKind.Signature;
  status: 'complete';
};

export type SignatureRequest = IncompleteGenerateSignatureRequest | CompleteGenerateSignatureRequest;

export interface SignerRequests {
  nftApprovals: TokenApprovalRequest[];
  currencyApprovals: CurrencyAllowanceRequest[];
  currencyDeposits: DepositCurrencyRequest[];
  signatureRequests: SignatureRequest[];
}
