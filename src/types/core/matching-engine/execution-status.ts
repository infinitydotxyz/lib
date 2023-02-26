export interface ExecutionStatusNotFound {
  id: string;
  status: 'not-found';
}

export interface ExecutionStatusPendingMatching {
  id: string;
  status: 'pending-matching';
}

export interface ExecutionStatusMatched {
  id: string;
  status: 'matched-pending-execution' | 'matched-executing' | 'matched-executed';
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

export interface ExecutionStatusMatchedPendingExecution {
  id: string;
  status: 'matched-pending-execution';
  matchInfo: {
    side: 'proposer' | 'recipient';
    proposerInitiatedAt: number;
    matchedAt: number;
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
  | ExecutionStatusMatched
  | ExecutionStatusMatchedNoMatches
  | ExecutionStatusMatchedPendingExecution
  | ExecutionStatusMatchedInexecutable
  | ExecutionStatusMatchedExecuting
  | ExecutionStatusMatchedNotIncluded
  | ExecutionStatusMatchedExecuted;
