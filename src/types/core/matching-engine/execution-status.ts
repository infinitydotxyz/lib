export interface ExecutionStatusNotFound {
  id: string;
  status: 'not-found';
}

export interface ExecutionStatusPendingMatching {
  id: string;
  status: 'pending-matching';
}

export interface ExecutionStatusMatchedNoMatches {
  id: string;
  status: 'matched-no-matches';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
}

export interface BaseExecutionStatusMatchedPendingExecution {
  id: string;
  status: 'matched-pending-execution';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
}

export interface ExecutionStatusMatchedPendingExecutionGasTooLow extends BaseExecutionStatusMatchedPendingExecution {
  reason: 'gas-too-low';
  bestMatchMaxFeePerGasGwei: string;
  currentMaxFeePerGasGwei: string;
}

export interface ExecutionStatusMatchedPendingExecutionUnknown extends BaseExecutionStatusMatchedPendingExecution {
  reason: 'unknown';
}

export type ExecutionStatusMatchedPendingExecution =
  | ExecutionStatusMatchedPendingExecutionGasTooLow
  | ExecutionStatusMatchedPendingExecutionUnknown;

export interface ExecutionStatusMatchedInexecutableOfferWETHBalanceTooLow {
  id: string;
  status: 'matched-inexecutable-offer-weth-too-low';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
  executionInfo: {
    reason: string;
    initiatedAt: number;
    matchId: string;
    matchedOrderId: string;
    blockNumber: number;
    baseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
  };
}

export interface ExecutionStatusMatchedInexecutableOfferWETHAllowanceTooLow {
  id: string;
  status: 'matched-inexecutable-offer-weth-allowance-too-low';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
  executionInfo: {
    reason: string;
    initiatedAt: number;
    matchId: string;
    matchedOrderId: string;
    blockNumber: number;
    baseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
  };
}

export interface ExecutionStatusMatchedInexecutable {
  id: string;
  status: 'matched-inexecutable';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
  executionInfo: {
    reason: string;
    initiatedAt: number;
    matchId: string;
    matchedOrderId: string;
    blockNumber: number;
    baseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
  };
}

export interface ExecutionStatusMatchedExecuting {
  id: string;
  status: 'matched-executing';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
  executionInfo: {
    initiatedAt: number;
    matchId: string;
    matchedOrderId: string;
    blockNumber: number;
    baseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
  };
}

export interface ExecutionStatusMatchedNotIncluded {
  id: string;
  status: 'matched-executing-not-included';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
  executionInfo: {
    initiatedAt: number;
    receiptReceivedAt: number;
    matchId: string;
    matchedOrderId: string;
    blockNumber: number;
    baseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    effectiveGasPrice: string;
    cumulativeGasUsed: string;
    gasUsed: string;
  };
}

export interface ExecutionStatusMatchedExecuted {
  id: string;
  status: 'matched-executed';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
  };
  executionInfo: {
    initiatedAt: number;
    receiptReceivedAt: number;
    blockTimestampSeconds: number;
    matchId: string;
    matchedOrderId: string;
    blockNumber: number;
    baseFeePerGas: string;
    maxFeePerGas: string;
    maxPriorityFeePerGas: string;
    effectiveGasPrice: string;
    cumulativeGasUsed: string;
    gasUsed: string;
    txHash: string;
  };
}

export type ExecutionStatus =
  | ExecutionStatusNotFound
  | ExecutionStatusPendingMatching
  | ExecutionStatusMatchedNoMatches
  | ExecutionStatusMatchedPendingExecution
  | ExecutionStatusMatchedInexecutable
  | ExecutionStatusMatchedInexecutableOfferWETHBalanceTooLow
  | ExecutionStatusMatchedInexecutableOfferWETHAllowanceTooLow
  | ExecutionStatusMatchedExecuting
  | ExecutionStatusMatchedNotIncluded
  | ExecutionStatusMatchedExecuted;
