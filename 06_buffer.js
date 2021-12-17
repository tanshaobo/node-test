/*
 * @Author: tanshaobo
 * @Date: 2021-12-15 14:17:17
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-17 15:13:06
 * @Description: file content
 * @FilePath: \nodeTest\06_buffer.js
 */

/**
 * Buffer 与字符编码
*/
const buf = Buffer.from('w3cschool', 'ascii')

console.log(buf)
// hex - 将每个字符编码为两个十六进制字符
console.log('hex', buf.toString('hex'))
// base64 - Base64编码
console.log('base64', buf.toString('base64'))
// UTF-8 - UTF-8 编码 多字节编码的 Unicode 字符
console.log('UTF-8', buf.toString('UTF-8'))
// latinl 一种把Buffer编码成一字编码的字符串的方式
console.log('latin1', buf.toString('latin1'))


