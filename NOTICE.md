



# 从合约读取数据
```
目录：Contract/index.ts

import { publicClient } from '@/provider/Web3ModalProvider';
export function useTest(){
  const {address} = useAccount()
  const chainId = useChainId()

  async function fetchData(){
    if (!address || !chainId){
      return
    }

    const getPledgeDetail = await publicClient.readContract({
      address:ZNBPleiadePlan_CONTRACT.addresses[chainId],
      abi:ZNBPleiadePlan_CONTRACT.abi,
      functionName:'getPledgeDetail',
      args:[address,'FTC']
    })

    console.log('getPledgeDetail==',getPledgeDetail)


    return {
      getPledgeDetail
    }
  }
  return useQuery({
    queryKey:["useTest"],
    queryFn:fetchData,
    enabled:!!chainId && !!address,
    refetchInterval:RefreshConfig.shortRefreshInterval
  })
}

