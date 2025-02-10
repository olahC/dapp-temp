import { API_PRICE, RequestMethod } from "./api"
import { request } from "./request"

export class BinanceServices{
  /**
   * 获取价格
   * symbol 币名 eg. BTCUSDT
   */
  public static getPrice({
    symbol
  }:{
    symbol:string
  }) {
    return request({
      url:API_PRICE,
      method:RequestMethod.GET,
      query:{
        symbol
      }
    })
  }
}