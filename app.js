// 第一個區塊 內建模組
const path = require('path');

// 第二個區塊 第三方模組(套件)
const express = require('express');
const bodyParser = require('body-parser'); //解析POST的中介軟體
const session = require('express-session');
const connectFlash = require('connect-flash');

// 第三個區塊 自建模組
const database = require('./utils/database');



const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');
const errorRoutes = require('./routes/404');
const Products = require('./models/products');
const User = require('./models/user');
////////////////////////////////////////////////////////////////

const app = express();
const oneDay = 1000 * 60 * 60 * 24;
const port = 3000;


// middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'sessionToken',  // 加密用的字串
    resave: false,   // 沒變更內容是否強制回存
    saveUninitialized: false,  // 新 session 未變更內容是否儲存
    cookie: {
        maxAge: oneDay // session 狀態儲存多久？單位為毫秒
    }
}));


app.use(connectFlash());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.locals.pageTitle = 'ZTMY MART'
    res.locals.path = req.url;
    res.locals.isLogin = req.session.isLogin || false;
    next();
});
// app.use((req, res, next) => {
//     console.log('Hello!');
//     next();
// });

// app.use((req, res, next) => {
//     console.log('World!');
//     next();
// });


app.use(authRoutes);
app.use(shopRoutes);
app.use(errorRoutes);



database
    // .sync()
    .sync({ force: true })
    .then((result) => {
        User.create({ displayName: 'Admin', email: 'admin@skoob.com', password: '11111111' })
        Products.bulkCreate(products);
        app.listen(port, () => {
            console.log(`Web Server is running on port {$port}`);
        });
    })
    .catch((err) => {
        console.log('create web server error: ', err);
    });

const products = [
    {
        title: 'ZTMY x 花丸 x 味噌湯',
        price: 300,
        description: 'ZTMY x 花丸 x 味噌湯',
        imageUrl: 'https://reni-ec-pro.s3-ap-northeast-1.amazonaws.com/product/ZMY052/a8b2578527edd8b37ef1871382e4763ce9e23053172195005f5c93227ee5c1f3.jpg?1650297445'
    },
    {
        title: 'ZTMY x BLACK x TEE',
        price: 80,
        description: 'ZTMY x BLACK x TEE',
        imageUrl: 'https://reni-ec-pro.s3-ap-northeast-1.amazonaws.com/product/ZMY048/608fa61f80f88eb33b1f2b6e6d55b2c9f80a45878e38fbed2f360e4bb99897bd.jpg?1650361528'
    },
    {
        title: 'UNIGURI Cushion',
        price: 80,
        description: 'UNIGURI Cushion',
        imageUrl: 'https://reni-ec-pro.s3-ap-northeast-1.amazonaws.com/product/ZMY006/91395fc1b8e3e3d6d59fcea88d876471ab361378eb5dce9b259bad2f2a1d371d.jpg?1650369037'
    },
    {
        title: 'ZTMY x SILVER x RING',
        price: 80,
        description: 'ZTMY x SILVER x RING',
        imageUrl: 'https://reni-ec-pro.s3-ap-northeast-1.amazonaws.com/product/ZMY033/671069e0c283b76be53230b00c7a90925dd2a43f4fa90587b378a34602b3d7b9.jpg?1650360236'
    },
    {
        title: 'ZTMY x BLACK x TEE',
        price: 80,
        description: 'ZTMY x BLACK x TEE',
        imageUrl: 'https://reni-ec-pro.s3-ap-northeast-1.amazonaws.com/product/ZMY048/608fa61f80f88eb33b1f2b6e6d55b2c9f80a45878e38fbed2f360e4bb99897bd.jpg?1650361528'
    },
    {
        title: 'NIRA SANDALS',
        price: 80,
        description: 'NIRA SANDALS',
        imageUrl: 'https://reni-ec-pro.s3-ap-northeast-1.amazonaws.com/product/ZMY015/05f3c9d3df1b54977f21054240fcde133d5324e4584a694b1d009ea2900c68d5.jpg?1650369255'
    },
];