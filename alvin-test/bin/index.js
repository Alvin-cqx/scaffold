#!/usr/bin/env node
const lib = require('alvin-test-lib')

let  config = require('../package.json')
// 自定义脚手架命令 alvin-test init
// 通过 npm link 安装包进行在线调试
// 例如命令:alvin-test init --name test-name
// 可以通过node require('process').argv 获取到你输入脚手架后面命令
const argv = require('process').argv
// argv[2] 解析第一个命令 init,然后在调试lib包添加命令的方法
// init({ option, param }){
//     console.log('项目初始化', '配置' + option, '参数' + param)
// }
const command = argv[2]

if (command.startsWith('--') || command.startsWith('-')) {
    // let version = command.replace(/--|-g/, '')
    console.log('版本号:', config.version)
} else {
    // 截取命令行后面的参数 --name test-name
    const options = argv.slice(3)
    // 获取第一个 name  第二个参数 test-name
    let [option, param] = options
    option = option.replace('/--/', '')
    // 传入
    if (lib[command]) {
        lib[command]({ option, param })
    } else {
        console.log('请输入命令')
    }
}
