import classNames from 'classnames';
import styles from './index.less'

import { AiOutlineLoading } from "react-icons/ai";


export default function LoadingButton({
  children,
  type = 'default',
  loading = false,
  onClick,
}:{
  children:any,
  type?:'primary' | 'default' | 'error' | 'warning',
  loading?:boolean,
  onClick?:()=>void,
}){
  function onButtonClick(){
    if (loading)return
    onClick && onClick()
  }
  return <div className={classNames(
      'rowCenter',
      styles.loadingButton,
      type === 'primary' && styles.loadingButtonPrimary,
      type === 'error' && styles.loadingButtonError,
      type === 'warning' && styles.loadingButtonWarning,
      loading && styles.loadingButtonDisable,
    )} onClick={onButtonClick}>
    {loading && <AiOutlineLoading color={type === 'default' ? '#000000' : '#ffffff'} className={styles.loadingIcon}/>}
    {children}
  </div>
}