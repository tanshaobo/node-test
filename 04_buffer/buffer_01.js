/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 18:00:50
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 18:01:59
 * @Description: buffer数组采用不同编码读取
 * @FilePath: \nodeTest\04_buffer\buffer_01.js
 */
const buf = Buffer.from('lyww1992', 'ascii')

console.log(buf)
// hex - 将每个字符编码为两个十六进制字符
console.log('hex', buf.toString('hex'))
// base64 - Base64编码
console.log('base64', buf.toString('base64'))
// UTF-8 - UTF-8 编码 多字节编码的 Unicode 字符
console.log('UTF-8', buf.toString('UTF-8'))
// latinl 一种把Buffer编码成一字编码的字符串的方式
console.log('latin1', buf.toString('latin1'))
