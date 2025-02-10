import styles from './index.less'
import { MdError } from "react-icons/md";

export default function ErrorBoundaryComponent(){
  return <div className='columnCenter'>
    <MdError color='red' size={'30%'}/>
    <div className={styles.errorMsg}>程序出现问题了，刷新一下吧~</div>
  </div>
}