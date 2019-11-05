/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable func-names */
const express = require('express');

const app = express();

const { config } = require('./config/index');


const bisiesto = (year) => {
    aux=0;
    if (year%4 ===0){
        aux=-1;
        if(year%100 ===0){
            aux=0;
        if (year%400 === 0){
            aux=-1;
        }
        }else{
            aux=-1;
        }
    }else{
        aux=0;
    }
   
    if (aux===0){
        year=0;
    }if (aux===-1) {
        year=-1
    }
    return (year === -1) ?'El año es bisiesto':'El año no es bisiesto';
  }
  
  app.get('/bisiesto/:year', function(req, res) {
    let message = bisiesto(req.params.year);
    res.send(message);
  });

app.get('/json', (req, res) => {
    res.json({hello: 'world'});
});

app.listen(config.port, function (){
    console.log(`Listening http://localhost:${config.port}`);
});