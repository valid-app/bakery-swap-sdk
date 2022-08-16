import { IWallet, Contract, TransactionReceipt, BigNumber, Event } from "@ijstech/eth-wallet";
export interface IDeployParams {
    bake: string;
    devAddr: string;
    bakeStartBlock: number | BigNumber;
    startBlock: number | BigNumber;
    bonusEndBlock: number | BigNumber;
    bonusBeforeBulkBlockSize: number | BigNumber;
    bonusBeforeCommonDifference: number | BigNumber;
    bonusEndCommonDifference: number | BigNumber;
}
export interface IAddParams {
    allocPoint: number | BigNumber;
    pair: string;
    withUpdate: boolean;
}
export interface IDepositParams {
    pair: string;
    amount: number | BigNumber;
}
export interface IGetTotalRewardInfoParams {
    from: number | BigNumber;
    to: number | BigNumber;
}
export interface IGetTotalRewardInfoInSameCommonDifferenceParams {
    from: number | BigNumber;
    to: number | BigNumber;
    bakeInitBlock: number | BigNumber;
    bulkBlockSize: number | BigNumber;
    commonDifference: number | BigNumber;
}
export interface IPendingBakeParams {
    pair: string;
    user: string;
}
export interface IPoolUserInfoMapParams {
    param1: string;
    param2: string;
}
export interface ISetParams {
    pair: string;
    allocPoint: number | BigNumber;
    withUpdate: boolean;
}
export interface IWithdrawParams {
    pair: string;
    amount: number | BigNumber;
}
export declare class BakeryMaster extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    parseDepositEvent(receipt: TransactionReceipt): BakeryMaster.DepositEvent[];
    decodeDepositEvent(event: Event): BakeryMaster.DepositEvent;
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.EmergencyWithdrawEvent[];
    decodeEmergencyWithdrawEvent(event: Event): BakeryMaster.EmergencyWithdrawEvent;
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryMaster.OwnershipTransferredEvent[];
    decodeOwnershipTransferredEvent(event: Event): BakeryMaster.OwnershipTransferredEvent;
    parseWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.WithdrawEvent[];
    decodeWithdrawEvent(event: Event): BakeryMaster.WithdrawEvent;
    accBakePerShareMultiple: {
        (): Promise<BigNumber>;
    };
    add: {
        (params: IAddParams): Promise<TransactionReceipt>;
        call: (params: IAddParams) => Promise<void>;
    };
    bake: {
        (): Promise<string>;
    };
    bakeBonusEndBlock: {
        (): Promise<BigNumber>;
    };
    bakeStartBlock: {
        (): Promise<BigNumber>;
    };
    bonusBeforeBulkBlockSize: {
        (): Promise<BigNumber>;
    };
    bonusBeforeCommonDifference: {
        (): Promise<BigNumber>;
    };
    bonusEndBlock: {
        (): Promise<BigNumber>;
    };
    bonusEndBulkBlockSize: {
        (): Promise<BigNumber>;
    };
    bonusEndCommonDifference: {
        (): Promise<BigNumber>;
    };
    deposit: {
        (params: IDepositParams): Promise<TransactionReceipt>;
        call: (params: IDepositParams) => Promise<void>;
    };
    dev: {
        (devAddr: string): Promise<TransactionReceipt>;
        call: (devAddr: string) => Promise<void>;
    };
    devAddr: {
        (): Promise<string>;
    };
    emergencyWithdraw: {
        (pair: string): Promise<TransactionReceipt>;
        call: (pair: string) => Promise<void>;
    };
    existsPool: {
        (pair: string): Promise<boolean>;
    };
    getTotalRewardInfo: {
        (params: IGetTotalRewardInfoParams): Promise<BigNumber>;
    };
    getTotalRewardInfoInSameCommonDifference: {
        (params: IGetTotalRewardInfoInSameCommonDifferenceParams): Promise<BigNumber>;
    };
    massUpdatePools: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    maxRewardBlockNumber: {
        (): Promise<BigNumber>;
    };
    owner: {
        (): Promise<string>;
    };
    pendingBake: {
        (params: IPendingBakeParams): Promise<BigNumber>;
    };
    poolAddresses: {
        (param1: number | BigNumber): Promise<string>;
    };
    poolInfoMap: {
        (param1: string): Promise<{
            allocPoint: BigNumber;
            lastRewardBlock: BigNumber;
            accBakePerShare: BigNumber;
            exists: boolean;
        }>;
    };
    poolLength: {
        (): Promise<BigNumber>;
    };
    poolUserInfoMap: {
        (params: IPoolUserInfoMapParams): Promise<{
            amount: BigNumber;
            rewardDebt: BigNumber;
        }>;
    };
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    };
    set: {
        (params: ISetParams): Promise<TransactionReceipt>;
        call: (params: ISetParams) => Promise<void>;
    };
    startBlock: {
        (): Promise<BigNumber>;
    };
    totalAllocPoint: {
        (): Promise<BigNumber>;
    };
    transferOwnership: {
        (newOwner: string): Promise<TransactionReceipt>;
        call: (newOwner: string) => Promise<void>;
    };
    updatePool: {
        (pair: string): Promise<TransactionReceipt>;
        call: (pair: string) => Promise<void>;
    };
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<void>;
    };
    private assign;
}
export declare module BakeryMaster {
    interface DepositEvent {
        user: string;
        poolAddress: string;
        amount: BigNumber;
        _event: Event;
    }
    interface EmergencyWithdrawEvent {
        user: string;
        poolAddress: string;
        amount: BigNumber;
        _event: Event;
    }
    interface OwnershipTransferredEvent {
        previousOwner: string;
        newOwner: string;
        _event: Event;
    }
    interface WithdrawEvent {
        user: string;
        poolAddress: string;
        amount: BigNumber;
        _event: Event;
    }
}
