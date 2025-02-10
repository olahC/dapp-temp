import { http, createConfig } from 'wagmi'
import { bsc, mainnet, sepolia } from 'wagmi/chains'
import { injected, metaMask, safe, walletConnect } from 'wagmi/connectors'

// Get projectId at https://cloud.walletconnect.com
const projectId = '7e91d29f3a29850f8e020e79a9c8eaac'

export const wagmiConfig = createConfig({
  chains: [mainnet, sepolia, bsc],
  cacheTime:10_000,
  batch:{
    multicall:true
  },
  connectors:[
    // injected(),
    walletConnect({ projectId }),
    // metaMask(),
    // safe(),
    // 启动其他钱包扩展的会在 useConnect 列出来
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [bsc.id]: http()
  },
})