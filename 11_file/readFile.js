/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 13:56:00
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 15:22:23
 * @Description: 读取文件内容
 * @FilePath: \nodeTest\11_file\readFile.js
 */
const fs = require("fs")

// 异步读取
fs.readFile("11_file/input.txt",(err, data) => {
  if(err){
    return console.error(err)
  }
  console.log(`异步读取：${data.toString()}`)
})

// 同步读取
const data = fs.readFileSync("11_file/input.txt")

console.log(`同步读取：${data.toString()}`)

console.log(`程序执行完毕`)