/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 14:38:17
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 14:39:53
 * @Description: 打开文件
 * @FilePath: \nodeTest\11_file\openFile.js
 */

const fs = require('fs')

// 异步打开文件
console.log('准备打开文件')
fs.open('11_file/input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err)
  }
  console.log(fd)
  console.log('文件打开成功')
})