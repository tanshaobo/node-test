/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 10:51:34
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 10:52:39
 * @Description: Buffer 缓冲区合并
 * @FilePath: \nodeTest\04_buffer\buffer_06.js
 */
const buf0 = Buffer.from('前端')

const buf1 = Buffer.from('攻城狮')

const buf2 = Buffer.concat([buf0,buf1])

console.log('buf2', buf2.toString())