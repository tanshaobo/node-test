/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 18:14:55
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 18:18:09
 * @Description: 从缓冲区读取数据
 * @FilePath: \nodeTest\04_buffer\buffer_04.js
 */
const buf = Buffer.alloc(26)

for(let i = 0; i< 26; i++){
  buf[i] = i + 97
}

console.log('buf',buf)

console.log('buf',buf.toString('ascii'))

console.log('buf',buf.toString('ascii', 7))

console.log('buf',buf.toString('ascii',7,14))