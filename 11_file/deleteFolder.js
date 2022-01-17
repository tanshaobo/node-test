/*
 * @Author: tanshaobo
 * @Date: 2022-01-17 10:54:01
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 11:00:14
 * @Description: 删除目录
 * @FilePath: \nodeTest\11_file\deleteFolder.js
 */

const fs = require('fs')

console.log('删除tmp 目录')

fs.rmdir('11_file/tmp',(err) => {
  if(err){
    return console.error(err)
  }
  console.log('读取11_file目录')
  fs.readdir('11_file/',(err,files) => {
    if(err){
      console.log(err)
    }

    files.forEach((file) => {
      console.log(file)
    })
  })
})