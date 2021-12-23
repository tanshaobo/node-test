/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 15:35:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-23 15:37:19
 * @Description: file content
 * @FilePath: \nodeTest\07_stream1.js
 */
const fs = require('fs')
const readStream = fs.createReadStream('input.txt')

const writeStream = fs.createWriteStream('out.txt')

readStream.pipe(writeStream)