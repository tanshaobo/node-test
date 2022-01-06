/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 15:21:30
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 15:29:26
 * @Description: process 属性
 * @FilePath: \nodeTest\09_global\global_03.js
 */
process.stdout.write('Hello World'+ '\n')
process.stderr.write('标准错误流')
console.log('进程配置 process.config',process.config)
// 当前平台
console.log('process.platform',process.platform)
// 当前node版本
console.log('node版本 process.version',process.version)
// 当前node版本和依赖
console.log('node版本和依赖 process.versions',process.versions)
// 当前进程的进程号
console.log('进程号 process.pid', process.pid)
// 当前进程的名称
console.log('进程名称 process.title',process.title)
// 当前CPU架构
console.log('CPU架构 process.arch', process.arch)