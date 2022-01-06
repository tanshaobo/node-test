/*
 * @Author: tanshaobo
 * @Date: 2021-12-29 11:24:04
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 13:55:25
 * @Description: file
 * @FilePath: \nodeTest\11_file\13_fs.js
 */

const fs = require('fs')

// 异步打开文件
console.log('准备打开文件')
fs.open('11_file/input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err)
  }
  console.log(fd)
  console.log('文件打开成功')
})
// 获取文件信息
fs.stat('/Users/MFHJ-DZ-001-079/myproject/nodeTest/13_fs.js', function(err, stats){
  console.log(stats.isFile())
})

fs.stat('input.txt', function(err, stats){
  if(err){
    return console.log(err)
  }
  console.log("读取文件信息成功！")
  console.log(`是否为文件（isFile）？ ${stats.isFile()}`)
  console.log(`是否为目录（isDirectory）？ ${stats.isDirectory()}`)
})

// 写入文件
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

// 读取文件
const buf = new Buffer.alloc(1024)
console.log("准备打开已存在的文件！")
fs.open('input.txt', 'r+', function(err, fd){
  if(err){
    return console.error(err)
  }
  console.log("文件打开成功！")
  console.log("准备读取文件：")
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if(err){
      console.log(err)
    }
    console.log(`${bytes}字节被读取`)

    if(bytes > 0){
      console.log('bytes', buf.slice(0, bytes).toString())
    }
  })
})

// 关闭文件
console.log("close 准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
       return console.error(err);
   }
   console.log("close 文件打开成功！");
   console.log("close 准备读取文件！");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // 仅输出读取的字节
      if(bytes > 0){
         console.log('close ', buf.slice(0, bytes).toString());
      }

      // 关闭文件
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("close 文件关闭成功");
      });
   });
});

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
