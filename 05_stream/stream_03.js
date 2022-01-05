/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 15:35:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:17:10
 * @Description: 管道流
 * @FilePath: \nodeTest\05_stream\stream_03.js
 */
const fs = require('fs')
const readStream = fs.createReadStream('05_stream/input.txt')

const writeStream = fs.createWriteStream('05_stream/out.txt')

readStream.pipe(writeStream)