import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./BakeryToken.json";

export interface IAllowanceParams {owner:string;spender:string}
export interface IApproveParams {spender:string;amount:number|BigNumber}
export interface ICheckpointsParams {param1:string;param2:number|BigNumber}
export interface IDecreaseAllowanceParams {spender:string;subtractedValue:number|BigNumber}
export interface IDelegateBySigParams {delegatee:string;nonce:number|BigNumber;expiry:number|BigNumber;v:number|BigNumber;r:string;s:string}
export interface IGetPriorVotesParams {account:string;blockNumber:number|BigNumber}
export interface IIncreaseAllowanceParams {spender:string;addedValue:number|BigNumber}
export interface IMintToParams {to:string;amount:number|BigNumber}
export interface ITransferParams {recipient:string;amount:number|BigNumber}
export interface ITransferFromParams {sender:string;recipient:string;amount:number|BigNumber}
export class BakeryToken extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(): Promise<string>{
        return this.__deploy();
    }
    parseApprovalEvent(receipt: TransactionReceipt): BakeryToken.ApprovalEvent[]{
        return this.parseEvents(receipt, "Approval").map(e=>this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event: Event): BakeryToken.ApprovalEvent{
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    parseDelegateChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateChangedEvent[]{
        return this.parseEvents(receipt, "DelegateChanged").map(e=>this.decodeDelegateChangedEvent(e));
    }
    decodeDelegateChangedEvent(event: Event): BakeryToken.DelegateChangedEvent{
        let result = event.data;
        return {
            delegator: result.delegator,
            fromDelegate: result.fromDelegate,
            toDelegate: result.toDelegate,
            _event: event
        };
    }
    parseDelegateVotesChangedEvent(receipt: TransactionReceipt): BakeryToken.DelegateVotesChangedEvent[]{
        return this.parseEvents(receipt, "DelegateVotesChanged").map(e=>this.decodeDelegateVotesChangedEvent(e));
    }
    decodeDelegateVotesChangedEvent(event: Event): BakeryToken.DelegateVotesChangedEvent{
        let result = event.data;
        return {
            delegate: result.delegate,
            previousBalance: new BigNumber(result.previousBalance),
            newBalance: new BigNumber(result.newBalance),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt: TransactionReceipt): BakeryToken.OwnershipTransferredEvent[]{
        return this.parseEvents(receipt, "OwnershipTransferred").map(e=>this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event: Event): BakeryToken.OwnershipTransferredEvent{
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseTransferEvent(receipt: TransactionReceipt): BakeryToken.TransferEvent[]{
        return this.parseEvents(receipt, "Transfer").map(e=>this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event: Event): BakeryToken.TransferEvent{
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new BigNumber(result.value),
            _event: event
        };
    }
    DELEGATION_TYPEHASH: {
        (): Promise<string>;
    }
    DOMAIN_TYPEHASH: {
        (): Promise<string>;
    }
    allowance: {
        (params: IAllowanceParams): Promise<BigNumber>;
    }
    approve: {
        (params: IApproveParams): Promise<TransactionReceipt>;
        call: (params: IApproveParams) => Promise<boolean>;
    }
    balanceOf: {
        (account:string): Promise<BigNumber>;
    }
    checkpoints: {
        (params: ICheckpointsParams): Promise<{fromBlock:BigNumber,votes:BigNumber}>;
    }
    decimals: {
        (): Promise<BigNumber>;
    }
    decreaseAllowance: {
        (params: IDecreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IDecreaseAllowanceParams) => Promise<boolean>;
    }
    delegate: {
        (delegatee:string): Promise<TransactionReceipt>;
        call: (delegatee:string) => Promise<void>;
    }
    delegateBySig: {
        (params: IDelegateBySigParams): Promise<TransactionReceipt>;
        call: (params: IDelegateBySigParams) => Promise<void>;
    }
    delegates: {
        (delegator:string): Promise<string>;
    }
    getCurrentVotes: {
        (account:string): Promise<BigNumber>;
    }
    getOwner: {
        (): Promise<string>;
    }
    getPriorVotes: {
        (params: IGetPriorVotesParams): Promise<BigNumber>;
    }
    increaseAllowance: {
        (params: IIncreaseAllowanceParams): Promise<TransactionReceipt>;
        call: (params: IIncreaseAllowanceParams) => Promise<boolean>;
    }
    mint: {
        (amount:number|BigNumber): Promise<TransactionReceipt>;
        call: (amount:number|BigNumber) => Promise<boolean>;
    }
    mintTo: {
        (params: IMintToParams): Promise<TransactionReceipt>;
        call: (params: IMintToParams) => Promise<void>;
    }
    name: {
        (): Promise<string>;
    }
    nonces: {
        (param1:string): Promise<BigNumber>;
    }
    numCheckpoints: {
        (param1:string): Promise<BigNumber>;
    }
    owner: {
        (): Promise<string>;
    }
    renounceOwnership: {
        (): Promise<TransactionReceipt>;
        call: () => Promise<void>;
    }
    symbol: {
        (): Promise<string>;
    }
    totalSupply: {
        (): Promise<BigNumber>;
    }
    transfer: {
        (params: ITransferParams): Promise<TransactionReceipt>;
        call: (params: ITransferParams) => Promise<boolean>;
    }
    transferFrom: {
        (params: ITransferFromParams): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams) => Promise<boolean>;
    }
    transferOwnership: {
        (newOwner:string): Promise<TransactionReceipt>;
        call: (newOwner:string) => Promise<void>;
    }
    private assign(){
        let DELEGATION_TYPEHASH_call = async (): Promise<string> => {
            let result = await this.call('DELEGATION_TYPEHASH');
            return result;
        }
        this.DELEGATION_TYPEHASH = DELEGATION_TYPEHASH_call
        let DOMAIN_TYPEHASH_call = async (): Promise<string> => {
            let result = await this.call('DOMAIN_TYPEHASH');
            return result;
        }
        this.DOMAIN_TYPEHASH = DOMAIN_TYPEHASH_call
        let allowanceParams = (params: IAllowanceParams) => [params.owner,params.spender];
        let allowance_call = async (params: IAllowanceParams): Promise<BigNumber> => {
            let result = await this.call('allowance',allowanceParams(params));
            return new BigNumber(result);
        }
        this.allowance = allowance_call
        let balanceOf_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('balanceOf',[account]);
            return new BigNumber(result);
        }
        this.balanceOf = balanceOf_call
        let checkpointsParams = (params: ICheckpointsParams) => [params.param1,Utils.toString(params.param2)];
        let checkpoints_call = async (params: ICheckpointsParams): Promise<{fromBlock:BigNumber,votes:BigNumber}> => {
            let result = await this.call('checkpoints',checkpointsParams(params));
            return {
                fromBlock: new BigNumber(result.fromBlock),
                votes: new BigNumber(result.votes)
            };
        }
        this.checkpoints = checkpoints_call
        let decimals_call = async (): Promise<BigNumber> => {
            let result = await this.call('decimals');
            return new BigNumber(result);
        }
        this.decimals = decimals_call
        let delegates_call = async (delegator:string): Promise<string> => {
            let result = await this.call('delegates',[delegator]);
            return result;
        }
        this.delegates = delegates_call
        let getCurrentVotes_call = async (account:string): Promise<BigNumber> => {
            let result = await this.call('getCurrentVotes',[account]);
            return new BigNumber(result);
        }
        this.getCurrentVotes = getCurrentVotes_call
        let getOwner_call = async (): Promise<string> => {
            let result = await this.call('getOwner');
            return result;
        }
        this.getOwner = getOwner_call
        let getPriorVotesParams = (params: IGetPriorVotesParams) => [params.account,Utils.toString(params.blockNumber)];
        let getPriorVotes_call = async (params: IGetPriorVotesParams): Promise<BigNumber> => {
            let result = await this.call('getPriorVotes',getPriorVotesParams(params));
            return new BigNumber(result);
        }
        this.getPriorVotes = getPriorVotes_call
        let name_call = async (): Promise<string> => {
            let result = await this.call('name');
            return result;
        }
        this.name = name_call
        let nonces_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('nonces',[param1]);
            return new BigNumber(result);
        }
        this.nonces = nonces_call
        let numCheckpoints_call = async (param1:string): Promise<BigNumber> => {
            let result = await this.call('numCheckpoints',[param1]);
            return new BigNumber(result);
        }
        this.numCheckpoints = numCheckpoints_call
        let owner_call = async (): Promise<string> => {
            let result = await this.call('owner');
            return result;
        }
        this.owner = owner_call
        let symbol_call = async (): Promise<string> => {
            let result = await this.call('symbol');
            return result;
        }
        this.symbol = symbol_call
        let totalSupply_call = async (): Promise<BigNumber> => {
            let result = await this.call('totalSupply');
            return new BigNumber(result);
        }
        this.totalSupply = totalSupply_call
        let approveParams = (params: IApproveParams) => [params.spender,Utils.toString(params.amount)];
        let approve_send = async (params: IApproveParams): Promise<TransactionReceipt> => {
            let result = await this.send('approve',approveParams(params));
            return result;
        }
        let approve_call = async (params: IApproveParams): Promise<boolean> => {
            let result = await this.call('approve',approveParams(params));
            return result;
        }
        this.approve = Object.assign(approve_send, {
            call:approve_call
        });
        let decreaseAllowanceParams = (params: IDecreaseAllowanceParams) => [params.spender,Utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params: IDecreaseAllowanceParams): Promise<TransactionReceipt> => {
            let result = await this.send('decreaseAllowance',decreaseAllowanceParams(params));
            return result;
        }
        let decreaseAllowance_call = async (params: IDecreaseAllowanceParams): Promise<boolean> => {
            let result = await this.call('decreaseAllowance',decreaseAllowanceParams(params));
            return result;
        }
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call:decreaseAllowance_call
        });
        let delegate_send = async (delegatee:string): Promise<TransactionReceipt> => {
            let result = await this.send('delegate',[delegatee]);
            return result;
        }
        let delegate_call = async (delegatee:string): Promise<void> => {
            let result = await this.call('delegate',[delegatee]);
            return;
        }
        this.delegate = Object.assign(delegate_send, {
            call:delegate_call
        });
        let delegateBySigParams = (params: IDelegateBySigParams) => [params.delegatee,Utils.toString(params.nonce),Utils.toString(params.expiry),Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let delegateBySig_send = async (params: IDelegateBySigParams): Promise<TransactionReceipt> => {
            let result = await this.send('delegateBySig',delegateBySigParams(params));
            return result;
        }
        let delegateBySig_call = async (params: IDelegateBySigParams): Promise<void> => {
            let result = await this.call('delegateBySig',delegateBySigParams(params));
            return;
        }
        this.delegateBySig = Object.assign(delegateBySig_send, {
            call:delegateBySig_call
        });
        let increaseAllowanceParams = (params: IIncreaseAllowanceParams) => [params.spender,Utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params: IIncreaseAllowanceParams): Promise<TransactionReceipt> => {
            let result = await this.send('increaseAllowance',increaseAllowanceParams(params));
            return result;
        }
        let increaseAllowance_call = async (params: IIncreaseAllowanceParams): Promise<boolean> => {
            let result = await this.call('increaseAllowance',increaseAllowanceParams(params));
            return result;
        }
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call:increaseAllowance_call
        });
        let mint_send = async (amount:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('mint',[Utils.toString(amount)]);
            return result;
        }
        let mint_call = async (amount:number|BigNumber): Promise<boolean> => {
            let result = await this.call('mint',[Utils.toString(amount)]);
            return result;
        }
        this.mint = Object.assign(mint_send, {
            call:mint_call
        });
        let mintToParams = (params: IMintToParams) => [params.to,Utils.toString(params.amount)];
        let mintTo_send = async (params: IMintToParams): Promise<TransactionReceipt> => {
            let result = await this.send('mintTo',mintToParams(params));
            return result;
        }
        let mintTo_call = async (params: IMintToParams): Promise<void> => {
            let result = await this.call('mintTo',mintToParams(params));
            return;
        }
        this.mintTo = Object.assign(mintTo_send, {
            call:mintTo_call
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
        let transferParams = (params: ITransferParams) => [params.recipient,Utils.toString(params.amount)];
        let transfer_send = async (params: ITransferParams): Promise<TransactionReceipt> => {
            let result = await this.send('transfer',transferParams(params));
            return result;
        }
        let transfer_call = async (params: ITransferParams): Promise<boolean> => {
            let result = await this.call('transfer',transferParams(params));
            return result;
        }
        this.transfer = Object.assign(transfer_send, {
            call:transfer_call
        });
        let transferFromParams = (params: ITransferFromParams) => [params.sender,params.recipient,Utils.toString(params.amount)];
        let transferFrom_send = async (params: ITransferFromParams): Promise<TransactionReceipt> => {
            let result = await this.send('transferFrom',transferFromParams(params));
            return result;
        }
        let transferFrom_call = async (params: ITransferFromParams): Promise<boolean> => {
            let result = await this.call('transferFrom',transferFromParams(params));
            return result;
        }
        this.transferFrom = Object.assign(transferFrom_send, {
            call:transferFrom_call
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
    }
}
export module BakeryToken{
    export interface ApprovalEvent {owner:string,spender:string,value:BigNumber,_event:Event}
    export interface DelegateChangedEvent {delegator:string,fromDelegate:string,toDelegate:string,_event:Event}
    export interface DelegateVotesChangedEvent {delegate:string,previousBalance:BigNumber,newBalance:BigNumber,_event:Event}
    export interface OwnershipTransferredEvent {previousOwner:string,newOwner:string,_event:Event}
    export interface TransferEvent {from:string,to:string,value:BigNumber,_event:Event}
}