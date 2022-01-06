/*
 * @Author: tanshaobo
 * @Date: 2022-01-06 15:29:40
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-06 15:31:31
 * @Description: 关闭文件
 * @FilePath: \nodeTest\11_file\closeFile.js
 */
const fs = require('fs')
const buf = new Buffer.alloc(1024); 
// 关闭文件
console.log("close 准备打开文件！");
fs.open('11_file/input.txt', 'r+', function(err, fd) {
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