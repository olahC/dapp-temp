import { borderColor, lineHeight } from '@mui/system';
import * as echarts from 'echarts';

let data = [
  "2024(32)",
  "2024(33)",
  "2024(34)",
  "2024(35)",
  "2024(36)",
  "2024(37)",
  "2024(38)",
  "2024(39)",
  "2024(40)",
  "2024(41)",
  "2024(42)",
  "2024(43)",
  "2024(44)",
  "2024(45)",
  "2024(46)",
  "2024(47)",
  "2024(48)",
  "2024(49)",
  "2024(50)",
  "2024(51)",
  "2024(52)",
  "2025(01)",
  "2025(02)",
  "2025(03)",
  "2025(04)",
  "2025(05)",
  "2025(06)",
  "2025(07)",
  "2025(08)",
  "2025(09)"
]

export const typeLineOption = {
  backgroundColor: '#fff',
  // tooltip: {
  //    trigger: 'axis'
  // },
  grid: {
     left: '3%',
     right: '5%',
     bottom: 0,
     top: 10,
     containLabel: true
  },
  legend: {
     show: false
  },
  xAxis: {
     type: 'category',
     data: data,
     axisLabel: {
        show: true,
        rotate: 360,//坐标轴字体颜色
        showMaxLabel: true, // 确保显示最后一个标签
        formatter: '{value} kg', // 自定义x轴显示值

        // interval: function (index:number, value:any) {
        //    let total = data.length
        //    let maxLabelSize = 10
        //    return (index + 1) % Math.ceil(total / maxLabelSize) == 0 ? 'auto' : false
        // }, // 强制设置坐标轴分割间隔
        hideOverlap: true,
        textStyle: {
           color: '#242424',
           fontSize: 12
        },
        customValues:["2024(35)","2024(43)","2024(51)","2025(09)"], // 只有这几个刻度线的标签
     },
     axisLine: {
        lineStyle: {
           color: 'red', // x 轴颜色
        }
     },
     axisTick: {       //刻度线
        show: true,
        customValues:["2024(35)","2024(43)","2024(51)","2025(09)"], // 只有这几个值显示刻度线
     },
     splitLine: {    //网格,竖着的线
        show: false
     },
     boundaryGap: false, // 坐标轴两边留白策略
  },
  yAxis: {
     type: 'value',
     axisLabel: {        //坐标轴字体颜色
        formatter: '{value} gg', // 自定义y轴显示值
        textStyle: {
           color: '#3E3E3E',
           fontSize: 12
        },
        customValues:["50","100"], // 只有这几个刻度线的标签
     },
    //  minInterval:80, // 自动计算的坐标轴最小间隔大小,间隔越大，y轴显示的刻度越少
     axisLine: {
        show: false, // 不显示y轴
        lineStyle: {
           color: 'pink', // y轴颜色
        }
     },
     axisTick: {       //y轴刻度线
        show: true
     },
     splitLine: {    //网格,横着的线
        show: true,
        lineStyle:{
          color:'red', // 线的颜色
        }
     }
  },
  // 提示框
  tooltip: {
    trigger: 'axis',           // 触发类型，默认数据触发，见下图，可选为：'item' ¦ 'axis'
    // showDelay: 20,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
    // hideDelay: 100,            // 隐藏延迟，单位ms
    // transitionDuration : 0.4,  // 动画变换时间，单位s
    backgroundColor: 'rgba(0,0,255,0.7)',     // 提示背景颜色，默认为透明度为0.7的黑色
    borderColor: 'red',       // 提示边框颜色
    borderRadius: 6,           // 提示边框圆角，单位px，默认为4
    borderWidth: 0,            // 提示边框线宽，单位px，默认为0（无边框）
    padding: 5,                // 提示内边距，单位px，默认各方向内边距为5，
                               // 接受数组分别设定上右下左边距，同css
    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
        type : 'line',         // 默认为直线，可选为：'line' | 'shadow'
        lineStyle : {          // 直线指示器样式设置
            color: 'yellow',
            width: 2,
            type: 'solid'
        },
        shadowStyle : {                       // 阴影指示器样式设置
            width: '5',                   // 阴影大小
            color: 'rgba(150,0,150,0.3)'  // 阴影颜色
        }
    },
    textStyle: {
        color: '#0ff'
    },
    formatter:function(params:any[]){
      console.log('params==',params);
      // "<span style='display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:yellow;'></span>"
      const icon = params[0].marker // 小圆点
      const xValue = params[0].axisValue
      const yValue = params[0].data
      const tip = "<div style='display:flex;flex-direction: column;'>"
        +"<div style='display:flex;flex-direction: row;align-items: center;'>"
        +icon
        +"<span style='display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:yellow;'></span>"
        +"<span>德玛西亚</span>"
        +"</div>"
        +"<span>X轴:"+xValue+"</span>"
        +"<span>Y轴:"+yValue+"</span>"
        +"</div>"
      return tip
    },
    extraCssText: "min-width: 150px;"
  },
  series: [{
     name: '价格指数',
     type: 'line',
     smooth: true, // 平滑曲线
     symbol: 'circle',// 曲线上的圆点 none  ||  circle
     symbolSize: 12, // 曲线上的圆点的大小
     itemStyle: {
        color: 'transparent', // 鼠标放上去显示出信息的圆点颜色 和 曲线上的圆点颜色，
        borderColor: '#f0f', // 曲线上显示对应值的圆点标记
        borderWidth: 0, // 曲线上显示对应值的圆点标记，是 0 就显示 color 的颜色
        // 正常x轴有刻度的圆点样式
        normal:{
          color:'transparent',//'rgb(0, 150, 55)',
          // opacity:0
        },
        // 鼠标经过时的圆点样式
        emphasis:{
          color:'yellow',
          borderColor:'transparent',
          // borderWidth:8,
          // opacity:1,
          shadowColor: '#215380',
          shadowOffsetY: 5   // 关键在这
        }
     },
     lineStyle: {
        normal: {
           color: 'transparent',//'#0ff', // 曲线颜色
        }
     },
     areaStyle: {
        normal: {
           color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'red'
           }, {
              offset: 1,
              color: 'transparent'
           }]), // 区域的颜色,从上到下，渐变
        }
     },
     data: [
        "103.16",
        "105.07",
        "103.79",
        "110.47",
        "111.88",
        "113.22",
        "111.10",
        "113.39",
        "110.71",
        "109.37",
        "107.41",
        "106.62",
        "105.12",
        "99.51",
        "99.62",
        "96.64",
        "94.26",
        "94.05",
        "87.10",
        "85.19",
        "83.93",
        "78.73",
        "79.05",
        "78.88",
        "85.03",
        "86.71",
        "85.59",
        "75.20",
        "80.61",
        "87.04"
     ]
  }],
  // dataZoom: [
  //    {
  //       type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
  //       // startValue: data.length - 18,
  //       // endValue: data.length,
  //       start: (data.length - 19) / data.length * 100,
  //       // end: 100
  //    } // x轴滚动配置
  // ]
}


var colorList = ['#FDC40A', '#FF5232', '#50F0A6', '#5FDFFA'];
var title = ['企业','农业','工业','纺织'];
var dataValue = ['15','30','35','20'];
let imgSrc = "http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960";
var dataList = title.map((item, index) => {
   return {
      name: item,
      value: dataValue[index],
   };
});
var center = ['50%', '50%'];
export const typePieOption = {
  color: colorList,
  legend: {
    show:false, // 是否显示列表标题
    top: "10%",
    left: "5%",
    orient: "horizontal",
    data: dataList,
    itemWidth: 16,
    itemHeight: 16,
    itemGap: 60
  },
  graphic: {
    elements: [
      {
        type:'text', // 中间显示文字
        style:{
          text:'ABC',
          fill:'red',
          font:'20px Microsoft YaHei',
          overflow: 'break',
          width:200
        },
        z: 10,
        left: 'center', //  居中显示
        top: 'middle', //  居中显示
      },
      {
        type: "image", // 中间显示图片
        z: 5,
        style: {
          image: imgSrc,
          width: 100,
          height: 100,
          // shadowBlur: 0,
          // shadowColor: "#000",
          // shadowOffsetX: "1",
          // shadowOffsetY: "1",
        },
        // left: "45%",
        // top: "45%",
        left: 'center',
        top: 'middle',
      },
    ],
  },
   series: [
      // 展示层
      {
         type: 'pie',
         center: center,
         radius: ['40%', '55%'],
         itemStyle: {
            borderWidth: 5, //描边线宽
            borderColor: '#ff0',
         },
         label: {
            show: true,
            position: 'outside',
            alignTo: 'labelLine', // none labelLine edge
            backgroundColor: '#f0f',// 圆点的背景色
            height: 50, // 圆点的高度 设置为 0
            width: 20, // 圆点的宽度 设置为 0
            lineHeight: 10, // 设置为 0
            distanceToLabelLine: 30, // 圆点距离指示线的距离 设置为 0
            borderRadius: 3, // 圆点样式 设置为 0
            borderWidth: 1, // 圆点样式 设置为 0
            borderColor: 'auto', // 圆点边框色，auto 设定为映射的颜色
            emphasis:{// 鼠标放上去 指示线的圆点样式
              borderRadius: 6,
              borderWidth: 5,
              borderColor: 'auto',
            },
            padding: [3, -3, 3, -3],
            formatter: function (params:any) {
              console.log('pie===',params);
               return `{b|${params.value}%}\n{a|${params.name}}`
            },
            rich: {
               a: {
                  padding: [20, -40, 40, -40],
                  fontSize: '10px',// 标签第二行字号
                  fontFamily: 'MicrosoftYaHei',
                  color: 'inherit',// inherit 为映射的值
               },
               b: {
                  padding: [0, -40, 55, -40],
                  fontSize: '16px',// 标签第一行字号
                  fontFamily: 'MicrosoftYaHei-Bold, MicrosoftYaHei',
                  fontWeight: 'bold',
                  color: '#001F3D', // 可以自定义颜色
               },
            }
         },
         labelLine: {
            show: true,
            smooth:true,
            normal: { // 指示线的样式
               length: 20, // 第一段指示线的长度
               length2: 40, // 第二段指示线的长度
              //  align: 'center',
               lineStyle: {
                  width: 1
               }
            },
            emphasis:{ // 鼠标放上去 指示线的样式
              lineStyle: {
                width: 5
             }
            }
         },
         data: dataList,
      },
   ],
}