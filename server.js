//versionn implementada en express

const express = require('express');
const http = require('http');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.get('/:id?', (req, res) => {
    console.log(req.body);
  res.status(200).render('index');
});

app.post('/:type', (req, res) => {
    console.log(
        "query: ", req.query,
        "\n body: ", req.body,
        "\n header: ", req.headers,
        "\n params: ", req.params,
        );
  res.status(200).render('index');
});

http.createServer(app).listen(8002,
    ()=>{
        console.log('inicio el puerto');
    });