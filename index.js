let the_http = require("http");
let the_fs = require("fs");
let the_port = process.env.PORT || 3000;
let the_host = "127.0.0.1";
let the_server = the_http.createServer((request, response) => {
  the_fs.readFile("index.html", (error, data) => {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(data);
    response.end();
  });
});
the_server.listen(the_port, () => {
  console.log(`your server is deployed at http://${the_host}:3000`);
});
