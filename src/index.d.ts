declare module 'react-reveal/Fade'
declare module 'react-reveal/Flip'
declare module 'react-reveal/Zoom'
declare module 'react-reveal/Bounce'
declare module 'react-reveal/RubberBand'
declare module 'react-reveal/HeadShake'
declare module 'react-height'
declare interface Window {
  ethereum:any,
  eventEmitter:any
}
declare global {
  var ethereum:any;
  var eventEmitter:any;
  var okexchain:any;
  var bitkeep:any;
  var gatewallet:any;

  interface Number {  
    plus(n:number | string): number;  
    minus(n:number | string): number;  
    times(n:number | string): number;  
    div(n:number | string): number;  
    toFormatSeparator(decimalPlaces?:number): string;  
    toFixedDecimal(decimalPlaces:number):number
  }
}


export {};
