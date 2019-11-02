const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method === 'POST' && req.url =="/echo"){
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        })
            .on('end', () => {
                res.writeHead(200, {'Content-Type': 'text/plain'});
                body = Buffer.concat(body).toString();
                console.log(`Día ${body[0]}${body[1]} Mes ${body[03]}${body[04]} Año ${body[06]}${body[07]}${body[08]}${body[09]}`);
                A = 1;
                B = parseInt(body.slice([8])) + parseInt(Math.trunc(body.slice([8])/4));
                C = parseInt(body.slice([6]));
                aux=0;
                if (C%4 ===0){
                    aux=-1;
                    if(C%100 ===0){
                        aux=0;
                    if (C%400 === 0){
                        aux=-1;
                    }
                    }else{
                        aux=-1;
                    }
                }else{
                    aux=0;
                }
               
                if (aux===0){
                    C=0;
                }if (aux===-1) {
                    C=-1
                } else {
                    
                }
                res.end(body);
                
            })
        
        }else{
        res.statusCode = 404;
        res.end();
    }
});

server.listen(8001);
console.log('Servidor en la url http://localhost:8001');