                            _ooOoo_  
                           o8888888o  
                           88" . "88  
                           (| -_- |)  
                            O\ = /O  
                        ____/`---'\____  
                      .   ' \\| | `.  
                       / \\||| : ||| \  
                     / _||||| -:- |||||- \  
                       | | \\\ - / | |  
                     | \_| ''\---/'' | |  
                      \ .-\__ `-` ___/-. /  
                   ___`. .' /--.--\ `. . __  
                ."" '< `.___\_<|>_/___.' >'"".  
               | | : `- \`.;`\ _ /`;.`/ - ` : | |  
                 \ \ `-. \_ __\ /__ _/ .-` / /  
         ======`-.____`-.___\_____/___.-`____.-'======  
                            `=---='  
  
         .............................................  
                  佛祖保佑             永无BUG 
          佛曰:  
                  写字楼里写字间，写字间里程序员；  
                  程序人员写程序，又拿程序换酒钱。  
                  酒醒只在网上坐，酒醉还来网下眠；  
                  酒醉酒醒日复日，网上网下年复年。  
                  但愿老死电脑间，不愿鞠躬老板前；  
                  奔驰宝马贵者趣，公交自行程序员。  
                  别人笑我忒疯癫，我笑自己命太贱；  
                  不见满街漂亮妹，哪个归得程序员？


`yarn add @apollo/client @emailjs/browser @multiavatar/multiavatar @reduxjs/toolkit @sentry/react @types/lodash lodash @types/numeral numeral @types/react-lottie react-lottie animate.css bignumber.js copy-to-clipboard dayjs echarts events framer-motion graphql language-translate  react-countdown  rc-texty rc-tween-one react-fast-marquee react-height react-loader-spinner react-photo-view react-redux react-reveal react-spring react-toastify react-use redux-persist swiper use-media @web3modal/wagmi wagmi viem @tanstack/react-query crypto-js @types/crypto-js react-tooltip @umijs/plugins aos @types/aos react-countup`


# extensions.ts
  - `Number` 绑定 加、减、乘、除、保留几位小数、千位分隔符方法

# components/errorBoundary
 - UI 错误显示页面

# 多语言
  `useIntlLanguage`
  `setLocaleLanguage(LocalsLanaugaeKey.US)`

# components/loadingButton
 - 自定义loading按钮，目前支持 type = 'primary' | 'default' | 'error' | 'warning' 4种类型, 其他颜色的需重新定义type，暂不支持传入属性参数

# useMutation 使用
```
const mutation = useMutation({
  mutationKey:['getCoinList'],
  mutationFn:getCoinList
})

function getCoinList({coin}:{coin:string}){
  console.log('coin===',coin)
  return fetch('https://www.binance.com/dapi/v1/premiumIndex').then((response)=>response.json())
}
function onFetch(){
  mutation.mutate({coin:'BTC'},{
    onError(error, variables, context) {
      console.log('error===',error);
    },
    onSuccess(data, variables, context) {
      console.log('onSuccess data===',data);
    },
    onSettled(data, error, variables, context) {
      // 相当于 onFinish 可在此取消loading状态 data是错误或成功的信息
    },
  })
}
```

# 页面预加载数据 
```
const { data } = useClientLoaderData();

// 路由数据加载
export async function clientLoader() {
  const data = await fetch('/api/data');
  return data;
}
```

# 加载SVG
```
import SmileUrl, { ReactComponent as SvgSmile } from '@/assets/svg/Aptos.svg'
<img src={SmileUrl} className='svg'/>
.svg {
  width:10rem;
  height:10rem;
  background-color: red;
}
```

# 视频
```
<video 
  className='video'
  loop
  muted
  preload={"auto"}
  autoPlay
  playsInline
  src={'/media/homevideo.mp4'}/>
.video {
  mix-blend-mode: screen;
  width: 100%;
}
```

# react-toastify
  - 详细配置 `https://fkhadra.github.io/react-toastify/introduction`

# icon大全
  - 详细介绍 `https://react-icons.github.io/react-icons/`

# @mui/icons-material 图标
  `https://mui.com/material-ui/material-icons/`

# 动画 motion
  - 详细介绍 `https://motion.dev/docs/react-quick-start`
  - select 选择框 `https://codesandbox.io/p/sandbox/framer-motion-variants-rj7ks0?file=%2Fsrc%2FApp.tsx%3A16%2C1`
  - 点击按钮出现侧边栏 `https://codesandbox.io/p/sandbox/framer-motion-side-menu-mx2rw?file=%2Ftsconfig.json`
```
import { motion, AnimatePresence } from "framer-motion"
const [isOpen, setIsOpen] = useState(false)
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0.5, x: "-100%" },
}

<motion.div
  className='motionView'
  // 动画初始状态设置
  initial={{ x: 0, scale: 0.2 }}
  // 页面打开就会有动画，适合首屏显示，也适合点击按钮setState开始动画
  // animate 里面的值改变就会执行动画
  animate={{
    x: 70, // 左右动画
    y: 57, // 上下动画

    // scale: 0.8,// 缩放动画
    // rotate: 99,// 旋转动画

    scale: [1, 2, 2, 1, 1], // 关键帧动画
    rotate: [0, 0, 270, 270, 0],// 关键帧动画
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],// 关键帧动画

  }}
  // 动画配置
  transition={{
    duration: 1, //动画时长 s
    ease:'easeInOut',
    x:{duration:3},// 为不同的动画设置不同的配置
    delay:4,// 延迟时间  s
    repeat:5,// 重复次数
    repeatType:'loop', // loop ：从头开始重复动画 reverse：在向前和向后播放之间交替 mirror: 开关from和to交替
  }}
  // 动画是否执行一次
  viewport={{ once: true }}
/>

<motion.div
  // 通过按钮控制动画
  className='motionView'
  animate={isOpen ? "open" : "closed"}
  variants={variants}
  onClick={()=>setIsOpen(!isOpen)}

  // 鼠标hover状态动画
  whileHover={{ scale: 1.5 }}
  // 鼠标点击状态动画
  whileTap={{scale:1.2}}
  // div将要显示在屏幕上的动画
  whileInView={{scale:0.7}}
/>

{/* 组件消失时的动画  exit 可定义组件消失的动画效果 */}
<AnimatePresence>
  {isOpen && <motion.div key='唯一的key' className='motionView'
    initial={{ opacity: 0, y: 200 }}
    animate={{ opacity: 1, y:0 }}
    exit={{ opacity: 0, y:200 }}
  />}
</AnimatePresence>
.motionView {
  width: 200px;
  height: 200px;
  border-radius: 20px;
  background: red;
  margin: 50px 0;
}
```

# nzh 阿拉伯数字转中文
  `https://github.com/cnwhy/nzh`

# 浏览图片 react-photo-view
  - 详细介绍 `https://github.com/MinJieLiu/react-photo-view`

# numeral 处理数字库
  - 详细介绍 `http://numeraljs.com/`

# 循环滚动
  - 详细介绍 `react-fast-marquee`

# react-loader-spinner 加载动画
  - 详细介绍 `https://mhnpd.github.io/react-loader-spinner/docs/intro`

# react-countup 数字从  0 - 100
```
<CountUp className='numberValue' end={100} duration={3} />
```

# 图表 echarts
  - 详细介绍 `https://echarts.apache.org/examples/zh/index.html`

# 根据字符串生成头像
```
import multiavatar from '@multiavatar/multiavatar/esm'
let svgCode = multiavatar('Binx Bond')
<div className={'svg'} dangerouslySetInnerHTML={{ __html: SvgCode }}></div>
```

# 倒计时
```
import Countdown, {zeroPad} from "react-countdown";
{time < 时间戳 && <Countdown date={time} renderer={renderer} />}
const renderer = ({ days,hours, minutes, seconds, completed }:any) => {
  if (completed) {
  } else {
    return <span>{zeroPad(days,2)} {zeroPad(hours,2)}:{zeroPad(minutes,2)}:{zeroPad(seconds,2)}</span>
  }
};
```

# 主题切换
```
`theme.css`

:root {
  --bg-color:blue
}

[data-theme = 'dark'] {
  --bg-color:purple
}

function onChangeTheme(){
  const currentTheme = document.documentElement.getAttribute('data-theme')
  if (currentTheme == 'dark'){
    document.documentElement.removeAttribute('data-theme')
  }else {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

<div className={styles.themeView}>背景色</div>

.themeView {
  background: var(--bg-color);
}

```

# 打开链接钱包弹框
`window.eventEmitter.emit(EVENT_NAME_OPEN_CONNECT_WALLET)`

# 每个页面判断是否登录
```
function HomePage() {
  return <div></div>
}
export default withAuth(HomePage)
```

# 链接钱包库 RainbowKit
  `https://www.rainbowkit.com/zh-CN/docs/installation`

# 状态管理库 zustand
  `https://awesomedevin.github.io/zustand-vue/docs/introduce/start/zustand`
  - 持久化 `https://juejin.cn/post/7452175687089946659`

# js动画库 GSAP
  `https://gsap.com/`
  `https://gsap.com/resources/React`
  ```
    const contrainer = useRef<any>()
    // 布局完成后执行动画,执行一次
    useGSAP(()=>{
      gsap.to('.box',{rotation:'+=360',duration:3,x:200})
    },{scope:contrainer})
    // 方式一：属性改变时执行动画
    useGSAP(()=>{
      gsap.to('.box',{rotation:'-=360',duration:3,x:200})
    },[language])
    // 方式二：属性改变时执行动画
    useGSAP(()=>{
      gsap.to('.box',{rotation:'-=360',duration:3,x:200})
    },{dependencies:[language],scope:contrainer,revertOnUpdate:false})
    // 点击按钮执行动画
    const { contextSafe } = useGSAP({scope:contrainer})
    function onBoxClick(){
      gsap.to('.box',{duration:3,x:0})
    }

    return (
      <div ref={contrainer}>
    )
  ```

# tailwindcss
  `https://umijs.org/blog/develop-blog-using-umi#%E5%AE%89%E8%A3%85-tailwindcss`
  `https://v3.tailwindcss.com/docs/configuration`
  - `<div className={classNames(styles.together,'text-3xl font-bold','text-yellow-400')}>tailwindcss和less一起使用</div>` 
  - 在 less  css  sass 使用 @apply 会提示警告 在vscode中，搜索 css 找到语言配置 CSS › Lint: Unknown At Rules  设置为 ignore
    `https://v3.tailwindcss.com/docs/using-with-preprocessors`
    
# shadcn/ui
  `https://www.shadcn.net/docs/installation/manual`

# MUI组件库
  `https://mui.com/material-ui/getting-started/installation/`
  - sx `https://mui.com/system/getting-started/the-sx-prop/`

