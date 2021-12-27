/*
 * @Author: tanshaobo
 * @Date: 2021-12-27 17:24:28
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-27 17:31:45
 * @Description: node 全局对象
 * @FilePath: \nodeTest\11_global.js
 */
// 全局对象 -- 文件名称
console.log(__filename)
// 全局对象 -- 目录名称
console.log(__dirname)

setTimeout(() => {
  console.log('setTimeout')
  console.timeEnd()
}, 1000)
// setInterval(() => {console.log('setInterval')}, 1000)

console.info('info')
console.time()