// exports.sayHi = function sayHi(name){
//     console.log("How are you today, ", name, "?")
// }

function sayHi(name){
    console.log("How are you today, ", name, "?")
}

function sayHi2(name){
    console.log("How are you today, ", name, "?")
}

// module.exports = sayHi
// module.exports = sayHi2

// module.exports = {
//     sayHi,
//     sayHi2
// }

exports.sayHi = sayHi
exports.sayHi2 = sayHi2