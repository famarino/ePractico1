const datos = [1, 2, 3, 4, 5];

console.log("\nFor 1");
for(let i=0; i<datos.length;i++){
    console.log(datos[i]);
}

console.log("\nFor 2");
for(let dato of datos){
    console.log(dato);
}

console.log("\nFor 3");
datos.forEach(function(dato1){console.log(dato1);})

console.log("\nFor 4");
for(let j in datos){
    console.log(datos[j]);
}

console.log("\nFor 5");
datos.forEach((dato1)=>{console.log(dato1)});

console.log("\nReduce");
const result = datos.reduce((previo, actual) => previo + ' ' + actual);
console.log(result);
