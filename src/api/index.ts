

/**网络请求方法 */
function request(){
  return new Promise(async (resolve,reject)=>{
    try {
      /**发起网络请求 根据返回值判断 resolve 还是 reject */








    } catch {
      const error = new Error('错误信息')
      reject(error)
    }
  })
}


/**登录相关接口 */
type TDataUserInfo = {
  id:string
}
export class LoginService {
  public static userInfo(params:TDataUserInfo) {
    
  }
}

/**用户相关接口 */
type TDataResetPassword = {
  id:string,
  password:string,
  new_password: string
}
export class UserServive {
  public static resetPassword(params:TDataResetPassword) {

  }
}