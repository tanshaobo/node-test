/*
 * @Author: tanshaobo
 * @Date: 2021-12-29 11:24:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 15:32:13
 * @Description: file
 * @FilePath: \nodeTest\11_file\13_fs.js
 */

const fs = require('fs')

// 截取文件
console.log('ftruncate 准备打开文件')
fs.open('input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err)
  }

  console.log('ftruncate 文件打开成功！')
  console.log('ftruncate 截取10字节内的文件内容,超出部分将被去除！')

  fs.ftruncate(fd, 10, function(err){
    if(err){
      console.log(err)
    }

    console.log("ftruncate 文件截取成功")
    console.log("ftruncate 读取相同的文件")

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if(err){
        console.log(err)
      }
      
      //仅输出读取的字节
      if(bytes > 0){
        console.log('ftruncate', buf.slice(0, bytes).toString())
      }
      
      // 关闭文件
      fs.close(fd, function(err){
        if(err){
          console.log(err)
        }
        
        console.log("文件关闭成功！")
      })
    })

  })
})
