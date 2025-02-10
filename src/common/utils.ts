
/**
 * 用于网络请求刷新时间
 */
export const RefreshConfig:Record<string,number> = {
  interval_30s:1000 * 30,
  interval_1m:1000 * 60 * 1,
  interval_5m:1000 * 60 * 5,
  interval_10m:1000 * 60 * 10,
}

/**
 * 网页滚动到某个位置
 * @param anchorName div 的 id
 */
export function scrollToAnchor(anchorName: string) {
  if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) { anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
  }
}

/**
 * 格式化 get 请求的参数，将 Object 转换为 String
 * @param params Object 对象
 * @returns string eg. a=1&b=2
 */
export function buildQueryString(params:Record<string,any>):string{
  return Object.entries(params).map(([key,value]:[string,any])=>{
    return `${key}=${Array.isArray(value) ? value.join(',') : value}`
  }).join('&')
}

/**正则表达式，vscode安装插件 any-rule 即可查看 */