import ajax from "./ajax"
const baseUrl = '/api'


// 请求cateList的接口数据
export const reqCateList = ()=>ajax("/cateList")
