import { createPublicClient, http, createWalletClient, custom } from 'viem'
import { bsc, mainnet } from 'viem/chains'

/**公共客户端是“公共” JSON-RPC API方法的接口，例如通过公共操作检索区块编号、交易、从智能合约中读取等。 */

// https://viem.sh/docs/actions/public/introduction
export const publicClient = createPublicClient({ 
  name:'BSC_Public_Client',
  chain: bsc,
  cacheTime:10_000,
  batch:{
    multicall:true
  },
  transport: http()
})


/**钱包客户端是与以太坊账户交互的接口，并提供通过钱包操作检索账户、执行交易、签署消息等功能。 */

// https://viem.sh/docs/actions/wallet/introduction
export const walletClient = createWalletClient({
  chain: bsc,
  name:'BSC_Wallet_Client',
  cacheTime:10_000,
  transport: window.ethereum ? custom(window.ethereum!) : http()
})