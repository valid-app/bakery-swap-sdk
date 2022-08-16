import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./BakeryMaster.json";

export interface IDeployParams {bake:string;devAddr:string;bakeStartBlock:number|BigNumber;startBlock:number|BigNumber;bonusEndBlock:number|BigNumber;bonusBeforeBulkBlockSize:number|BigNumber;bonusBeforeCommonDifference:number|BigNumber;bonusEndCommonDifference:number|BigNumber}
export interface IAddParams {allocPoint:number|BigNumber;pair:string;withUpdate:boolean}
export interface IDepositParams {pair:string;amount:number|BigNumber}
export interface IGetTotalRewardInfoParams {from:number|BigNumber;to:number|BigNumber}
export interface IGetTotalRewardInfoInSameCommonDifferenceParams {from:number|BigNumber;to:number|BigNumber;bakeInitBlock:number|BigNumber;bulkBlockSize:number|BigNumber;commonDifference:number|BigNumber}
export interface IPendingBakeParams {pair:string;user:string}
export interface IPoolUserInfoMapParams {param1:string;param2:string}
export interface ISetParams {pair:string;allocPoint:number|BigNumber;withUpdate:boolean}
export interface IWithdrawParams {pair:string;amount:number|BigNumber}
export class BakeryMaster extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.bake,params.devAddr,Utils.toString(params.bakeStartBlock),Utils.toString(params.startBlock),Utils.toString(params.bonusEndBlock),Utils.toString(params.bonusBeforeBulkBlockSize),Utils.toString(params.bonusBeforeCommonDifference),Utils.toString(params.bonusEndCommonDifference)]);
    }
    parseDepositEvent(receipt: TransactionReceipt): BakeryMaster.DepositEvent[]{
        return this.parseEvents(receipt, "Deposit").map(e=>this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event: Event): BakeryMaster.DepositEvent{
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.EmergencyWithdrawEvent[]{
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e=>this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event: Event): BakeryMaster.EmergencyWithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryMaster.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): BakeryMaster.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseWithdrawEvent(receipt: TransactionReceipt): BakeryMaster.WithdrawEvent[]{
        return this.parseEvents(receipt, "Withdraw").map(e=>this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event: Event): BakeryMaster.WithdrawEvent{
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new BigNumber(result.amount),
            _event: event
        };
    }
    accBakePerShareMultiple: {
        (): Promise<BigNumber>;
    }
    add: {
        (params: IAddParams): Promise<TransactionReceipt>;
        call: (params: IAddParams) => Promise<void>;
    }
    bake: {
        (): Promise<string>;
    }
    bakeBonusEndBlock: {
        (): Promise<BigNumber>;
    }
    bakeStartBlock: {
        (): Promise<BigNumber>;
    }
    bonusBeforeBulkBlockSize: {
        (): Promise<BigNumber>;
    }
    bonusBeforeCommonDifference: {
        (): Promise<BigNumber>;
    }
    bonusEndBlock: {
        (): Promise<BigNumber>;
    }
    bonusEndBulkBlockSize: {
        (): Promise<BigNumber>;
    }
    bonusEndCommonDifference: {
        (): Promise<BigNumber>;
    }
    deposit: {
        (params: IDepositParams): Promise<TransactionReceipt>;
        call: (params: IDepositParams) => Promise<void>;
    }
    dev: {
        (devAddr:string): Promise<TransactionReceipt>;
        call: (devAddr:string) => Promise<void>;
    }
    devAddr: {
        (): Promise<string>;
    }
    emergencyWithdraw: {
        (pair:string): Promise<TransactionReceipt>;
        call: (pair:string) => Promise<void>;
    }
    existsPool: {
        (pair:string): Promise<boolean>;
    }
    getTotalRewardInfo: {
        (params: IGetTotalRewardInfoParams): Promise<BigNumber>;
    }
    getTotalRewardInfoInSameCommonDifference: {
        (params: IGetTotalRewardInfoInSameCommonDifferenceParams): Promise<BigNumber>;
    }
    massUpdatePools: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    maxRewardBlockNumber: {
        (): Promise<BigNumber>;
    }
    owner: {
        (): Promise<string>;
    }
    pendingBake: {
        (params: IPendingBakeParams): Promise<BigNumber>;
    }
    poolAddresses: {
        (param1:number|BigNumber): Promise<string>;
    }
    poolInfoMap: {
        (param1:string): Promise<{allocPoint:BigNumber,lastRewardBlock:BigNumber,accBakePerShare:BigNumber,exists:boolean}>;
    }
    poolLength: {
        (): Promise<BigNumber>;
    }
    poolUserInfoMap: {
        (params: IPoolUserInfoMapParams): Promise<{amount:BigNumber,rewardDebt:BigNumber}>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    set: {
        (params: ISetParams): Promise<TransactionReceipt>;
        call: (params: ISetParams) => Promise<void>;
    }
    startBlock: {
        (): Promise<BigNumber>;
    }
    totalAllocPoint: {
        (): Promise<BigNumber>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    updatePool: {
        (pair:string): Promise<TransactionReceipt>;
        call: (pair:string) => Promise<void>;
    }
    withdraw: {
        (params: IWithdrawParams): Promise<TransactionReceipt>;
        call: (params: IWithdrawParams) => Promise<void>;
    }
    private assign(){
        let accBakePerShareMultiple_call = async (): Promise<BigNumber> => {
            let result = await this.call('accBakePerShareMultiple');
            return new BigNumber(result);
        }
        this.accBakePerShareMultiple = accBakePerShareMultiple_call
        let bake_call = async (): Promise<string> => {
            let result = await this.call('bake');
            return result;
        }
        this.bake = bake_call
        let bakeBonusEndBlock_call = async (): Promise<BigNumber> => {
            let result = await this.call('bakeBonusEndBlock');
            return new BigNumber(result);
        }
        this.bakeBonusEndBlock = bakeBonusEndBlock_call
        let bakeStartBlock_call = async (): Promise<BigNumber> => {
            let result = await this.call('bakeStartBlock');
            return new BigNumber(result);
        }
        this.bakeStartBlock = bakeStartBlock_call
        let bonusBeforeBulkBlockSize_call = async (): Promise<BigNumber> => {
            let result = await this.call('bonusBeforeBulkBlockSize');
            return new BigNumber(result);
        }
        this.bonusBeforeBulkBlockSize = bonusBeforeBulkBlockSize_call
        let bonusBeforeCommonDifference_call = async (): Promise<BigNumber> => {
            let result = await this.call('bonusBeforeCommonDifference');
            return new BigNumber(result);
        }
        this.bonusBeforeCommonDifference = bonusBeforeCommonDifference_call
        let bonusEndBlock_call = async (): Promise<BigNumber> => {
            let result = await this.call('bonusEndBlock');
            return new BigNumber(result);
        }
        this.bonusEndBlock = bonusEndBlock_call
        let bonusEndBulkBlockSize_call = async (): Promise<BigNumber> => {
            let result = await this.call('bonusEndBulkBlockSize');
            return new BigNumber(result);
        }
        this.bonusEndBulkBlockSize = bonusEndBulkBlockSize_call
        let bonusEndCommonDifference_call = async (): Promise<BigNumber> => {
            let result = await this.call('bonusEndCommonDifference');
            return new BigNumber(result);
        }
        this.bonusEndCommonDifference = bonusEndCommonDifference_call
        let devAddr_call = async (): Promise<string> => {
            let result = await this.call('devAddr');
            return result;
        }
        this.devAddr = devAddr_call
        let existsPool_call = async (pair:string): Promise<boolean> => {
            let result = await this.call('existsPool',[pair]);
            return result;
        }
        this.existsPool = existsPool_call
        let getTotalRewardInfoParams = (params: IGetTotalRewardInfoParams) => [Utils.toString(params.from),Utils.toString(params.to)];
        let getTotalRewardInfo_call = async (params: IGetTotalRewardInfoParams): Promise<BigNumber> => {
            let result = await this.call('getTotalRewardInfo',getTotalRewardInfoParams(params));
            return new BigNumber(result);
        }
        this.getTotalRewardInfo = getTotalRewardInfo_call
        let getTotalRewardInfoInSameCommonDifferenceParams = (params: IGetTotalRewardInfoInSameCommonDifferenceParams) => [Utils.toString(params.from),Utils.toString(params.to),Utils.toString(params.bakeInitBlock),Utils.toString(params.bulkBlockSize),Utils.toString(params.commonDifference)];
        let getTotalRewardInfoInSameCommonDifference_call = async (params: IGetTotalRewardInfoInSameCommonDifferenceParams): Promise<BigNumber> => {
            let result = await this.call('getTotalRewardInfoInSameCommonDifference',getTotalRewardInfoInSameCommonDifferenceParams(params));
            return new BigNumber(result);
        }
        this.getTotalRewardInfoInSameCommonDifference = getTotalRewardInfoInSameCommonDifference_call
        let maxRewardBlockNumber_call = async (): Promise<BigNumber> => {
            let result = await this.call('maxRewardBlockNumber');
            return new BigNumber(result);
        }
        this.maxRewardBlockNumber = maxRewardBlockNumber_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let pendingBakeParams = (params: IPendingBakeParams) => [params.pair,params.user];
        let pendingBake_call = async (params: IPendingBakeParams): Promise<BigNumber> => {
            let result = await this.call('pendingBake',pendingBakeParams(params));
            return new BigNumber(result);
        }
        this.pendingBake = pendingBake_call
        let poolAddresses_call = async (param1:number|BigNumber): Promise<string> => {
            let result = await this.call('poolAddresses',[Utils.toString(param1)]);
            return result;
        }
        this.poolAddresses = poolAddresses_call
        let poolInfoMap_call = async (param1:string): Promise<{allocPoint:BigNumber,lastRewardBlock:BigNumber,accBakePerShare:BigNumber,exists:boolean}> => {
            let result = await this.call('poolInfoMap',[param1]);
            return {
                allocPoint: new BigNumber(result.allocPoint),
                lastRewardBlock: new BigNumber(result.lastRewardBlock),
                accBakePerShare: new BigNumber(result.accBakePerShare),
                exists: result.exists
            };
        }
        this.poolInfoMap = poolInfoMap_call
        let poolLength_call = async (): Promise<BigNumber> => {
            let result = await this.call('poolLength');
            return new BigNumber(result);
        }
        this.poolLength = poolLength_call
        let poolUserInfoMapParams = (params: IPoolUserInfoMapParams) => [params.param1,params.param2];
        let poolUserInfoMap_call = async (params: IPoolUserInfoMapParams): Promise<{amount:BigNumber,rewardDebt:BigNumber}> => {
            let result = await this.call('poolUserInfoMap',poolUserInfoMapParams(params));
            return {
                amount: new BigNumber(result.amount),
                rewardDebt: new BigNumber(result.rewardDebt)
            };
        }
        this.poolUserInfoMap = poolUserInfoMap_call
        let startBlock_call = async (): Promise<BigNumber> => {
            let result = await this.call('startBlock');
            return new BigNumber(result);
        }
        this.startBlock = startBlock_call
        let totalAllocPoint_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalAllocPoint');
            return new BigNumber(result);
        }
        this.totalAllocPoint = totalAllocPoint_call
        let addParams = (params: IAddParams) => [Utils.toString(params.allocPoint),params.pair,params.withUpdate];
        let add_send = async (params: IAddParams): Promise<TransactionReceipt> => {
            let result = await this.send('add',addParams(params));
            return result;
        }
        let add_call = async (params: IAddParams): Promise<void> => {
            let result = await this.call('add',addParams(params));
            return;
        }
        this.add = Object.assign(add_send, {
            call:add_call
        });
        let depositParams = (params: IDepositParams) => [params.pair,Utils.toString(params.amount)];
        let deposit_send = async (params: IDepositParams): Promise<TransactionReceipt> => {
            let result = await this.send('deposit',depositParams(params));
            return result;
        }
        let deposit_call = async (params: IDepositParams): Promise<void> => {
            let result = await this.call('deposit',depositParams(params));
            return;
        }
        this.deposit = Object.assign(deposit_send, {
            call:deposit_call
        });
        let dev_send = async (devAddr:string): Promise<TransactionReceipt> => {
            let result = await this.send('dev',[devAddr]);
            return result;
        }
        let dev_call = async (devAddr:string): Promise<void> => {
            let result = await this.call('dev',[devAddr]);
            return;
        }
        this.dev = Object.assign(dev_send, {
            call:dev_call
        });
        let emergencyWithdraw_send = async (pair:string): Promise<TransactionReceipt> => {
            let result = await this.send('emergencyWithdraw',[pair]);
            return result;
        }
        let emergencyWithdraw_call = async (pair:string): Promise<void> => {
            let result = await this.call('emergencyWithdraw',[pair]);
            return;
        }
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call:emergencyWithdraw_call
        });
        let massUpdatePools_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('massUpdatePools');
            return result;
        }
        let massUpdatePools_call = async (): Promise<void> => {
            let result = await this.call('massUpdatePools');
            return;
        }
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call:massUpdatePools_call
        });
        let renounceOwnership_send = async (): Promise<TransactionReceipt> => {
            let result = await this.send('renounceOwnership');
            return result;
        }
        let renounceOwnership_call = async (): Promise<void> => {
            let result = await this.call('renounceOwnership');
            return;
        }
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call:renounceOwnership_call
        });
        let setParams = (params: ISetParams) => [params.pair,Utils.toString(params.allocPoint),params.withUpdate];
        let set_send = async (params: ISetParams): Promise<TransactionReceipt> => {
            let result = await this.send('set',setParams(params));
            return result;
        }
        let set_call = async (params: ISetParams): Promise<void> => {
            let result = await this.call('set',setParams(params));
            return;
        }
        this.set = Object.assign(set_send, {
            call:set_call
        });
        let transferOwnership_send = async (newOwner:string): Promise<TransactionReceipt> => {
            let result = await this.send('transferOwnership',[newOwner]);
            return result;
        }
        let transferOwnership_call = async (newOwner:string): Promise<void> => {
            let result = await this.call('transferOwnership',[newOwner]);
            return;
        }
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call:transferOwnership_call
        });
        let updatePool_send = async (pair:string): Promise<TransactionReceipt> => {
            let result = await this.send('updatePool',[pair]);
            return result;
        }
        let updatePool_call = async (pair:string): Promise<void> => {
            let result = await this.call('updatePool',[pair]);
            return;
        }
        this.updatePool = Object.assign(updatePool_send, {
            call:updatePool_call
        });
        let withdrawParams = (params: IWithdrawParams) => [params.pair,Utils.toString(params.amount)];
        let withdraw_send = async (params: IWithdrawParams): Promise<TransactionReceipt> => {
            let result = await this.send('withdraw',withdrawParams(params));
            return result;
        }
        let withdraw_call = async (params: IWithdrawParams): Promise<void> => {
            let result = await this.call('withdraw',withdrawParams(params));
            return;
        }
        this.withdraw = Object.assign(withdraw_send, {
            call:withdraw_call
        });
    }
}
export module BakeryMaster{
    export interface DepositEvent {user:string,poolAddress:string,amount:BigNumber,_event:Event}
    export interface EmergencyWithdrawEvent {user:string,poolAddress:string,amount:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface WithdrawEvent {user:string,poolAddress:string,amount:BigNumber,_event:Event}
}