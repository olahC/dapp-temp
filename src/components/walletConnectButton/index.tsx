import { Modal } from 'antd'
import styles from './index.less'
import './custom.antd.less'
import { useAccount, useChainId, useChains, useConnect, useDisconnect, useSwitchChain } from 'wagmi'
import classNames from 'classnames'
import LoadingButton from '../loadingButton'
import { useEffect, useRef, useState } from 'react'
import { ReactComponent as WalletConnectSVG } from '@/assets/svg/walletConnect.svg'
import { formatAddress } from '@/common/utils'
import multiavatar from '@multiavatar/multiavatar/esm'
import { TbCopy, TbCopyCheckFilled } from "react-icons/tb";
import { TbArrowLeftFromArc } from "react-icons/tb";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useWalletCoinBalances } from '@/hooks/useContractHooks'
import Skeletons from '../skeletons'
import copy from 'copy-to-clipboard';
import { Chain } from 'viem'
import { Oval } from 'react-loader-spinner'

export default function WalletConnectButton(){
  const {address} = useAccount()

  const [showConnectModal,setShowConnectModal] = useState(false)
  const [showWalletModal,setShowWalletModal] = useState(false)
  function onOpenModal(){
    if (address){
      setShowWalletModal(true)
    }else {
      setShowConnectModal(true)
    }
  }
  const avatarSVG = multiavatar(address || '');
  return <div className={styles.walletConnectView}>
    <LoadingButton type='primary' loading={showConnectModal} onClick={onOpenModal}>
      {address && <div className={styles.avatar} dangerouslySetInnerHTML={{ __html: avatarSVG }} />}
      <div className={styles.address}>{formatAddress(address) || '链接钱包'}</div>
      {address && <TbArrowLeftFromArc className={styles.exitIcon}/>}
    </LoadingButton>
    <Modal
      open={showConnectModal}
      destroyOnClose
      onCancel={()=>setShowConnectModal(false)}
      centered  
      maskClosable={false}
      footer={[]}>
        <ConnectWalletComponent onDismiss={()=>setShowConnectModal(false)}/>
    </Modal>
    <Modal
      open={showWalletModal}
      destroyOnClose
      onCancel={()=>setShowWalletModal(false)}
      centered  
      maskClosable={false}
      footer={[]}>
        <WalletInfoComponent avatarSVG={avatarSVG} onDisconnect={()=>setShowWalletModal(false)}/>
    </Modal>
  </div>
}

function ConnectWalletComponent({
  onDismiss
}:{
  onDismiss:()=>void
}){
  const { connectors, connect } = useConnect()
  return <div className={classNames('column',styles.connectView)}>
    <div className={styles.title}>Connect a Wallet</div>
    {
      connectors.map((connector) => (
        <div className={classNames('row',styles.connectItem)} key={connector.uid} onClick={() => {
          connect({ connector })
          onDismiss()
        }}>
          {connector.name == 'WalletConnect' ? <WalletConnectSVG className={styles.icon}/> : <img className={styles.icon} src={connector.icon}/>}
          <div className={styles.iconTitle}>{connector.name}</div>
        </div>
      ))
    }
  </div>
}

function WalletInfoComponent({
  avatarSVG,
  onDisconnect
}:{
  avatarSVG:any,
  onDisconnect:()=>void
}){
  const chains= useChains()
  const chainId = useChainId()
  const coinBalence = useWalletCoinBalances()

  const [currentChain,setCurrentChain] = useState<Chain>()

  useEffect(()=>{
    if (chains && chainId){
      const temp = chains.find((v:any)=>v.id == chainId)
      setCurrentChain(temp)
    }
  },[chains, chainId])

  return <div className={classNames('columnCenter',styles.connectView )}>
    <div className={styles.avatarBig} dangerouslySetInnerHTML={{ __html: avatarSVG }} />
    <div className={classNames('row',styles.balance)}>
      {coinBalence.isLoading ? <Skeletons/> : coinBalence.data?.nativeCurrency} {currentChain?.nativeCurrency?.symbol}
    </div>
    <div className='rowBetween'>
      <CopyComponent/>
      <div style={{width:'10%'}}/>
      <DisConnectComponent onDisconnect={onDisconnect}/>
    </div>
    {currentChain && <SwitchChain chain={currentChain}/>}
  </div>
}
function CopyComponent(){
  const {address} = useAccount()
  const [copied,setCopide] = useState(false)
  function onCopy(){
    if (address){
      copy(address)
      setCopide(true)
      setTimeout(() => {
        setCopide(false)
      }, 2000);
    }
  }
  return <div className={classNames('columnCenter',styles.connectWalletItem,styles.connectWalletItemCopy)} onClick={onCopy}>
    {copied ? <TbCopyCheckFilled className={classNames(styles.connectIcon,styles.connectIconCopied)}/> : <TbCopy className={styles.connectIcon}/>}
    <div className={classNames(styles.connectTitle,copied && styles.connectTitleCopied)}>{copied ? 'Copy successful!' : 'Copy Address'}</div>
  </div>
} 
function DisConnectComponent({
  onDisconnect
}:{
  onDisconnect:()=>void
}){
  const { disconnect } = useDisconnect()
  return <div className={classNames('columnCenter',styles.connectWalletItem,styles.connectWalletItemDis)} onClick={()=>{
    disconnect()
    onDisconnect()
  }}>
    <TbArrowLeftFromArc className={styles.connectIcon}/>
    <div className={styles.connectTitle}>Disconnect</div>
  </div>
}
function SwitchChain({
  chain,
}:{
  chain:any,
}){
  const chains= useChains()
  const { switchChain, isPending } = useSwitchChain()
  const [showChains,setShowChains] = useState(false)
  const willChainID = useRef<number>()
  function onShow(){
    setShowChains(!showChains)
  }

  function onSwitchChain(chainID:number){
    if (chainID == chain.id || isPending)return
    switchChain({chainId:chainID})
  }

  return <div className={classNames('column',styles.connectItemSwitch)}>
    <div className={classNames('rowBetween',styles.connectWalletItem)} onClick={onShow}>
      <div className='row'>
        <div className={classNames(styles.connectTitle,styles.connectTitleLeft)}>{chain.name}</div>
      </div>
      <MdOutlineKeyboardArrowDown className={classNames(styles.connectIcon,styles.connectIconRight,showChains && styles.connectIconRightRotate)}/>
    </div>
    <div className={classNames('column',styles.chainsView,showChains && styles.chainsShowView)} style={{
      height:showChains ? chains.length * 40 : 0
    }}>
      {
        chains && chains.map((v:Chain)=>{          
          return <div key={v.name} className={classNames('rowBetween',styles.chainItemView)} style={{
            height:40
          }} onClick={()=>{
            onSwitchChain(v.id)
            willChainID.current = v.id
          }}>
            <div className={classNames(styles.connectTitle,styles.connectTitleLeft,styles.chainTitle,chain.id == v.id && styles.chainTitleChoose)}>{v.name}</div>
            {chain.id == v.id && <div className={classNames('row',styles.connectedTitle)}>
              <div className={styles.connectedIcon}/>
              Connected
            </div>}
            {isPending && willChainID.current == v.id && <div className={styles.loadingIcon}>
              <Oval
                visible={true}
                height="20"
                width="20"
                color="#fac20a"
              />
            </div>}
          </div>
        })
      }
    </div>
  </div>
}