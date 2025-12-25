const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI/CD Pipeline Deployed Successfully");
});

server.listen(3000);
