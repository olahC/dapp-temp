import { RefreshConfig } from "@/common/utils";
import { CONTRACT_CONFIG, CUSTOMCOIN_Contract_Config, DOVART_Contract_Config, USDT_Contract_Config } from "@/walletContract/addresses";
import { publicClient } from "@/walletContract/viemClients";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { erc20Abi, formatUnits } from "viem";
import { useAccount, useChainId, useReadContract, useWriteContract } from "wagmi";


function useTokenAllowance(tokenAddress:CONTRACT_CONFIG, spenderAddress:CONTRACT_CONFIG){
  const {address} = useAccount()
  if (!address) return {data:0n,refetch:()=>{}} 
  return useReadContract({
    address: tokenAddress.address,
    abi: erc20Abi,
    functionName: 'allowance',
    args:[address, spenderAddress.address]
  })
}

/** 授权 */
export function useApprove({
  tokenAddress,
  spenderAddress,
  cost,
  onApproveSuccess,
  onApproveError,
  onFinish
}:{
  tokenAddress:CONTRACT_CONFIG,
  spenderAddress:CONTRACT_CONFIG,
  cost:number | string,
  onApproveSuccess?:()=>void,
  onApproveError?:()=>void,
  onFinish?:()=>void
}){
  const [isApprove, setIsApprove] = useState(false);

  const {data:allowanceData,refetch:refetchAllowance} = useTokenAllowance(tokenAddress,spenderAddress)

  const {writeContract, isPending, isSuccess, isError, data:hash} = useWriteContract()

  console.log('allowanceData==',allowanceData);
  console.log('cost==',cost);

  console.log('isApprove==',isApprove);

  console.log('writeContract isPending==',isPending);
  console.log('writeContract isSuccess==',isSuccess);
  console.log('writeContract isError==',isError);
  console.log('writeContract data==',hash);


  useEffect(()=>{
    if (!allowanceData){
      setIsApprove(false)
    }else {
      const allowance = Number(formatUnits(allowanceData,18))
      if (allowance < Number(cost)){
        setIsApprove(false)
      }else {
        setIsApprove(true)
      }
    }
  },[allowanceData,cost])

  function approve(){
    writeContract({ 
      abi:erc20Abi,
      address: tokenAddress.address,
      functionName: 'approve',
      args: [spenderAddress.address, BigInt(cost)],
    },{
      onSuccess:()=>{
        onApproveSuccess && onApproveSuccess()
        refetchAllowance()
      },
      onError:onApproveError,
      onSettled:onFinish // 类似finish，不管成功或错误都执行
    })
  }

  return {isApprove, approve}
}

/**获取钱包币的余额 */
export function useWalletCoinBalances(){
  const {address} = useAccount()
  const chainID = useChainId()
  async function queryFn(){
    if (!address){
      return
    }
    try {
      // const result = await publicClient.multicall({
      //   contracts:[
      //     { ...USDT_Contract_Config(), functionName:'balanceOf', args:[address] },
      //     { ...CUSTOMCOIN_Contract_Config(), functionName:'balanceOf', args:[address] }
      //   ]
      // })
      
      const balance = await publicClient.getBalance({address})
      console.log('balance=',balance);
      
      return {
        nativeCurrency:formatUnits(balance,18)
      }
    } catch {
      throw new Error("useWalletCoinBalances: Network response was not ok");
    }
  }

  return useQuery({
    queryKey: ['useWalletCoinBalances', address,chainID],
    queryFn: queryFn,
    enabled: !!address && !!chainID,
    refetchInterval: RefreshConfig.interval_5m,
  });
}


export function useReadContractData(){
  const {address} = useAccount()

  async function queryFn(){
    if (!address){
      return
    }
    try {
     
      const result = await publicClient.multicall({
        contracts:[
          {
            ...DOVART_Contract_Config(),
            functionName:'',
            args:[]
          }
        ]
      })


    } catch {
      throw new Error("useReadContractData: Network response was not ok");
    }
  }

  return useQuery({
    queryKey: ['useReadContractData', address],
    queryFn: queryFn,
    enabled: !!address,
    // refetchInterval: RefreshConfig.refetchInterval,
  });
}
