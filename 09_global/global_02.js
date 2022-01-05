/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 15:11:22
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 15:18:20
 * @Description: process 进程状态对象
 * @FilePath: \nodeTest\09_global\global_02.js
 */

/**
 * 进程对象事件 以exit举例
 */
 process.on('exit', (code) => {
  setTimeout(() => {
    console.log('该代码不会执行')
  },0)
  console.log(`退出码为${code}`)
})
console.log('程序执行结束')