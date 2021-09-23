//versionn implementada en express

const express = require('express');
const http = require('http');
const axios = require('axios');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.get('/pkm', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon').then(
         (resApi)=> {res.status(200).render('indexPkms',{pkmons: resApi.data.results}); }
     ).catch(
         (err)=> {console.error(err)}
     ).finally(
         ()=>{console.log('termino')}
     );
});

app.get('/pkm/:idName', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon/'+req.params.idName).then(
      (resApi)=> {res.status(200).render('indexPkm',{pkmon: resApi.data}); }
     ).catch(
         (err)=> {console.error(err)}
     ).finally(
         ()=>{console.log('termino')}
     );
});

http.createServer(app).listen(8003,
    ()=>{
        console.log('inicio el puerto');
    });