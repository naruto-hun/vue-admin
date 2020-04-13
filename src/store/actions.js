import {
  login,
  checkAdminToken,
} from '../api'

export default {
  //验证登录
  async loginAction(store,{data,success,error}){
    const res=await login(data)
    if(res.status==1){
      sessionStorage.setItem('token',res.msg.token)
      sessionStorage.setItem('admin',res.msg.name)
      success&&success()
    }else{
      error&&error(res.msg)
    }
  },

  //验证登录
  async checkAdminTokenAction(store,{token,callback}){
    const res=await checkAdminToken({token})
    if(res.status==0){
      callback&&callback()
    }
  },
}
