/*
 * @Author: tanshaobo
 * @Date: 2021-12-23 16:01:46
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:22:34
 * @Description: 链式流 -- 解压
 * @FilePath: \nodeTest\05_stream\stream_05.js
 */

const fs = require('fs')

const zlib = require('zlib')

fs.createReadStream('05_stream/input.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('05_stream/inputGun.txt'))