const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.on("request", (requestMsg, response) => {
    if (requestMsg.url === '/') {
        response.writeHead(200, "OK", {"Content-Type": "text/html; charset=utf-8"});
        res.end('Root')
    } else if (requestMsg.url === '/img') {
        const readStream = fs.createReadStream('./img/1.jpg')
        response.writeHead(200,"OK",{
            "Content-Type":"image/jpeg",
            "Cache-Control":"max-age=5"
        })
        readStream.pipe(response);
    } else if (requestMsg.url === '/news'){
        const readStream = fs.createReadStream('./news/feed.json')
        response.writeHead(200,"OK",{
            "Content-Type":"image/jpeg",
            "Cache-Control":"no-store"
        })
        readStream.pipe(response);
    } else {
        response.writeHead(200,"OK",{
            "Content-Type":"image/jpeg",
            "Cache-Control":"no-cache"
        })
        readStream.pipe(response);
    }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

