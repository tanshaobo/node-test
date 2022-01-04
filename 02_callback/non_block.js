/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 17:29:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 17:31:56
 * @Description: 非阻塞
 * @FilePath: \nodeTest\02_callback\non_block.js
 */

let fs = require('fs')

fs.readFile('02_callback/input.txt',(err, data) => {
  if(err) console.log(err)
  console.log(data.toString(), -2)
})

console.log('程序执行结束！')