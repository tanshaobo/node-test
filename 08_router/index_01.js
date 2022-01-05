/*
 * @Author: tanshaobo
 * @Date: 2021-12-27 14:34:12
 * @LastEditors: tanshaobo
 * @LastEditTime: 2022-01-05 13:46:57
 * @Description: router
 * @FilePath: \nodeTest\08_router\index_01.js
 */

const server = require("./server")
const router = require("./router")

server.start(router.route)