module.exports={
    sun(a,b){
        return a+b
    },
    init ({ option ='name',param='demo'}){
        console.log('项目初始化', '配置名字:' + option, '项目名:' + param)
    }
}