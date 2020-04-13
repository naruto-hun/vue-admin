import axios from 'axios'
import qs from 'qs';//配置post请求的参数

export default function ajax(url,data={},type='GET') {
  return new Promise((resolve,reject)=>{
    let promise
    if(type=='GET'){ //get请求
      let dataStr=''
      Object.keys(data).forEach(key=>{
        dataStr+=key+'='+data[key]+'&'
      })
      if(dataStr!=''){
        dataStr=dataStr.slice(0,dataStr.lastIndexOf('&'))
        url=url+'?'+dataStr
      }
      promise=axios.get(url,{
        withCredentials:true  //解决session跨域
      })
    }else{ //post请求
      promise=axios.post(url,qs.stringify(data),{
        withCredentials:true  //解决session跨域
      })
    }
    promise.then(res=>{
      resolve(res.data)
    })
      .catch(err=>{
        reject(err)
      })
  })
}
