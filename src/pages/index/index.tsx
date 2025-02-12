import styles from './index.less'
import useIntlLanguage from '@/hooks/useIntlLanguage';
import { LocalsLanaugaeKey, LocalsLanaugaeTitle } from '@/locales';
import { useAppDispatch } from '@/redux';
import { setVersion } from '@/redux/settingSlice';
import { useSettingVersion } from '@/redux/settingSlice/hooks';
import { useTickerPrice } from '@/hooks/useAPIHooks';
import { useMutation } from '@tanstack/react-query';
import { Button } from 'antd';
import { history, useClientLoaderData } from 'umi';
import LoadingButton from '@/components/loadingButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BiSolidErrorAlt } from "react-icons/bi";
import { LiaWindowClose } from "react-icons/lia";
import Skeletons, { SkeletonsImage, SkeletonsText } from '@/components/skeletons';
import { BinanceServices } from '@/services';
import { AxiosError } from 'axios';
import WalletConnectButton from '@/components/walletConnectButton';
import { publicClient } from '@/walletContract/viemClients';
import withAuth from '@/HOC/withAuth';
import { EVENT_NAME_OPEN_CONNECT_WALLET } from '@/common/define';




function HomePage() {

  const { data } = useClientLoaderData();

  const {t, language, setLocaleLanguage} = useIntlLanguage()
  const dispatch = useAppDispatch()
  const settingVersion = useSettingVersion()
  const tickerPrice = useTickerPrice('BTC')

  function onChange(){
    setLocaleLanguage(LocalsLanaugaeKey.US)
  }
  function onChange1(){
    setLocaleLanguage(LocalsLanaugaeKey.ZHCN)
  }

  function onVersion(){
    dispatch(setVersion('0.0.2'))
  }

  function getCoinList({coin}:{coin:string}){
    console.log('coin===',coin)
    return fetch('https://www.binance.com/dapi/v1/premiumIndex').then((response)=>response.json())
  }

  const mutation = useMutation({
    mutationKey:['getCoinList'],
    mutationFn:getCoinList
  })

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

  const [loading,setLoading] = useState(false)
  function onButtonClick(){    
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  }

  function onJumpMine(){
    history.push('/mine')
  }

  function onShowToast(){
    // toast("Wow so easy !");
    // toast.info('哈哈哈')
    // toast.update()
    // toast.error('哈哈红红火火恍恍惚惚',{
    //   position:'bottom-right',
    //   autoClose:2000,
    //   icon:<BiSolidErrorAlt/>,
    // })
    toast(<MyToastComponent/>)
  }
  function onDisToast(){
    toast.dismiss()
  }


  async function onFetchPrice(){
    try {
      const a = await BinanceServices.getPrice({symbol:'BTCUSDT'})
      console.log('a====',a);
    } catch (error) {
      console.log('error====',error);
    }
    
  }



  async function onPublicGetBalence(){
    // const balacne = await publicClient.getBalance({
    //   address:'0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'
    // })
    // console.log('balacne===',balacne);
    const block = await publicClient.getBlock()
    console.log('block===',block);
  }
  

  function onChangeTheme(){
    const currentTheme = document.documentElement.getAttribute('data-theme')
    if (currentTheme == 'dark'){
      document.documentElement.removeAttribute('data-theme')
    }else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }

  function onOpenWalletConnectModal(){
    window.eventEmitter.emit(EVENT_NAME_OPEN_CONNECT_WALLET)
  }

  return (
    <div>
      <h2 className={styles.title}>{t('welcome',{name:'张三'})}</h2>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <div>当前语言:{LocalsLanaugaeTitle[language]}</div>
      <button onClick={onChange}>切换语言</button>
      <button onClick={onChange1}>切换语言</button>
      <button onClick={onVersion}>设置version</button>
      <div>{settingVersion}</div>
      <div>{tickerPrice.data?.price}</div>
      <button onClick={onFetch}>{mutation.isPending && '请求中...'}fetch 请求</button>
      <Button type='primary'>哈哈</Button>
      <LoadingButton loading={loading} onClick={onButtonClick}>button</LoadingButton>
      <LoadingButton loading={loading} onClick={onButtonClick} type='primary'>ok</LoadingButton>
      <LoadingButton loading={loading} onClick={onButtonClick} type='error'>error</LoadingButton>
      <LoadingButton loading={loading} onClick={onShowToast} type='warning'>显示toast</LoadingButton>
      <LoadingButton loading={loading} onClick={onDisToast} type='warning'>移除toast</LoadingButton>
      <LoadingButton loading={loading} onClick={onJumpMine}>跳转Mine</LoadingButton>
      <Button type='primary' onClick={onFetchPrice}>获取最新价格</Button>


      <Button type='primary' onClick={onPublicGetBalence}>获取余额</Button>

      <WalletConnectButton/>
      <Button type='primary' onClick={onChangeTheme}>切换主题</Button>
      <div className={styles.themeView}>背景色</div>
      <Button type='primary' onClick={onOpenWalletConnectModal}>打开链接钱包弹框</Button>

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
export default withAuth(HomePage)