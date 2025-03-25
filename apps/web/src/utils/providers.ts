import { StaticJsonRpcProvider } from '@ethersproject/providers'

export const BSC_PROD_NODE = process.env.NEXT_PUBLIC_NODE_PRODUCTION || 'https://testnet-rpc.monad.xyz'

export const CMP_PROD_NODE = 'https://testnet-rpc.monad.xyz'

export const bscRpcProvider = new StaticJsonRpcProvider(BSC_PROD_NODE)

export const cmpRpcProvider = new StaticJsonRpcProvider(CMP_PROD_NODE)

export default null
