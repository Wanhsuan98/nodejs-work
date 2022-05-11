//block 1 : 內建模組
const path = require('path')

//block 2 : 第三方模組

//block 3 : 自建模組

const title = 'I am hello module'

const sayHello = () => {
    console.log('Hello!');
};
const sayGoodnight = () => {
    console.log('goodnight!');
};


// module.exports.say = sayHello;

// module.exports = {
//     sayHello: sayHello,
//     title: 'I am hello module'
// };
///////////////////////////////////////////////////

//block 4 : 開始執行
console.log('dirname', __dirname);

console.log('filename', __filename);

console.log(path.join(__dirname, 'index.js'));


module.exports = {
    sayHello,
    sayGoodnight,
    title: 'I am hello module'
};

console.log('module', module);
