const http = require('http');

// const greet = require('./greeting.js');
// greet.sayHi("Armstrong")

// create simple server
// const reqListener = (req, res) =>{
//     // console.log('Request: ', req)
//     // console.log('Response: ', res)
//     console.log('Listening for connections')
//     req.setheader("text/plain")
//     res.end("Hi there")
// }

const server = http.createServer((req, res) => {
    res.end("Hi there")
})

http.get('http://localhost:3000/', (res) => {
    console.log('res***8', res)
})


server.listen(3000)
