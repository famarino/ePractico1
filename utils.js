const fs = require('fs');

const obtenerArchivo = ({path}) => 
    new Promise ((resolve, reject) =>
                fs.readFile(path,
                    (err, info)=>{
                        if(err){
                            reject('error');
                        }
                        resolve(info);
                    }));

module.exports={obtenerArchivo};