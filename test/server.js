let http = require("http");
let fs = require("fs");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    fs.readFile("./test.html", (err, data) => {
      if (err) {
        res.end("Error reading file...");
      } else {
        res.end(data);
      }
    });
  })
  .listen(5000);

console.log("Server running at http://127.0.0.1:5000/");
