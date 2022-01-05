/*
 * @Author: tanshaobo
 * @Date: 2022-01-05 10:59:59
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 11:01:46
 * @Description: copy 缓冲区
 * 根据返回结果，类似数组fullfill 从指定位置开始填充，填充到任一长度终止位置
 * @FilePath: \nodeTest\04_buffer\buffer_08.js
 */
const buf1 = Buffer.from('abcd')

const buf2 = Buffer.from('123')

console.log('buf1',buf1)
console.log('buf2',buf2)

buf2.copy(buf1, 2)

console.log(buf1.toString())