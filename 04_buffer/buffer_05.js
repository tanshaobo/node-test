/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 18:20:24
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 10:49:10
 * @Description: 将Buffer转化为JSON
 * @FilePath: \nodeTest\04_buffer\buffer_05.js
 */
const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5])

console.log('buf', buf)

const json = JSON.stringify(buf)

console.log('json',json)

const copy = JSON.parse(json, (k,v) => v&&v.type == 'Buffer' ? Buffer.from(v.data) : v)

console.log('copy',copy)