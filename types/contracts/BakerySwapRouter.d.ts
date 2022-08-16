import { IWallet, Contract, TransactionReceipt, BigNumber } from "@ijstech/eth-wallet";
export interface IDeployParams {
    factory: string;
    WBNB: string;
}
export interface IAddLiquidityParams {
    tokenA: string;
    tokenB: string;
    amountADesired: number | BigNumber;
    amountBDesired: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IAddLiquidityBNBParams {
    token: string;
    amountTokenDesired: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountBNBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IGetAmountInParams {
    amountOut: number | BigNumber;
    reserveIn: number | BigNumber;
    reserveOut: number | BigNumber;
}
export interface IGetAmountOutParams {
    amountIn: number | BigNumber;
    reserveIn: number | BigNumber;
    reserveOut: number | BigNumber;
}
export interface IGetAmountsInParams {
    amountOut: number | BigNumber;
    path: string[];
}
export interface IGetAmountsOutParams {
    amountIn: number | BigNumber;
    path: string[];
}
export interface IQuoteParams {
    amountA: number | BigNumber;
    reserveA: number | BigNumber;
    reserveB: number | BigNumber;
}
export interface IRemoveLiquidityParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityBNBParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountBNBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountBNBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
}
export interface IRemoveLiquidityBNBWithPermitParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountBNBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams {
    token: string;
    liquidity: number | BigNumber;
    amountTokenMin: number | BigNumber;
    amountBNBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface IRemoveLiquidityWithPermitParams {
    tokenA: string;
    tokenB: string;
    liquidity: number | BigNumber;
    amountAMin: number | BigNumber;
    amountBMin: number | BigNumber;
    to: string;
    deadline: number | BigNumber;
    approveMax: boolean;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapBNBForExactTokensParams {
    amountOut: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactBNBForTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams {
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForBNBParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
    amountIn: number | BigNumber;
    amountOutMin: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactBNBParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export interface ISwapTokensForExactTokensParams {
    amountOut: number | BigNumber;
    amountInMax: number | BigNumber;
    path: string[];
    to: string;
    deadline: number | BigNumber;
}
export declare class BakerySwapRouter extends Contract {
    constructor(wallet: IWallet, address?: string);
    deploy(params: IDeployParams): Promise<string>;
    WBNB: {
        (): Promise<string>;
    };
    addLiquidity: {
        (params: IAddLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    addLiquidityBNB: {
        (params: IAddLiquidityBNBParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityBNBParams, _value: number | BigNumber) => Promise<{
            amountToken: BigNumber;
            amountBNB: BigNumber;
            liquidity: BigNumber;
        }>;
    };
    factory: {
        (): Promise<string>;
    };
    getAmountIn: {
        (params: IGetAmountInParams): Promise<BigNumber>;
    };
    getAmountOut: {
        (params: IGetAmountOutParams): Promise<BigNumber>;
    };
    getAmountsIn: {
        (params: IGetAmountsInParams): Promise<BigNumber[]>;
    };
    getAmountsOut: {
        (params: IGetAmountsOutParams): Promise<BigNumber[]>;
    };
    quote: {
        (params: IQuoteParams): Promise<BigNumber>;
    };
    removeLiquidity: {
        (params: IRemoveLiquidityParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    removeLiquidityBNB: {
        (params: IRemoveLiquidityBNBParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBParams) => Promise<{
            amountToken: BigNumber;
            amountBNB: BigNumber;
        }>;
    };
    removeLiquidityBNBSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    };
    removeLiquidityBNBWithPermit: {
        (params: IRemoveLiquidityBNBWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBWithPermitParams) => Promise<{
            amountToken: BigNumber;
            amountBNB: BigNumber;
        }>;
    };
    removeLiquidityBNBWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityBNBWithPermitSupportingFeeOnTransferTokensParams) => Promise<BigNumber>;
    };
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    swapBNBForExactTokens: {
        (params: ISwapBNBForExactTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapBNBForExactTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactBNBForTokens: {
        (params: ISwapExactBNBForTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactBNBForTokensParams, _value: number | BigNumber) => Promise<BigNumber[]>;
    };
    swapExactBNBForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber): Promise<TransactionReceipt>;
        call: (params: ISwapExactBNBForTokensSupportingFeeOnTransferTokensParams, _value: number | BigNumber) => Promise<void>;
    };
    swapExactTokensForBNB: {
        (params: ISwapExactTokensForBNBParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForBNBParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForBNBSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForBNBSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => Promise<void>;
    };
    swapTokensForExactBNB: {
        (params: ISwapTokensForExactBNBParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactBNBParams) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams) => Promise<BigNumber[]>;
    };
    private assign;
}
