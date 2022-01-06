/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 14:57:19
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 15:03:23
 * @Description: 写入文件
 * @FilePath: \nodeTest\11_file\writeFile.js
 */
const fs = require('fs')

// 写入文件
fs.writeFile('11_file/input.txt', '天权凝光，富甲一方，明眸善睐，桃羞杏让，目达耳通，百了千当', function(err){
  if(err){
    return console.error(err)
  }
  console.log("数据写入成功")
  console.log("-----------我是分割线----------")
  console.log("读取写入的数据")
  fs.readFile('11_file/input.txt', function(err,data){
    if(err){
      return console.log(err)
    }
    console.log(`异步读取文件数据：${data.toString()}`)
  })
})