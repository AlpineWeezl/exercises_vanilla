import http from 'http';

const requestListener = (request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
};

const server = http.createServer(requestListener);

server.listen(8085);
console.log("Server running at http://127.0.0.1:8085/");