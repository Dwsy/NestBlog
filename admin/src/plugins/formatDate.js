import Vue from 'vue'
// 时间格式化
export function formatDate (date, fmt) {
  let newDate = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': newDate.getMonth() + 1,
    'd+': newDate.getDate(),
    'h+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : (str))
    }
  }
  return fmt
}
let filters = {
  formatDate
}

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
export default filters