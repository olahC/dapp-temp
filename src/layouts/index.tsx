import './index.less'
import '../extensions'
import '@/common/theme.css'
import 'react-photo-view/dist/react-photo-view.css';
import 'aos/dist/aos.css';
import 'react-tooltip/dist/react-tooltip.css'
import '@rainbow-me/rainbowkit/styles.css';


import { Outlet } from 'umi';
import AOS from 'aos';
import { ErrorInfo } from 'react';
import {persistor, store} from '@/redux';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import ReactQueryProvider from '@/provider/ReactQueryProvider';
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from '@/components/errorBoundary';
import { ToastContainer } from 'react-toastify';
import { WagmiProvider } from 'wagmi';
import { wagmiConfig } from '@/walletContract/wagmiConfig';
import EventEmitter from 'events';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

gsap.registerPlugin(useGSAP)
AOS.init();
window.eventEmitter = new EventEmitter()

export default function Layout() {

  function onError(error:Error,info:ErrorInfo){
    // 可以上传错误日志
    console.log('error===',error.message);
    console.log('info.componentStack===',info.componentStack);
  }

  return (
    <ErrorBoundary fallback={<ErrorBoundaryComponent/>} onError={onError}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <WagmiProvider config={wagmiConfig}>
            <ReactQueryProvider>
              <RainbowKitProvider>
                <Outlet />
                <ToastContainer/>
              </RainbowKitProvider>
            </ReactQueryProvider>
          </WagmiProvider>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
