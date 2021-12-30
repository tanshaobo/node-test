/*
 * @Author: tanshaobo
 * @Date: 2021-12-30 10:55:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-30 10:57:45
 * @Description: 阻塞
 * @FilePath: \nodeTest\02_callback\blocking.js
 */
let fs = require('fs')

let data = fs.readFileSync('02_callback/input.txt')

console.log(data.toString(), 1)

console.log("程序执行结束！")