/*
 * @Author: tanshaobo
 * @Date: 2021-12-15 14:17:17
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 10:55:20
 * @Description: Buffer 与字符编码
 * @FilePath: \nodeTest\04_buffer\06_buffer.js
 */

/**
 * Buffer 拷贝缓冲区
 * 根据返回结果，类似数组fullfill 从指定位置开始填充，填充到任一长度终止位置
 */

const buf15 = Buffer.from('abcd')

const buf16 = Buffer.from('123')

console.log('buf15',buf15)
console.log('buf16',buf16)

buf16.copy(buf15, 2)

console.log(buf15.toString())

/**
 * Buffer 裁剪缓冲区 类似字符串slice
 */

const buf17 = Buffer.from('zxcvbnm')

console.log('buf17',buf17)

console.log(buf17.slice(2,5).toString(),buf17.toString())

/**
 * Buffer 缓冲区长度
 */

const buf18 = Buffer.from('asdfghjkl')
console.log('buf18',buf18.length)