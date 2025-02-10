import { RefreshConfig } from "@/common/utils";
import { useQuery } from "@tanstack/react-query";

export function useTickerPrice(symbol:string){

  async function queryFn(){
    try {
      const result = await (await fetch('https://www.binance.com/dapi/v1/ticker/price?symbol=BTCUSD_PERP')).json()
      console.log('result==',result[0]);
      
      return result[0]
    } catch {
      throw new Error("useTickerPrice: Network response was not ok");
    }
  }

  return useQuery({
    queryKey: ['useTickerPrice', symbol],
    queryFn: queryFn,
    enabled: !!symbol,
    // refetchInterval: RefreshConfig.refetchInterval,
  });
}