import { Navigate } from "umi";

const withAuth = (Component:any) => ()=>{
  const localInfo:Record<any,any> = JSON.parse(localStorage.getItem('persist:root') || '')
  const userInfo = JSON.parse(localInfo.user)
  if (userInfo.uid){    
    return <Component />;
  } else{    
    return <Navigate to="/login" />;
  }
}
export default withAuth