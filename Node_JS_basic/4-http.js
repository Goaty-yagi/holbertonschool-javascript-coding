const http = require('http');

const PORT = 1245;
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello Holberton School!\n');
  res.end();
})

app.listen(PORT);
module.exports = app;
