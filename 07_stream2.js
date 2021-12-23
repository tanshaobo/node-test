/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 15:58:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-23 16:00:12
 * @Description: file content
 * @FilePath: \nodeTest\07_stream2.js
 */

const fs = require('fs')

const zlib = require('zlib')

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('input.txt.gz'))
