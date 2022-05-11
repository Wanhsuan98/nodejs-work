//block 1 : 內建模組
const path = require('path')
const http = require('http')


//block 2 : 第三方模組

//block 3 : 自建模組

//const hello = require('./hello')

//////////////////////////////////////////////////
//block 4 : 開始執行

const server = http.createServer((req, res) => {
    //console.log('第一個參數是瀏覽器對 web server 的 request', req);
    //console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    //console.log('req url:', req.url);
    if (req.url === '/') {
        //console.log('login page')
        return res.end('this is home page');
    }
    if (req.url === '/login') {
        //console.log('login page')
        return res.end('this is login page');
    }

    res.end('page not found');
});

server.listen(3000, () => {
    console.log('running server on port 3000');
});
//console.log(path.join(__dirname, 'index.js'));


// hello.sayHello();
// console.log(hello.title)
//console.log('module', module);
