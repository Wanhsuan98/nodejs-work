// hello.js
const path = require('path')

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

console.log('dirname', __dirname);

console.log('filename', __filename);

console.log(path.join(__dirname, 'index.js'));


module.exports = {
    sayHello,
    sayGoodnight,
    title: 'I am hello module'
};

console.log('module', module);
