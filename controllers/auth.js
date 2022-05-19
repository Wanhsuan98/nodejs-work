const getLogin = (req, res) => { //處理路由
    res.status(200) //回傳狀態碼
        .render('login', {
            path: '/login',
            pageTitle: 'sign in'
        }); //回傳檔案位置
};

const postLogin = (req, res) => {
    const { email, password } = req.body; //解構附值寫法
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
};

const postLogout = (req, res) => {
    res.redirect('/login');
};

module.exports = {
    getLogin,
    postLogin,
    postLogout
}