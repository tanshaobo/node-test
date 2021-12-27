/*
 * @Author: tanshaobo
 * @Date: 2021-12-27 14:34:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2021-12-27 14:54:51
 * @Description: router
 * @FilePath: \nodeTest\index.js
 */

const server = require("./server")
const router = require("./router")

server.start(router.route)