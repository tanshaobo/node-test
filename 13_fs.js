/*
 * @Author: tanshaobo
 * @Date: 2021-12-29 11:24:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-29 15:39:37
 * @Description: file
 * @FilePath: \nodeTest\13_fs.js
 */

const fs = require('fs')

// 异步打开文件
console.log('准备打开文件')
fs.open('input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err)
  }
  console.log(fd)
  console.log('文件打开成功')
})

fs.stat('/Users/MFHJ-DZ-001-079/myproject/nodeTest/13_fs.js', function(err, stats){
  console.log(stats.isFile())
})

fs.stat('input.txt', function(err, stats){
  if(err){
    return console.log(err)
  }
  console.log(stats)
  console.log("读取文件信息成功！")
  console.log(`是否为文件（isFile）？ ${stats.isFile()}`)
  console.log(`是否为目录（isDirectory）？ ${stats.isDirectory()}`)
})

fs.writeFile('input.txt', '我是通过fs.writeFile写入文件的内容', function(err){
  if(err){
    return console.error(err)
  }
  console.log("数据写入成功")
  console.log("-----------我是分割线----------")
  console.log("读取写入的数据")
  fs.readFile('input.txt', function(err,data){
    if(err){
      return console.log(err)
    }
    console.log(`异步读取文件数据：${data.toString()}`)
  })
})


