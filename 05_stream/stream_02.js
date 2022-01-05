/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 11:27:30
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:05:54
 * @Description: 流- 写入流
 * @FilePath: \nodeTest\05_stream\stream_02.js
 */
const fs = require('fs')

let str = '剑光如我，斩尽芜杂'

const writeStream =fs.createWriteStream('05_stream/output.txt')

writeStream.write(str,'UTF8')

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
