const {EventEmitter: emisorEventos} = require('events');

//nuevo usuario eliminar usuario

const evento = new emisorEventos();

setInterval(()=>{evento.emit('data', Date.now());},500);

module.exports = {evento};