const http = require ('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Moiz Steenhuis, Web Development, January-Feburary 2023');
        res.end();
    }

    if (req.url === '/api/genres'){
        res.write(JSON.stringify([1,2,3,4,5,6,7]));
        res.write('Here are the genres availible at MUSIC APP');
        res.end();
    }
});

server.listen(3000);
console.log("Listening on port 3000...");