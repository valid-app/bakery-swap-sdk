"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakeryToken = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const BakeryToken_json_1 = __importDefault(require("./BakeryToken.json"));
class BakeryToken extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, BakeryToken_json_1.default.abi, BakeryToken_json_1.default.bytecode);
        this.assign();
    }
    deploy() {
        return this.__deploy();
    }
    parseApprovalEvent(receipt) {
        return this.parseEvents(receipt, "Approval").map(e => this.decodeApprovalEvent(e));
    }
    decodeApprovalEvent(event) {
        let result = event.data;
        return {
            owner: result.owner,
            spender: result.spender,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    parseDelegateChangedEvent(receipt) {
        return this.parseEvents(receipt, "DelegateChanged").map(e => this.decodeDelegateChangedEvent(e));
    }
    decodeDelegateChangedEvent(event) {
        let result = event.data;
        return {
            delegator: result.delegator,
            fromDelegate: result.fromDelegate,
            toDelegate: result.toDelegate,
            _event: event
        };
    }
    parseDelegateVotesChangedEvent(receipt) {
        return this.parseEvents(receipt, "DelegateVotesChanged").map(e => this.decodeDelegateVotesChangedEvent(e));
    }
    decodeDelegateVotesChangedEvent(event) {
        let result = event.data;
        return {
            delegate: result.delegate,
            previousBalance: new eth_wallet_1.BigNumber(result.previousBalance),
            newBalance: new eth_wallet_1.BigNumber(result.newBalance),
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
    parseTransferEvent(receipt) {
        return this.parseEvents(receipt, "Transfer").map(e => this.decodeTransferEvent(e));
    }
    decodeTransferEvent(event) {
        let result = event.data;
        return {
            from: result.from,
            to: result.to,
            value: new eth_wallet_1.BigNumber(result.value),
            _event: event
        };
    }
    assign() {
        let DELEGATION_TYPEHASH_call = async () => {
            let result = await this.call('DELEGATION_TYPEHASH');
            return result;
        };
        this.DELEGATION_TYPEHASH = DELEGATION_TYPEHASH_call;
        let DOMAIN_TYPEHASH_call = async () => {
            let result = await this.call('DOMAIN_TYPEHASH');
            return result;
        };
        this.DOMAIN_TYPEHASH = DOMAIN_TYPEHASH_call;
        let allowanceParams = (params) => [params.owner, params.spender];
        let allowance_call = async (params) => {
            let result = await this.call('allowance', allowanceParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.allowance = allowance_call;
        let balanceOf_call = async (account) => {
            let result = await this.call('balanceOf', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.balanceOf = balanceOf_call;
        let checkpointsParams = (params) => [params.param1, eth_wallet_1.Utils.toString(params.param2)];
        let checkpoints_call = async (params) => {
            let result = await this.call('checkpoints', checkpointsParams(params));
            return {
                fromBlock: new eth_wallet_1.BigNumber(result.fromBlock),
                votes: new eth_wallet_1.BigNumber(result.votes)
            };
        };
        this.checkpoints = checkpoints_call;
        let decimals_call = async () => {
            let result = await this.call('decimals');
            return new eth_wallet_1.BigNumber(result);
        };
        this.decimals = decimals_call;
        let delegates_call = async (delegator) => {
            let result = await this.call('delegates', [delegator]);
            return result;
        };
        this.delegates = delegates_call;
        let getCurrentVotes_call = async (account) => {
            let result = await this.call('getCurrentVotes', [account]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.getCurrentVotes = getCurrentVotes_call;
        let getOwner_call = async () => {
            let result = await this.call('getOwner');
            return result;
        };
        this.getOwner = getOwner_call;
        let getPriorVotesParams = (params) => [params.account, eth_wallet_1.Utils.toString(params.blockNumber)];
        let getPriorVotes_call = async (params) => {
            let result = await this.call('getPriorVotes', getPriorVotesParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getPriorVotes = getPriorVotes_call;
        let name_call = async () => {
            let result = await this.call('name');
            return result;
        };
        this.name = name_call;
        let nonces_call = async (param1) => {
            let result = await this.call('nonces', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.nonces = nonces_call;
        let numCheckpoints_call = async (param1) => {
            let result = await this.call('numCheckpoints', [param1]);
            return new eth_wallet_1.BigNumber(result);
        };
        this.numCheckpoints = numCheckpoints_call;
        let owner_call = async () => {
            let result = await this.call('owner');
            return result;
        };
        this.owner = owner_call;
        let symbol_call = async () => {
            let result = await this.call('symbol');
            return result;
        };
        this.symbol = symbol_call;
        let totalSupply_call = async () => {
            let result = await this.call('totalSupply');
            return new eth_wallet_1.BigNumber(result);
        };
        this.totalSupply = totalSupply_call;
        let approveParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.amount)];
        let approve_send = async (params) => {
            let result = await this.send('approve', approveParams(params));
            return result;
        };
        let approve_call = async (params) => {
            let result = await this.call('approve', approveParams(params));
            return result;
        };
        this.approve = Object.assign(approve_send, {
            call: approve_call
        });
        let decreaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.subtractedValue)];
        let decreaseAllowance_send = async (params) => {
            let result = await this.send('decreaseAllowance', decreaseAllowanceParams(params));
            return result;
        };
        let decreaseAllowance_call = async (params) => {
            let result = await this.call('decreaseAllowance', decreaseAllowanceParams(params));
            return result;
        };
        this.decreaseAllowance = Object.assign(decreaseAllowance_send, {
            call: decreaseAllowance_call
        });
        let delegate_send = async (delegatee) => {
            let result = await this.send('delegate', [delegatee]);
            return result;
        };
        let delegate_call = async (delegatee) => {
            let result = await this.call('delegate', [delegatee]);
            return;
        };
        this.delegate = Object.assign(delegate_send, {
            call: delegate_call
        });
        let delegateBySigParams = (params) => [params.delegatee, eth_wallet_1.Utils.toString(params.nonce), eth_wallet_1.Utils.toString(params.expiry), eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let delegateBySig_send = async (params) => {
            let result = await this.send('delegateBySig', delegateBySigParams(params));
            return result;
        };
        let delegateBySig_call = async (params) => {
            let result = await this.call('delegateBySig', delegateBySigParams(params));
            return;
        };
        this.delegateBySig = Object.assign(delegateBySig_send, {
            call: delegateBySig_call
        });
        let increaseAllowanceParams = (params) => [params.spender, eth_wallet_1.Utils.toString(params.addedValue)];
        let increaseAllowance_send = async (params) => {
            let result = await this.send('increaseAllowance', increaseAllowanceParams(params));
            return result;
        };
        let increaseAllowance_call = async (params) => {
            let result = await this.call('increaseAllowance', increaseAllowanceParams(params));
            return result;
        };
        this.increaseAllowance = Object.assign(increaseAllowance_send, {
            call: increaseAllowance_call
        });
        let mint_send = async (amount) => {
            let result = await this.send('mint', [eth_wallet_1.Utils.toString(amount)]);
            return result;
        };
        let mint_call = async (amount) => {
            let result = await this.call('mint', [eth_wallet_1.Utils.toString(amount)]);
            return result;
        };
        this.mint = Object.assign(mint_send, {
            call: mint_call
        });
        let mintToParams = (params) => [params.to, eth_wallet_1.Utils.toString(params.amount)];
        let mintTo_send = async (params) => {
            let result = await this.send('mintTo', mintToParams(params));
            return result;
        };
        let mintTo_call = async (params) => {
            let result = await this.call('mintTo', mintToParams(params));
            return;
        };
        this.mintTo = Object.assign(mintTo_send, {
            call: mintTo_call
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
        let transferParams = (params) => [params.recipient, eth_wallet_1.Utils.toString(params.amount)];
        let transfer_send = async (params) => {
            let result = await this.send('transfer', transferParams(params));
            return result;
        };
        let transfer_call = async (params) => {
            let result = await this.call('transfer', transferParams(params));
            return result;
        };
        this.transfer = Object.assign(transfer_send, {
            call: transfer_call
        });
        let transferFromParams = (params) => [params.sender, params.recipient, eth_wallet_1.Utils.toString(params.amount)];
        let transferFrom_send = async (params) => {
            let result = await this.send('transferFrom', transferFromParams(params));
            return result;
        };
        let transferFrom_call = async (params) => {
            let result = await this.call('transferFrom', transferFromParams(params));
            return result;
        };
        this.transferFrom = Object.assign(transferFrom_send, {
            call: transferFrom_call
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
    }
}
exports.BakeryToken = BakeryToken;
