/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 11:03:38
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 11:11:04
 * @Description: 裁剪缓冲区 类似 slice
 * @FilePath: \nodeTest\04_buffer\buffer_09.js
 */
const buf = Buffer.from('zxcvbnm')

console.log('buf',buf)

console.log(buf.slice(2,5).toString(),buf.toString())