// hello.js
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

module.exports = {
    sayHello,
    sayGoodnight,
    title: 'I am hello module'
};