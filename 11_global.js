/*
 * @Author: tanshaobo
 * @Date: 2021-12-27 17:24:28
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-28 10:00:20
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

// 
console.log('process', process)
process.on('exit', (code) => {
  setTimeout(() => {
    console.log('该代码不会执行')
  },0)
  console.log(`退出码为${code}`)
})
console.log('程序执行结束')

process.stdout.write('Hello World'+ '\n')

console.log('process.config',process.config)
// 当前平台
console.log('process.platform',process.platform)
// 当前node版本
console.log('process.version',process.version)
// 当前node版本和依赖
console.log('process.versions',process.versions)
// 当前进程的进程号
console.log('process.pid', process.pid)
// 当前进程的名称
console.log('process.title',process.title)
// 当前CPU架构
console.log('process.arch', process.arch)
