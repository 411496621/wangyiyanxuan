import ajax from "./ajax"
const baseUrl = '/api'
import qs from "querystring"
let string = qs.stringify({keywordPrefix:"xxxxx"})
console.log(string)

// 请求cateList的接口数据
export const reqCateList = ()=>ajax("/cateList")
export const reqCategorylist = ()=>ajax('/categorylist')
// 請求搜索的接口
export const reqSearchName = searchName=> ajax(`${baseUrl}/xhr/search/searchAutoComplete.json`,
  {keywordPrefix:searchName},"POSTFORM")
// 定义请求推荐的默认数据接口
export const reqDefaultList = ()=> ajax(`${baseUrl}/topic/v1/find/recManual.json`)

// 定义继续加载剩余的推荐
export const reqNewList = page => ajax(`${baseUrl}/topic/v1/find/recAuto.json?page=${page}&size=5&exceptIds=6201,5888,4035,4513,4037,6242,5950,5942,5821,5716,5867,5868,5823,5714,5980,5641,5213,4740,2876,3438,2747,4210,2077,3773,5711,5950,5715,4618,4678,4273,3707,3686`)

