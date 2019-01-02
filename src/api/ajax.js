import axios from "axios"

export default (url,data={},method="GET")=>{
   let promise
   if(method==="GET"){
     promise = axios.get(url,
       {
         params:data
       }
     )
   }else{
     promise = axios.post(url,data)
   }
   return new Promise((resolve,reject)=>{
         promise.then(response=>{
             const {data} = response
             resolve(data)
         }).catch(err=>{
             alert("请求出错"+err.message)
         })
   })

}
