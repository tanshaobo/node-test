/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 15:52:01
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-17 10:42:44
 * @Description: 创建目录
 * @FilePath: \nodeTest\11_file\createFolder.js
 */

const fs = require('fs')

// tmp目录必须存在
console.log("创建目录 11_file/tmp/test/)")
fs.mkdir('11_file/tmp/', (err) => {
  if(err){
    return console.error(err)
  }
  console.log("目录创建成功！")
})