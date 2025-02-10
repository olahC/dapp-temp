import { erc20Abi } from 'viem'
import ABI_DOVART from './ABI/DOVART.json'
import { useChainId } from 'wagmi'
import Chains from 'viem/chains'

export type CONTRACT_CONFIG = {
  address:`0x${string}`,
  abi:any
}

/**************************** TOKEN **************************************/

const USDT_Token_Addresses:Record<number,`0x${string}`> = {
  [Chains.bsc.id]:`0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC`,
  [Chains.bscTestnet.id]:`0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC`
}
export function USDT_Contract_Config():CONTRACT_CONFIG{
  const chainID = useChainId()
  return {
    address:USDT_Token_Addresses[chainID] || `0x0`,
    abi:erc20Abi
  }
}

const CUSTOM_COIN_Token_Addresses:Record<number,`0x${string}`> = {
  [Chains.bsc.id]:`0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC`,
  [Chains.bscTestnet.id]:`0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC`
}
export function CUSTOMCOIN_Contract_Config():CONTRACT_CONFIG{
  const chainID = useChainId()
  return {
    address:CUSTOM_COIN_Token_Addresses[chainID] || `0x0`,
    abi:erc20Abi
  }
}






/**************************** CONTRACT **************************************/

const DOVART_Contract_Addresses:Record<number,`0x${string}`> = {
  [Chains.bsc.id]:`0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC`,
  [Chains.bscTestnet.id]:`0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC`
}
export function DOVART_Contract_Config():CONTRACT_CONFIG{
  const chainID = useChainId()
  return {
    address:DOVART_Contract_Addresses[chainID] || `0x0`,
    abi:ABI_DOVART
  }
}