"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BakerySwapRouter = void 0;
const eth_wallet_1 = require("@ijstech/eth-wallet");
const BakerySwapRouter_json_1 = __importDefault(require("./BakerySwapRouter.json"));
class BakerySwapRouter extends eth_wallet_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, BakerySwapRouter_json_1.default.abi, BakerySwapRouter_json_1.default.bytecode);
        this.assign();
    }
    deploy(params) {
        return this.__deploy([params.factory, params.WBNB]);
    }
    assign() {
        let WBNB_call = async () => {
            let result = await this.call('WBNB');
            return result;
        };
        this.WBNB = WBNB_call;
        let factory_call = async () => {
            let result = await this.call('factory');
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.reserveIn), eth_wallet_1.Utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params) => {
            let result = await this.call('getAmountIn', getAmountInParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.reserveIn), eth_wallet_1.Utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.path];
        let getAmountsIn_call = async (params) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), params.path];
        let getAmountsOut_call = async (params) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let quoteParams = (params) => [eth_wallet_1.Utils.toString(params.amountA), eth_wallet_1.Utils.toString(params.reserveA), eth_wallet_1.Utils.toString(params.reserveB)];
        let quote_call = async (params) => {
            let result = await this.call('quote', quoteParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.quote = quote_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.amountADesired), eth_wallet_1.Utils.toString(params.amountBDesired), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let addLiquidity_send = async (params) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params));
            return result;
        };
        let addLiquidity_call = async (params) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB),
                liquidity: new eth_wallet_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityBNBParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.amountTokenDesired), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountBNBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let addLiquidityBNB_send = async (params, _value) => {
            let result = await this.send('addLiquidityBNB', addLiquidityBNBParams(params), { value: _value });
            return result;
        };
        let addLiquidityBNB_call = async (params, _value) => {
            let result = await this.call('addLiquidityBNB', addLiquidityBNBParams(params), { value: _value });
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountBNB: new eth_wallet_1.BigNumber(result.amountBNB),
                liquidity: new eth_wallet_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidityBNB = Object.assign(addLiquidityBNB_send, {
            call: addLiquidityBNB_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidity_send = async (params) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params));
            return result;
        };
        let removeLiquidity_call = async (params) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let removeLiquidityBNBParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountBNBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidityBNB_send = async (params) => {
            let result = await this.send('removeLiquidityBNB', removeLiquidityBNBParams(params));
            return result;
        };
        let removeLiquidityBNB_call = async (params) => {
            let result = await this.call('removeLiquidityBNB', removeLiquidityBNBParams(params));
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountBNB: new eth_wallet_1.BigNumber(result.amountBNB)
            };
        };
        this.removeLiquidityBNB = Object.assign(removeLiquidityBNB_send, {
            call: removeLiquidityBNB_call
        });
        let removeLiquidityBNBSupportingFeeOnTransferTokensParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountBNBMin), params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let removeLiquidityBNBSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('removeLiquidityBNBSupportingFeeOnTransferTokens', removeLiquidityBNBSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let removeLiquidityBNBSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('removeLiquidityBNBSupportingFeeOnTransferTokens', removeLiquidityBNBSupportingFeeOnTransferTokensParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.removeLiquidityBNBSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityBNBSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityBNBWithPermitParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountBNBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityBNBWithPermit_send = async (params) => {
            let result = await this.send('removeLiquidityBNBWithPermit', removeLiquidityBNBWithPermitParams(params));
            return result;
        };
        let removeLiquidityBNBWithPermit_call = async (params) => {
            let result = await this.call('removeLiquidityBNBWithPermit', removeLiquidityBNBWithPermitParams(params));
            return {
                amountToken: new eth_wallet_1.BigNumber(result.amountToken),
                amountBNB: new eth_wallet_1.BigNumber(result.amountBNB)
            };
        };
        this.removeLiquidityBNBWithPermit = Object.assign(removeLiquidityBNBWithPermit_send, {
            call: removeLiquidityBNBWithPermit_call
        });
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountTokenMin), eth_wallet_1.Utils.toString(params.amountBNBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens', removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens', removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params));
            return new eth_wallet_1.BigNumber(result);
        };
        this.removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, eth_wallet_1.Utils.toString(params.liquidity), eth_wallet_1.Utils.toString(params.amountAMin), eth_wallet_1.Utils.toString(params.amountBMin), params.to, eth_wallet_1.Utils.toString(params.deadline), params.approveMax, eth_wallet_1.Utils.toString(params.v), eth_wallet_1.Utils.stringToBytes32(params.r), eth_wallet_1.Utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params) => {
            let result = await this.send('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params));
            return result;
        };
        let removeLiquidityWithPermit_call = async (params) => {
            let result = await this.call('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params));
            return {
                amountA: new eth_wallet_1.BigNumber(result.amountA),
                amountB: new eth_wallet_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call: removeLiquidityWithPermit_call
        });
        let swapBNBForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapBNBForExactTokens_send = async (params, _value) => {
            let result = await this.send('swapBNBForExactTokens', swapBNBForExactTokensParams(params), { value: _value });
            return result;
        };
        let swapBNBForExactTokens_call = async (params, _value) => {
            let result = await this.call('swapBNBForExactTokens', swapBNBForExactTokensParams(params), { value: _value });
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapBNBForExactTokens = Object.assign(swapBNBForExactTokens_send, {
            call: swapBNBForExactTokens_call
        });
        let swapExactBNBForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactBNBForTokens_send = async (params, _value) => {
            let result = await this.send('swapExactBNBForTokens', swapExactBNBForTokensParams(params), { value: _value });
            return result;
        };
        let swapExactBNBForTokens_call = async (params, _value) => {
            let result = await this.call('swapExactBNBForTokens', swapExactBNBForTokensParams(params), { value: _value });
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactBNBForTokens = Object.assign(swapExactBNBForTokens_send, {
            call: swapExactBNBForTokens_call
        });
        let swapExactBNBForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_send = async (params, _value) => {
            let result = await this.send('swapExactBNBForTokensSupportingFeeOnTransferTokens', swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return result;
        };
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_call = async (params, _value) => {
            let result = await this.call('swapExactBNBForTokensSupportingFeeOnTransferTokens', swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), { value: _value });
            return;
        };
        this.swapExactBNBForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactBNBForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactBNBForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForBNBParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForBNB_send = async (params) => {
            let result = await this.send('swapExactTokensForBNB', swapExactTokensForBNBParams(params));
            return result;
        };
        let swapExactTokensForBNB_call = async (params) => {
            let result = await this.call('swapExactTokensForBNB', swapExactTokensForBNBParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactTokensForBNB = Object.assign(swapExactTokensForBNB_send, {
            call: swapExactTokensForBNB_call
        });
        let swapExactTokensForBNBSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForBNBSupportingFeeOnTransferTokens', swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForBNBSupportingFeeOnTransferTokens', swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params));
            return;
        };
        this.swapExactTokensForBNBSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForBNBSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForBNBSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result;
        };
        let swapExactTokensForTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountIn), eth_wallet_1.Utils.toString(params.amountOutMin), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactBNBParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapTokensForExactBNB_send = async (params) => {
            let result = await this.send('swapTokensForExactBNB', swapTokensForExactBNBParams(params));
            return result;
        };
        let swapTokensForExactBNB_call = async (params) => {
            let result = await this.call('swapTokensForExactBNB', swapTokensForExactBNBParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapTokensForExactBNB = Object.assign(swapTokensForExactBNB_send, {
            call: swapTokensForExactBNB_call
        });
        let swapTokensForExactTokensParams = (params) => [eth_wallet_1.Utils.toString(params.amountOut), eth_wallet_1.Utils.toString(params.amountInMax), params.path, params.to, eth_wallet_1.Utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result;
        };
        let swapTokensForExactTokens_call = async (params) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params));
            return result.map(e => new eth_wallet_1.BigNumber(e));
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.BakerySwapRouter = BakerySwapRouter;
