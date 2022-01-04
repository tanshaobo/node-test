/*
 * @Author: tanshaobo
 * @Date: 2022-01-04 18:02:35
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-04 18:10:06
 * @Description: 创建Buffer类
 * @FilePath: \nodeTest\04_buffer\buffer_02.js
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
