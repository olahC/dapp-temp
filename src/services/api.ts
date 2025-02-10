/** API 请求接口地址 */

export enum RequestMethod {
  'GET' = 'GET',
  'PUT' = 'PUT',
  'POST' = 'POST',
  'DELETE' = 'DELETE',
  'PATCH' = 'PATCH',
}

// 请求地址
export const AXIOS_BASE_URL = 'https://www.binance.com/'

// 请求超时
export const AXIOS_TIMEOUT = 10000

export const API_PRICE = '/api/v3/ticker/price'