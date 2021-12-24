/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 14:27:52
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-24 09:46:40
 * @Description: 流
 * @FilePath: \nodeTest\07_stream.js
 */

/**
 * 读取流
 */
const fs = require('fs')

let data = ''
// 创建可读流
const readerStream = fs.createReadStream('input.txt')

// 设置编码为utf8
readerStream.setEncoding('UTF8')

// 处理流事件 -->data,end,and error
readerStream.on('data', chunk => {
  data += chunk
  console.log('data',chunk)
})

readerStream.on('end',() => {
  console.log('end', data)
})

readerStream.on('error',err => {
  console.log(err.stack)
})

console.log('readerStream END')
/**
 * 写入流
 */
// 创建可写入的流
// let str = '宝塔镇人妖'
const writeStream =fs.createWriteStream('output.txt')

// writeStream.write(str,'UTF8')

// 标记文档末尾
writeStream.end()

// 处理流事件 -->finish end and error
writeStream.on('finish', ()=>{
  console.log('写入完成')
})

writeStream.on('error',err => {
  console.log(err.stack)
})

console.log('writeStream END')

/**
 * 管道流
 * 参照 07_stream1.js
 */

/**
 * 链式流（压缩）
 * 参照07_stream2.js
 */

/**
 * 链式流（解压）
 * 参照07_stream3.js
 */
