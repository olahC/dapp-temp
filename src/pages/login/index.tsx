import { useAppDispatch } from "@/redux";
import { setUserUID } from "@/redux/userSlice";
import { useState } from "react";
import { Navigate } from "umi";

export default function Login(){

  const [isLogin,setIsLogin] = useState(false)
  const [isLoading,setIsLoading] = useState(false)
  const dispatch = useAppDispatch()

  function onLogin(){
    setIsLoading(true)
    setTimeout(() => {
      dispatch(setUserUID('1234'))
      setTimeout(() => {
        setIsLogin(true)
        setIsLoading(false)
      }, 1000);
    }, 2000);
  }

  return isLogin ? <Navigate to="/" /> : <div>
    <button onClick={onLogin}>{isLoading ? '登录中...' : '登录'}</button>
  </div>
}