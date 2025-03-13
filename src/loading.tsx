import classNames from "classnames";
import styles from './loading.less'
import { useEffect, useState } from "react";
import {Watch} from 'react-loader-spinner'

/**网址打开时显示 loading page */
export default function Loading(){
  return <></>

  const [windowSize,setWindowSize] = useState({
    width:window.innerWidth,
    height:window.innerHeight
  })
  useEffect(()=>{
    window.addEventListener('resize',()=>{      
      setWindowSize({
        width:window.innerWidth,
        height:window.innerHeight
      })
    })
  },[])

  return <div className={styles.loadingView} style={{
    height:windowSize.height,
    width:windowSize.width
  }}>
    <Watch
      visible={true}
      width={Number(windowSize.width) / 2 + 'px'} 
      height={Number(windowSize.width) / 2 + 'px'}
      color="#f5f5f5"
      />
  </div>
}