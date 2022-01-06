/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 15:48:06
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 15:50:24
 * @Description: 删除文件
 * @FilePath: \nodeTest\11_file\deleteFile.js
 */

const fs = require('fs')

console.log('准备删除文件')

fs.unlink('11_file/13_fs.js',(err)=>{
  if(err){
    return console.error(err)
  }
  console.log('文件删除成功！')
})