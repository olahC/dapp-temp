import { useEffect, useState } from "react"
import * as echarts from 'echarts';
import { typeLineOption, typePieOption } from "./options";

export default function Echarts(){

  const [echartsInstance, setEchartsInstance] = useState<echarts.ECharts>() //用来勾住生成后的 图表实例对象
  const [pieEchartsInstance, setPieEchartsInstance] = useState<echarts.ECharts>() //用来勾住生成后的 图表实例对象

  useEffect(()=>{
    echartsInstance && echartsInstance.setOption(typeLineOption);
  },[echartsInstance])

  useEffect(()=>{
    pieEchartsInstance && pieEchartsInstance.setOption(typePieOption);
  },[pieEchartsInstance])


  useEffect(()=>{
    var myChart = echarts.init(document.getElementById('echarts'));
    var pieChart = echarts.init(document.getElementById('pieEcharts'));

    setEchartsInstance(myChart)
    setPieEchartsInstance(pieChart)

    window.addEventListener('resize', function() {
      echartsInstance && echartsInstance.resize();
    });
    return ()=>{
      window.removeEventListener('resize',()=>{})
    }

  },[])

  return <div>
    <div id="echarts" style={{width:'100%',height:500}}/>
    <div id="pieEcharts" style={{width:500,height:500}}/>

  </div>
}