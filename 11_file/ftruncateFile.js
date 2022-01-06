/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 15:34:20
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 15:45:25
 * @Description: ftruncate 截取文件，会修改文件内容
 * @FilePath: \nodeTest\11_file\ftruncateFile.js
 */
const fs = require('fs')
const buf = new Buffer.alloc(1024)

// 截取文件
console.log('准备打开文件')
fs.open('11_file/input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err)
  }

  console.log('文件打开成功！')
  console.log('截取10字节内的文件内容,超出部分将被去除！')

  fs.ftruncate(fd, 100, function(err){
    if(err){
      console.log(err)
    }

    console.log("文件截取成功")
    console.log("读取相同的文件")

    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if(err){
        console.log(err)
      }
      
      //仅输出读取的字节
      if(bytes > 0){
        console.log('ftruncate,1', buf.slice(0, bytes).toString())
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