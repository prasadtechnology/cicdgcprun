const http = require('http');
const server = http.createServer((req,res) => {
   console.log('got a new connection ..');
   res.end('Hello There i am from the container');
});
server.listen('8080',() => console.log('Listening on 8080'));
