//block 1 : 內建模組
const path = require('path')

//block 2 : 第三方模組
const express = require('express')

//block 3 : 自建模組


//////////////////////////////////////////////////
//block 4 : middle ware

const app = express();


app.use((req, res, next) => {
    console.log('Hello!');
    next()
});

app.use((req, res, next) => {
    console.log('World!');
    next()
});
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' }); //原生作法
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    res.status(200).sendFile(path.join(__dirname, 'views', 'index.html'));
});


app.get('/login', (req, res) => { //處理路由
    res.status(200) //回傳狀態碼
        .sendFile(path.join(__dirname, 'views', 'login.html')); //回傳檔案位置
});


app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});