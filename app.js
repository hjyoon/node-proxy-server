import http from "http";

const host = "localhost";
const port = 10101;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(JSON.stringify({ message: "ok" }));
      break;
    case "/upload":
      res.writeHead(501);
      res.end(JSON.stringify({ message: "Not Implemented" }));
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ message: "Resource not found" }));
  }
});

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
