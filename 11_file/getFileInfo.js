/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 14:43:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 14:52:03
 * @Description: file content
 * @FilePath: \nodeTest\11_file\getFileInfo.js
 */
const fs = require('fs')

// 获取文件信息
fs.stat('/Users/MFHJ-DZ-001-079/myproject/nodeTest/11_file/getFileInfo.js', function(err, stats){
  console.dir(stats)
  console.log(stats.isFile())  // 是否文件
})

fs.stat('11_file/input.txt', function(err, stats){
  if(err){
    return console.log(err)
  }
  console.log("读取文件信息成功！")
  console.log(`是否为文件（isFile）？ ${stats.isFile()}`)
  console.log(`是否为目录（isDirectory）？ ${stats.isDirectory()}`)
  console.log(`是否为设备（isBlockDevice）？ ${stats.isBlockDevice()}`)
  console.log(`是否为字符设备（isCharacterDevice）？ ${stats.isCharacterDevice()}`)
  console.log(`是否为软链接（isSymbolicLink）？ ${stats.isSymbolicLink()}`)
  console.log(`是否为FIFO命令管道（isFIFO）？ ${stats.isFIFO()}`)
  console.log(`是否为Socket（isSocket）？ ${stats.isSocket()}`)
})