/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 16:01:46
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-23 16:03:44
 * @Description: file content
 * @FilePath: \nodeTest\07_stream3.js
 */

const fs = require('fs')

const zlib = require('zlib')

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('inputGun.txt'))