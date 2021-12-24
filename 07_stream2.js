/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 15:58:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-24 09:47:22
 * @Description: 链式流 -- 压缩
 * @FilePath: \nodeTest\07_stream2.js
 */

const fs = require('fs')

const zlib = require('zlib')

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
