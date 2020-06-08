console.log(process.argv)
// argv 是一个包含执行node操作时输入的参数的数组
// node process hello world
// result: [ 'C:\\Program Files\\***\\node.exe',  // 第一个参数是node库所在位置
//           'D:\\study\\node\\process',            // 第二个参数是执行文件的位置
//           'hello',                             // 后续就是输入的参数 本例中为hello和world
//           'world' ]

// 一般来讲我们不怎么关心前两个元素 可以这样
console.log(process.argv.slice(2))
// result: [ 'hello', 'world' ]

// 环境变量
console.log(process.env)
// 根据配置不同输出会有差异，只需要按需取某个值
console.log(process.env['USERNAME'])

// 上面两部分组合一下
// 执行node process USERNAME
const args = process.argv.slice(2)
console.log(process.env[args[0]])