//block 1 : 內建模組
const path = require('path')

//block 2 : 第三方模組
const express = require('express');
const bodyParser = require('body-parser');

//block 3 : 自建模組

app.use(authRputes);

//////////////////////////////////////////////////
//block 4 : middle ware

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));


// app.use((req, res, next) => {
//     console.log('Hello!');
//     next()
// });

// app.use((req, res, next) => {
//     console.log('World!');
//     next()
// });

app.get('/', (req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' }); //原生作法
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    res.status(200).render('index', {
        path: '/',
        pageTitle: 'book your books :)',
        products
    });
});


// app.get('/login', (req, res) => { //處理路由
// res.status(200) //回傳狀態碼
// .render('login', {
//     path: '/login',
//     pageTitle: 'sign in'
// }); //回傳檔案位置
// });

// app.post('/login', (req, res) => {
//     const { email, password } = req.body; //解構附值寫法
//     if (email && password) {
//         res.redirect('/');
//     } else {
//         console.log('欄位尚未填寫完成！')
//     }
// });

// app.post('/logout', (req, res) => {
//     res.redirect('/login')
// })


app.get('*', (req, res) => {
    res.status(404).render('404', {
        path: '*',
        pageTitle: '404  page is not found!!!'
    });
}); //4*代表萬用路由 -> 要放在最後面 才不會讓首頁或login葉面也被偵測為404


app.listen(3000, () => {
    console.log('Web Server is running on port 3000');
});

const products = [
    {
        title: '四月是你的謊言 1',
        price: 80,
        description: '有馬公生的母親一心想把有馬培育成舉世聞名的鋼琴家，而有馬也不負母親的期望，在唸小學時就贏得許多鋼琴比賽的大獎。11歲的秋天，有馬的母親過世，從此他再也聽不見自己彈奏的鋼琴聲，沮喪的他也只好放棄演奏，但在14歲那年，經由兒時玩伴的介紹，有馬認識了小提琴手宮園薰，並被薰的自由奔放吸引，沒想到薰竟開口邀請公生在比賽時擔任她的伴奏…',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/25/0010622563.jpg&v=52dcfd21&w=348&h=348'
    },
    {
        title: '四月是你的謊言 2',
        price: 80,
        description: '公生答應在二次預賽中擔任小薰的鋼琴伴奏。比賽一開始公生還能順利彈琴，但在中途又再次因為聽不見鋼琴的聲音而停手。沒想到小薰也跟著停止演奏、等候公生。原本心灰意冷的公生因此重新振作，與小薰合奏出驚人的樂章…......',
        imageUrl: 'https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/31/0010623172.jpg&v=52dcfd21&w=348&h=348'
    },
    {
        title: '四月是你的謊言 3',
        price: 80,
        description: '在小薰的逼迫之下，公生不得不參加音樂比賽。為了參加比賽，公生從早到晚不停的練習，但就是無法彈奏出屬於自己的巴哈與蕭邦。此時，公生的面前出現兩位強勁的對手-相座武士與井川繪見，他們曾經是公生的手下敗將，一心想在比賽中擊敗公生雪恥。先上台演奏的武士彈奏出令全場喝采的激昂樂章…',
        imageUrl: 'https://im2.book.com.tw/image/getImage?i=https://www.books.com.tw/img/001/062/76/0010627615.jpg&v=5315ab5f&w=348&h=348'
    },
];