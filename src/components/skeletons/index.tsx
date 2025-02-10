import styles from './index.less'

/**
 * className      组件样式
 * count          针对多行文字，文字行数
 * textClassName  针对多行文字，行样式
 * defaultImage   针对图片，默认图片
 */
type SkeletonsProps = {
  className?:any,
  count?:number,
  textClassName?:any,
  defaultImage?:any
}
function Skeletons(props:SkeletonsProps){
  return <div className={props.className || styles.defaultClassName}>
    <div className={styles.skeletons}/>
  </div>
}
function SkeletonsImage(props:SkeletonsProps){
  return <div className={props.className}>
    <div className={styles.skeletons}>
      <img className={styles.skeletonsImage} src={props.defaultImage}/>
    </div>
  </div>
}
function SkeletonsText(props:SkeletonsProps){
  function items(){
    const count = props.count || 1
    let item:any[] = []
    for (let index = 0; index < count; index++) {
      item.push(<div className={`${styles.skeletonsItem} ${props.textClassName}`} key={'skeletonsItem' + index}
        style={{width:index == count - 1 ? '70%' : '90%'}}>
        <div className={styles.skeletons}/>
      </div>)
    }
    return item
  }
  return <div className={props.className}>
    {items()}
  </div>
}
export default Skeletons
export {
  SkeletonsText,
  SkeletonsImage
}