
const User = require('../models/user');

const getLogin = (req, res) => { //處理路由
    const errorMessage = req.flash('errorMessage')[0];
    res.status(200) //回傳狀態碼
        .render('auth/login', {
            pageTitle: 'ZTMY MART sign in',
            errorMessage

        }); //回傳檔案位置
};

const getSignup = (req, res) => {
    const errorMessage = req.flash('errorMessage')[0];
    res.status(200)
        .render('auth/signup', {
            pageTitle: 'Signup',
            errorMessage
        });
}

const postLogin = (req, res) => {
    const { email, password } = req.body; //解構附值
    User.findOne({ where: { email } })
        .then((user) => {
            if (!user) {
                req.flash('errorMessage', '錯誤的 Email 或 Password。');
                return res.redirect('/login');
            }
            if (user.password === password) {
                console.log('login: 成功');
                req.session.isLogin = true;
                return res.redirect('/')
            }
            req.flash('errorMessage', '錯誤的 Email 或 Password。');
            res.redirect('/login');
        })
        .catch((err) => {
            console.log('login error:', err);
        });
};


const postSignup = (req, res) => {
    const { displayName, email, password } = req.body;
    User.findOne({ where: { email } })
        .then((user) => {
            if (user) {
                req.flash('errorMessage', '此帳號已存在！請使用其他 Email。')
                return res.redirect('/signup');
            } else {
                return User.create({ displayName, email, password });
            }
        })
        .then((result) => {
            res.redirect('/login');
        })
        .catch((err) => {
            console.log('signup_error', err);
        });
}




const postLogout = (req, res) => {
    req.session.destroy((err) => {
        console.log('session destroy() error: ', err);
        res.redirect('/login');
    });
};


module.exports = {
    getLogin,
    getSignup,
    postLogin,
    postLogout,
    postSignup,
}