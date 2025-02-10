/**针对对象进行扩展属性或方法 */

import BigNumber from "bignumber.js";

/**加 */
Number.prototype.plus = function (n: number | string): number {
  return BigNumber(Number(this)).plus(n).toNumber()
};

/**减 */
Number.prototype.minus = function (n: number | string): number {
  return BigNumber(Number(this)).minus(n).toNumber()
};

/**乘 */
Number.prototype.times = function (n: number | string): number {
  return BigNumber(Number(this)).times(n).toNumber()
};

/**除 */
Number.prototype.div = function (n: number | string): number {
  return BigNumber(Number(this)).div(n).toNumber()
};

/**
 * 整数部分每3位添加一个 ',' 号
 * decimalPlaces 保留小数个数,四舍五入
 */
Number.prototype.toFormatSeparator = function (decimalPlaces?:number): string {
  return BigNumber(Number(this)).toFormat(decimalPlaces)
};

/**
 * 保留小数个数
 * decimalPlaces 小数个数，直接截取，不够补0
 */
Number.prototype.toFixedDecimal = function (decimalPlaces:number): number {
  return Number(BigNumber(Number(this)).toFixed(decimalPlaces,1).toString())
};


