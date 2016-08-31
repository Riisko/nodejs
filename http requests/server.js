var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HTML response</title>
      </head>
      <body>
        <h1> Serving HTML Text</h1>
        <p>${req.url}</p>
        <p>${req.method}</p>
      </body>
    </html>
  `);
}).listen(process.env.PORT);

console.log("Server is running on port: " + process.env.PORT);