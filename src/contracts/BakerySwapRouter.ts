import {IWallet, Contract, Transaction, TransactionReceipt, Utils, BigNumber, Event, IBatchRequestObj} from "@ijstech/eth-wallet";
import Bin from "./BakerySwapRouter.json";

export interface IDeployParams {factory:string;WBNB:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IAddLiquidityBNBParams {token:string;amountTokenDesired:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountOutParams {amountIn:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityBNBParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityBNBWithPermitParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountBNBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityWithPermitParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface ISwapBNBForExactTokensParams {amountOut:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactBNBForTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForBNBParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactBNBParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export class BakerySwapRouter extends Contract{
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams): Promise<string>{
        return this.__deploy([params.factory,params.WBNB]);
    }
    WBNB: {
        (): Promise<string>;
    }
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
    }
    addLiquidityBNB: {
        (params: IAddLiquidityBNBParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityBNBParams,_value:number|BigNumber) => Promise<{amountToken:BigNumber,amountBNB:BigNumber,liquidity:BigNumber}>;
    }
    factory: {
        (): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    }
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    removeLiquidityBNB: {
        (params: IRemoveLiquidityBNBParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBParams) => Promise<{amountToken:BigNumber,amountBNB:BigNumber}>;
    }
    removeLiquidityBNBSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityBNBWithPermit: {
        (params: IRemoveLiquidityBNBWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBWithPermitParams) => Promise<{amountToken:BigNumber,amountBNB:BigNumber}>;
    }
    removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    }
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
    }
    swapBNBForExactTokens: {
        (params: ISwapBNBForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapBNBForExactTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactBNBForTokens: {
        (params: ISwapExactBNBForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactBNBForTokensParams,_value:number|BigNumber) => Promise<BigNumber[]>;
    }
    swapExactBNBForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber) => Promise<void>;
    }
    swapExactTokensForBNB: {
        (params: ISwapExactTokensForBNBParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForBNBParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForBNBSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    }
    swapTokensForExactBNB: {
        (params: ISwapTokensForExactBNBParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactBNBParams) => Promise<BigNumber[]>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    }
    private assign(){
        let WBNB_call = async (): Promise<string> => {
            let result = await this.call('WBNB');
            return result;
        }
        this.WBNB = WBNB_call
        let factory_call = async (): Promise<string> => {
            let result = await this.call('factory');
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [Utils.toString(params.amountOut),Utils.toString(params.reserveIn),Utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params: IGetAmountInParams): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params));
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [Utils.toString(params.amountIn),Utils.toString(params.reserveIn),Utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params: IGetAmountOutParams): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params));
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [Utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [Utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let quoteParams = (params: IQuoteParams) => [Utils.toString(params.amountA),Utils.toString(params.reserveA),Utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params));
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.amountADesired),Utils.toString(params.amountBDesired),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params));
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
        });
        let addLiquidityBNBParams = (params: IAddLiquidityBNBParams) => [params.token,Utils.toString(params.amountTokenDesired),Utils.toString(params.amountTokenMin),Utils.toString(params.amountBNBMin),params.to,Utils.toString(params.deadline)];
        let addLiquidityBNB_send = async (params: IAddLiquidityBNBParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityBNB',addLiquidityBNBParams(params), {value:_value});
            return result;
        }
        let addLiquidityBNB_call = async (params: IAddLiquidityBNBParams,_value:number|BigNumber): Promise<{amountToken:BigNumber,amountBNB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidityBNB',addLiquidityBNBParams(params), {value:_value});
            return {
                amountToken: new BigNumber(result.amountToken),
                amountBNB: new BigNumber(result.amountBNB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        this.addLiquidityBNB = Object.assign(addLiquidityBNB_send, {
            call:addLiquidityBNB_call
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params));
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
        });
        let removeLiquidityBNBParams = (params: IRemoveLiquidityBNBParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountBNBMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidityBNB_send = async (params: IRemoveLiquidityBNBParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNB',removeLiquidityBNBParams(params));
            return result;
        }
        let removeLiquidityBNB_call = async (params: IRemoveLiquidityBNBParams): Promise<{amountToken:BigNumber,amountBNB:BigNumber}> => {
            let result = await this.call('removeLiquidityBNB',removeLiquidityBNBParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountBNB: new BigNumber(result.amountBNB)
            };
        }
        this.removeLiquidityBNB = Object.assign(removeLiquidityBNB_send, {
            call:removeLiquidityBNB_call
        });
        let removeLiquidityBNBSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountBNBMin),params.to,Utils.toString(params.deadline)];
        let removeLiquidityBNBSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNBSupportingFeeOnTransferTokens',removeLiquidityBNBSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityBNBSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityBNBSupportingFeeOnTransferTokens',removeLiquidityBNBSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityBNBSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityBNBSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityBNBWithPermitParams = (params: IRemoveLiquidityBNBWithPermitParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountBNBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityBNBWithPermit_send = async (params: IRemoveLiquidityBNBWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNBWithPermit',removeLiquidityBNBWithPermitParams(params));
            return result;
        }
        let removeLiquidityBNBWithPermit_call = async (params: IRemoveLiquidityBNBWithPermitParams): Promise<{amountToken:BigNumber,amountBNB:BigNumber}> => {
            let result = await this.call('removeLiquidityBNBWithPermit',removeLiquidityBNBWithPermitParams(params));
            return {
                amountToken: new BigNumber(result.amountToken),
                amountBNB: new BigNumber(result.amountBNB)
            };
        }
        this.removeLiquidityBNBWithPermit = Object.assign(removeLiquidityBNBWithPermit_send, {
            call:removeLiquidityBNBWithPermit_call
        });
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams) => [params.token,Utils.toString(params.liquidity),Utils.toString(params.amountTokenMin),Utils.toString(params.amountBNBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens',removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens',removeLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams(params));
            return new BigNumber(result);
        }
        this.removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params: IRemoveLiquidityWithPermitParams) => [params.tokenA,params.tokenB,Utils.toString(params.liquidity),Utils.toString(params.amountAMin),Utils.toString(params.amountBMin),params.to,Utils.toString(params.deadline),params.approveMax,Utils.toString(params.v),Utils.stringToBytes32(params.r),Utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return result;
        }
        let removeLiquidityWithPermit_call = async (params: IRemoveLiquidityWithPermitParams): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params));
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call:removeLiquidityWithPermit_call
        });
        let swapBNBForExactTokensParams = (params: ISwapBNBForExactTokensParams) => [Utils.toString(params.amountOut),params.path,params.to,Utils.toString(params.deadline)];
        let swapBNBForExactTokens_send = async (params: ISwapBNBForExactTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapBNBForExactTokens',swapBNBForExactTokensParams(params), {value:_value});
            return result;
        }
        let swapBNBForExactTokens_call = async (params: ISwapBNBForExactTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapBNBForExactTokens',swapBNBForExactTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapBNBForExactTokens = Object.assign(swapBNBForExactTokens_send, {
            call:swapBNBForExactTokens_call
        });
        let swapExactBNBForTokensParams = (params: ISwapExactBNBForTokensParams) => [Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactBNBForTokens_send = async (params: ISwapExactBNBForTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactBNBForTokens',swapExactBNBForTokensParams(params), {value:_value});
            return result;
        }
        let swapExactBNBForTokens_call = async (params: ISwapExactBNBForTokensParams,_value:number|BigNumber): Promise<BigNumber[]> => {
            let result = await this.call('swapExactBNBForTokens',swapExactBNBForTokensParams(params), {value:_value});
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactBNBForTokens = Object.assign(swapExactBNBForTokens_send, {
            call:swapExactBNBForTokens_call
        });
        let swapExactBNBForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactBNBForTokensSupportingFeeOnTransferTokens',swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return result;
        }
        let swapExactBNBForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams,_value:number|BigNumber): Promise<void> => {
            let result = await this.call('swapExactBNBForTokensSupportingFeeOnTransferTokens',swapExactBNBForTokensSupportingFeeOnTransferTokensParams(params), {value:_value});
            return;
        }
        this.swapExactBNBForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactBNBForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactBNBForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForBNBParams = (params: ISwapExactTokensForBNBParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForBNB_send = async (params: ISwapExactTokensForBNBParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForBNB',swapExactTokensForBNBParams(params));
            return result;
        }
        let swapExactTokensForBNB_call = async (params: ISwapExactTokensForBNBParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForBNB',swapExactTokensForBNBParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForBNB = Object.assign(swapExactTokensForBNB_send, {
            call:swapExactTokensForBNB_call
        });
        let swapExactTokensForBNBSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForBNBSupportingFeeOnTransferTokens',swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForBNBSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForBNBSupportingFeeOnTransferTokens',swapExactTokensForBNBSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForBNBSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForBNBSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForBNBSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [Utils.toString(params.amountIn),Utils.toString(params.amountOutMin),params.path,params.to,Utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return result;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<void> => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params));
            return;
        }
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactBNBParams = (params: ISwapTokensForExactBNBParams) => [Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)];
        let swapTokensForExactBNB_send = async (params: ISwapTokensForExactBNBParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactBNB',swapTokensForExactBNBParams(params));
            return result;
        }
        let swapTokensForExactBNB_call = async (params: ISwapTokensForExactBNBParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactBNB',swapTokensForExactBNBParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactBNB = Object.assign(swapTokensForExactBNB_send, {
            call:swapTokensForExactBNB_call
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [Utils.toString(params.amountOut),Utils.toString(params.amountInMax),params.path,params.to,Utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params));
            return result.map(e=>new BigNumber(e));
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
        });
    }
}