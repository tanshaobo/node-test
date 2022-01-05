/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 14:27:52
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:06:25
 * @Description: 流 -读取流
 * @FilePath: \nodeTest\05_stream\stream_01.js
 */
const fs = require('fs')

let data = ''
// 创建可读流
const readerStream = fs.createReadStream('05_stream/input.txt')

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
