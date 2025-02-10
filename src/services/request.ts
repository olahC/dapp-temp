import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { AXIOS_BASE_URL, AXIOS_TIMEOUT, RequestMethod } from './api';

const axiosInstance = axios.create({
  baseURL: AXIOS_BASE_URL,
  timeout: AXIOS_TIMEOUT,
});

type TDataRequest = {
  method:RequestMethod,
  url:string,
  headers?:Record<string,string>,
  query?:Record<string,any>, // 是与请求一起发送的 URL 参数
  data?:Record<string,any>, // 作为请求体被发送的数据 仅适用 'PUT', 'POST', 'DELETE 和 'PATCH' 请求方法
}
export function request(params:TDataRequest){
  const config:AxiosRequestConfig = {
    method: params.method,
    url: params.url,
  }
  if (params.headers) config.headers = params.headers
  if (params.data) config.data = params.data
  if (params.query) config.params = params.query

  return new Promise(async (resolve, reject)=>{
    try {
      const result:AxiosResponse = await axiosInstance.request(config)
      catchErrorCodes(result)
      resolve(result.data)
    } catch (error:any) {
      const err = new AxiosError(error.message || error.name, error.code)
      reject(err)
    }
  })
}

function catchErrorCodes(result:AxiosResponse){
  if (result.status !== 200){
    throw new AxiosError(result.statusText,String(result.status))
  }

  // 判断result.data 中的 code （具体值与服务器商议）
}