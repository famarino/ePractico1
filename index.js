//version de ejecucion implementada en js

const http = require('http');
const server = http.Server();

const {obtenerArchivo}= require('./utils');

server.on('request',
async (req, res)=>{
    if(req.url == '/'){
        try {
            const info = await obtenerArchivo({path: './views/index.html'});
            res.end(info);    
        } catch (err) {
            res.end('error');
        }
    }
});


server.listen(8001);