/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 10:46:45
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 10:50:38
 * @Description: 读取目录
 * @FilePath: \nodeTest\11_file\readFolder.js
 */

const fs = require("fs")

console.log('查看/11_file目录')

fs.readdir('11_file/', (err, files) => {
  if(err){
    return console.error(err)
  }

  files.forEach((file) => {
    console.log(file)
  })
})