import http from ('http');
const server = http.createServer((req, res) => {
    res.writeheHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is my page');

});
server.listen(400, () => console.log('Server is running at http://localhost:400'));