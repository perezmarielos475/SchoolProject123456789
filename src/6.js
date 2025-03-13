const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <h1>Welcome to SchoolProject123456789!</h1>
      <p>This is a simple school project for a specific course and academic year.</p>
    `);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end(`<h1>Page not found</h1>`);
  }
}).listen(3000);
console.log('Server running on port 3000');
