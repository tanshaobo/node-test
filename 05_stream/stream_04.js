/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 15:58:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:21:57
 * @Description: 链式流 -- 压缩
 * @FilePath: \nodeTest\05_stream\stream_04.js
 */

const fs = require('fs')

const zlib = require('zlib')

fs.createReadStream('05_stream/input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('05_stream/input.txt.gz'))
