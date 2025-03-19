import styles from './index.less'
import './index.less'
import classNames from 'classnames';
import Button from '@mui/material/Button';
import { CustomButton, customStyles, rotate360 } from './styles';

import { AccessTimeFilled, AirplanemodeActive, AirlineSeatLegroomReduced } from '@mui/icons-material'
import Skeletons from '@/components/skeletons';
import { Skeleton } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Echarts from '@/components/echarts';

function HomePage() {
  return (
    <div>
      <ConnectButton />
      <Echarts/>
      <Button style={{
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      }} variant="contained">Hello world</Button>
      <Button variant="text">Text</Button>
      <Button style={customStyles} variant="outlined">Outlined</Button>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
      <CustomButton
        loading
        loadingPosition='end'
        loadingIndicator={<AccessTimeFilled style={rotate360}/>}
        startIcon={<AirplanemodeActive/>}
        endIcon={<AirlineSeatLegroomReduced/>}
      >CustomButton</CustomButton>

      <Skeleton variant="text" />
      <Skeletons/>

      <div className="font-lexend-black text-3xl font-bold underline text-red-500 bg-blue-500">
        Hello world!123dddd
      </div>

      <div className={classNames(styles.together,'text-3xl font-bold','text-yellow-400')}>tailwindcss和less一起使用</div>
    </div>
  );
}

// 路由数据加载
export async function clientLoader() {
  const data = await fetch('/api/data');
  return data;
}


function MyToastComponent(){
  return <div>MyToastComponent</div>
}
export default HomePage