const http = require("http");
const port = 3000;
const server = http.createServer((req,res) => {
    if (req.url == "/home"){
        res.writeHead(200, {"Content-type": "text/html"});
        res.sendDate("<h1>HOME</h1>")
    }
});

server.listen(port, () => console.log(`Servidor rodando com http na porta ${port}!`));