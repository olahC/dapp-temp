import { Button } from 'antd'
import styles from './index.less'
import { useConnect } from 'wagmi'

export default function WalletConnectButton(){
  const { connectors, connect } = useConnect()
    return <div className='column'>
      {
        connectors.map((connector) => (
          <Button key={connector.uid} onClick={() => connect({ connector })}>
            {connector.name}
          </Button>
        ))
      }
    </div>
  return 
}
