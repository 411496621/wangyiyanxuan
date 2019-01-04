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
