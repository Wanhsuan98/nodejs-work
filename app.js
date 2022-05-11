//block 1 : 內建模組
const path = require('path')

//block 2 : 第三方模組
const cowsay = require('cowsay');

//block 3 : 自建模組

//const hello = require('./hello')

//////////////////////////////////////////////////
//block 4 : 開始執行
console.log(cowsay.say({
    text: "I'm John Cecow",
    e: "TT",
    T: "U "
}));
//console.log(path.join(__dirname, 'index.js'));


// hello.sayHello();
// console.log(hello.title)
//console.log('module', module);
