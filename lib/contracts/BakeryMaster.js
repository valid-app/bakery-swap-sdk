"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakeryMaster = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const BakeryMaster_json_1 = __importDefault(require("./BakeryMaster.json"));
class BakeryMaster extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, BakeryMaster_json_1.default.abi, BakeryMaster_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.bake, params.devAddr, eth_wallet_1.Utils.toString(params.bakeStartBlock), eth_wallet_1.Utils.toString(params.startBlock), eth_wallet_1.Utils.toString(params.bonusEndBlock), eth_wallet_1.Utils.toString(params.bonusBeforeBulkBlockSize), eth_wallet_1.Utils.toString(params.bonusBeforeCommonDifference), eth_wallet_1.Utils.toString(params.bonusEndCommonDifference)]);
    }
    parseDepositEvent(receipt) {
        return this.parseEvents(receipt, "Deposit").map(e => this.decodeDepositEvent(e));
    }
    decodeDepositEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseEmergencyWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "EmergencyWithdraw").map(e => this.decodeEmergencyWithdrawEvent(e));
    }
    decodeEmergencyWithdrawEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    parseOwnershipTransferredEvent(receipt) {
        return this.parseEvents(receipt, "OwnershipTransferred").map(e => this.decodeOwnershipTransferredEvent(e));
    }
    decodeOwnershipTransferredEvent(event) {
        let result = event.data;
        return {
            previousOwner: result.previousOwner,
            newOwner: result.newOwner,
            _event: event
        };
    }
    parseWithdrawEvent(receipt) {
        return this.parseEvents(receipt, "Withdraw").map(e => this.decodeWithdrawEvent(e));
    }
    decodeWithdrawEvent(event) {
        let result = event.data;
        return {
            user: result.user,
            poolAddress: result.poolAddress,
            amount: new eth_wallet_1.BigNumber(result.amount),
            _event: event
        };
    }
    assign() {
        let accBakePerShareMultiple_call = async () => {
            let result = await this.call('accBakePerShareMultiple');
            return new eth_wallet_1.BigNumber(result);
        };
        this.accBakePerShareMultiple = accBakePerShareMultiple_call;
        let bake_call = async () => {
            let result = await this.call('bake');
            return result;
        };
        this.bake = bake_call;
        let bakeBonusEndBlock_call = async () => {
            let result = await this.call('bakeBonusEndBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bakeBonusEndBlock = bakeBonusEndBlock_call;
        let bakeStartBlock_call = async () => {
            let result = await this.call('bakeStartBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bakeStartBlock = bakeStartBlock_call;
        let bonusBeforeBulkBlockSize_call = async () => {
            let result = await this.call('bonusBeforeBulkBlockSize');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bonusBeforeBulkBlockSize = bonusBeforeBulkBlockSize_call;
        let bonusBeforeCommonDifference_call = async () => {
            let result = await this.call('bonusBeforeCommonDifference');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bonusBeforeCommonDifference = bonusBeforeCommonDifference_call;
        let bonusEndBlock_call = async () => {
            let result = await this.call('bonusEndBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bonusEndBlock = bonusEndBlock_call;
        let bonusEndBulkBlockSize_call = async () => {
            let result = await this.call('bonusEndBulkBlockSize');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bonusEndBulkBlockSize = bonusEndBulkBlockSize_call;
        let bonusEndCommonDifference_call = async () => {
            let result = await this.call('bonusEndCommonDifference');
            return new eth_wallet_1.BigNumber(result);
        };
        this.bonusEndCommonDifference = bonusEndCommonDifference_call;
        let devAddr_call = async () => {
            let result = await this.call('devAddr');
            return result;
        };
        this.devAddr = devAddr_call;
        let existsPool_call = async (pair) => {
            let result = await this.call('existsPool', [pair]);
            return result;
        };
        this.existsPool = existsPool_call;
        let getTotalRewardInfoParams = (params) => [eth_wallet_1.Utils.toString(params.from), eth_wallet_1.Utils.toString(params.to)];
        let getTotalRewardInfo_call = async (params) => {
            let result = await this.call('getTotalRewardInfo', getTotalRewardInfoParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getTotalRewardInfo = getTotalRewardInfo_call;
        let getTotalRewardInfoInSameCommonDifferenceParams = (params) => [eth_wallet_1.Utils.toString(params.from), eth_wallet_1.Utils.toString(params.to), eth_wallet_1.Utils.toString(params.bakeInitBlock), eth_wallet_1.Utils.toString(params.bulkBlockSize), eth_wallet_1.Utils.toString(params.commonDifference)];
        let getTotalRewardInfoInSameCommonDifference_call = async (params) => {
            let result = await this.call('getTotalRewardInfoInSameCommonDifference', getTotalRewardInfoInSameCommonDifferenceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getTotalRewardInfoInSameCommonDifference = getTotalRewardInfoInSameCommonDifference_call;
        let maxRewardBlockNumber_call = async () => {
            let result = await this.call('maxRewardBlockNumber');
            return new eth_wallet_1.BigNumber(result);
        };
        this.maxRewardBlockNumber = maxRewardBlockNumber_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let pendingBakeParams = (params) => [params.pair, params.user];
        let pendingBake_call = async (params) => {
            let result = await this.call('pendingBake', pendingBakeParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.pendingBake = pendingBake_call;
        let poolAddresses_call = async (param1) => {
            let result = await this.call('poolAddresses', [eth_wallet_1.Utils.toString(param1)]);
            return result;
        };
        this.poolAddresses = poolAddresses_call;
        let poolInfoMap_call = async (param1) => {
            let result = await this.call('poolInfoMap', [param1]);
            return {
                allocPoint: new eth_wallet_1.BigNumber(result.allocPoint),
                lastRewardBlock: new eth_wallet_1.BigNumber(result.lastRewardBlock),
                accBakePerShare: new eth_wallet_1.BigNumber(result.accBakePerShare),
                exists: result.exists
            };
        };
        this.poolInfoMap = poolInfoMap_call;
        let poolLength_call = async () => {
            let result = await this.call('poolLength');
            return new eth_wallet_1.BigNumber(result);
        };
        this.poolLength = poolLength_call;
        let poolUserInfoMapParams = (params) => [params.param1, params.param2];
        let poolUserInfoMap_call = async (params) => {
            let result = await this.call('poolUserInfoMap', poolUserInfoMapParams(params));
            return {
                amount: new eth_wallet_1.BigNumber(result.amount),
                rewardDebt: new eth_wallet_1.BigNumber(result.rewardDebt)
            };
        };
        this.poolUserInfoMap = poolUserInfoMap_call;
        let startBlock_call = async () => {
            let result = await this.call('startBlock');
            return new eth_wallet_1.BigNumber(result);
        };
        this.startBlock = startBlock_call;
        let totalAllocPoint_call = async () => {
            let result = await this.call('totalAllocPoint');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalAllocPoint = totalAllocPoint_call;
        let addParams = (params) => [eth_wallet_1.Utils.toString(params.allocPoint), params.pair, params.withUpdate];
        let add_send = async (params) => {
            let result = await this.send('add', addParams(params));
            return result;
        };
        let add_call = async (params) => {
            let result = await this.call('add', addParams(params));
            return;
        };
        this.add = Object.assign(add_send, {
            call: add_call
        });
        let depositParams = (params) => [params.pair, eth_wallet_1.Utils.toString(params.amount)];
        let deposit_send = async (params) => {
            let result = await this.send('deposit', depositParams(params));
            return result;
        };
        let deposit_call = async (params) => {
            let result = await this.call('deposit', depositParams(params));
            return;
        };
        this.deposit = Object.assign(deposit_send, {
            call: deposit_call
        });
        let dev_send = async (devAddr) => {
            let result = await this.send('dev', [devAddr]);
            return result;
        };
        let dev_call = async (devAddr) => {
            let result = await this.call('dev', [devAddr]);
            return;
        };
        this.dev = Object.assign(dev_send, {
            call: dev_call
        });
        let emergencyWithdraw_send = async (pair) => {
            let result = await this.send('emergencyWithdraw', [pair]);
            return result;
        };
        let emergencyWithdraw_call = async (pair) => {
            let result = await this.call('emergencyWithdraw', [pair]);
            return;
        };
        this.emergencyWithdraw = Object.assign(emergencyWithdraw_send, {
            call: emergencyWithdraw_call
        });
        let massUpdatePools_send = async () => {
            let result = await this.send('massUpdatePools');
            return result;
        };
        let massUpdatePools_call = async () => {
            let result = await this.call('massUpdatePools');
            return;
        };
        this.massUpdatePools = Object.assign(massUpdatePools_send, {
            call: massUpdatePools_call
        });
        let renounceOwnership_send = async () => {
            let result = await this.send('renounceOwnership');
            return result;
        };
        let renounceOwnership_call = async () => {
            let result = await this.call('renounceOwnership');
            return;
        };
        this.renounceOwnership = Object.assign(renounceOwnership_send, {
            call: renounceOwnership_call
        });
        let setParams = (params) => [params.pair, eth_wallet_1.Utils.toString(params.allocPoint), params.withUpdate];
        let set_send = async (params) => {
            let result = await this.send('set', setParams(params));
            return result;
        };
        let set_call = async (params) => {
            let result = await this.call('set', setParams(params));
            return;
        };
        this.set = Object.assign(set_send, {
            call: set_call
        });
        let transferOwnership_send = async (newOwner) => {
            let result = await this.send('transferOwnership', [newOwner]);
            return result;
        };
        let transferOwnership_call = async (newOwner) => {
            let result = await this.call('transferOwnership', [newOwner]);
            return;
        };
        this.transferOwnership = Object.assign(transferOwnership_send, {
            call: transferOwnership_call
        });
        let updatePool_send = async (pair) => {
            let result = await this.send('updatePool', [pair]);
            return result;
        };
        let updatePool_call = async (pair) => {
            let result = await this.call('updatePool', [pair]);
            return;
        };
        this.updatePool = Object.assign(updatePool_send, {
            call: updatePool_call
        });
        let withdrawParams = (params) => [params.pair, eth_wallet_1.Utils.toString(params.amount)];
        let withdraw_send = async (params) => {
            let result = await this.send('withdraw', withdrawParams(params));
            return result;
        };
        let withdraw_call = async (params) => {
            let result = await this.call('withdraw', withdrawParams(params));
            return;
        };
        this.withdraw = Object.assign(withdraw_send, {
            call: withdraw_call
        });
    }
}
exports.BakeryMaster = BakeryMaster;
