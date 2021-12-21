/*
 * @Author: tanshaobo
 * @Date: 2021-12-15 14:17:17
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-21 14:20:20
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

/**
 * 创建Buffer类 
 */

// 创建一个长度为10、且用0填充的Buffer
const buf1 = Buffer.alloc(10)
console.log('buf1',buf1)

// 创建一个长度为10、且用0x1填充的Buffer
const buf2=Buffer.alloc(10, 1)
console.log('buf2', buf2)

// 创建一个长度为10、且未初始化的Buffer，这个方法比alloc要快，但返回的Buffer实例可能包含旧数据，需要用fill或write重写
const buf3 = Buffer.allocUnsafe(10)
console.log('buf3', buf3)

// 创建一个包含[0x1,0x2,0x3]的Buffer
const buf4 = Buffer.from([1,2,3])
console.log('buf4', buf4)

// 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5 = Buffer.from('tést')
console.log('buf5',buf5)

// 创建一个包含Latin-1字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf6 = Buffer.from('tést', 'latin1')
console.log('buf6',buf6)

// Buffer 写入缓存区
const buf7 = Buffer.alloc(256)

len = buf7.write('www.w3cschool.com')

console.log(`buf写入字节数:${len}`)

// Buffer 读取缓存区

const buf8 = Buffer.alloc(26)

for(let i = 0; i< 26; i++){
  buf8[i] = i + 97
}

console.log('buf8',buf8)

console.log('buf8',buf8.toString('ascii'))

console.log('buf8',buf8.toString('ascii', 7))

console.log('buf8',buf8.toString('ascii',7,14))

const buf9 = Buffer.from([0x1,0x2,0x3,0x4,0x5])

console.log('buf9', buf9)
