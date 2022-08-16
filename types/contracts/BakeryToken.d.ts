import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IAllowanceParams {
    owner: string;
    spender: string;
}
export interface IApproveParams {
    spender: string;
    amount: number | BigNumber;
}
export interface ICheckpointsParams {
    param1: string;
    param2: number | BigNumber;
}
export interface IDecreaseAllowanceParams {
    spender: string;
    subtractedValue: number | BigNumber;
}
export interface IDelegateBySigParams {
    delegatee: string;
    nonce: number | BigNumber;
    expiry: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IGetPriorVotesParams {
    account: string;
    blockNumber: number | BigNumber;
}
export interface IIncreaseAllowanceParams {
    spender: string;
    addedValue: number | BigNumber;
}
export interface IMintToParams {
    to: string;
    amount: number | BigNumber;
}
export interface ITransferParams {
    recipient: string;
    amount: number | BigNumber;
}
export interface ITransferFromParams {
    sender: string;
    recipient: string;
    amount: number | BigNumber;
}
export declare class BakeryToken extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): BakeryToken.ApprovalEvent[];
    decodeApprovalEvent(event: Event): BakeryToken.ApprovalEvent;
    parseDelegateChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateChangedEvent[];
    decodeDelegateChangedEvent(event: Event): BakeryToken.DelegateChangedEvent;
    parseDelegateVotesChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateVotesChangedEvent[];
    decodeDelegateVotesChangedEvent(event: Event): BakeryToken.DelegateVotesChangedEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryToken.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): BakeryToken.OwnershipTransferredEvent;
    parseTransferEvent(receipt: TransactionReceipt): BakeryToken.TransferEvent[];
    decodeTransferEvent(event: Event): BakeryToken.TransferEvent;
    DELEGATION_TYPEHASH: {
        (): Promise<string>;
    };
    DOMAIN_TYPEHASH: {
        (): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    };
    balanceOf: {
        (account: string): Promise<BigNumber>;
    };
    checkpoints: {
        (params: ICheckpointsParams): Promise<{
            fromBlock: BigNumber;
            votes: BigNumber;
        }>;
    };
    decimals: {
        (): Promise<BigNumber>;
    };
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    };
    delegate: {
        (delegatee: string): Promise<TransactionReceipt>;
        call: (delegatee: string) => Promise<void>;
    };
    delegateBySig: {
        (params: IDelegateBySigParams): Promise<TransactionReceipt>;
        call: (params: IDelegateBySigParams) => Promise<void>;
    };
    delegates: {
        (delegator: string): Promise<string>;
    };
    getCurrentVotes: {
        (account: string): Promise<BigNumber>;
    };
    getOwner: {
        (): Promise<string>;
    };
    getPriorVotes: {
        (params: IGetPriorVotesParams): Promise<BigNumber>;
    };
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    };
    mint: {
        (amount: number | BigNumber): Promise<TransactionReceipt>;
        call: (amount: number | BigNumber) => Promise<boolean>;
    };
    mintTo: {
        (params: IMintToParams): Promise<TransactionReceipt>;
        call: (params: IMintToParams) => Promise<void>;
    };
    name: {
        (): Promise<string>;
    };
    nonces: {
        (param1: string): Promise<BigNumber>;
    };
    numCheckpoints: {
        (param1: string): Promise<BigNumber>;
    };
    owner: {
        (): Promise<string>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    symbol: {
        (): Promise<string>;
    };
    totalSupply: {
        (): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    private assign;
}
export declare module BakeryToken {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface DelegateChangedEvent {
        delegator: string;
        fromDelegate: string;
        toDelegate: string;
        _event: Event;
    }
    interface DelegateVotesChangedEvent {
        delegate: string;
        previousBalance: BigNumber;
        newBalance: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}
