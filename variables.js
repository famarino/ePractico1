let x = 8;
var y = 5;
let indefinido='8';

x='ddd';

console.log(typeof indefinido);

var objeto = {
    edad:35,
    ciudad:'x',
    otro:{
        y:'1'
    }
};

console.log(objeto.otro.y);

let [a,b] = ['dia', 20];
console.log(a);

let arreglo = ['dia', 20];
console.log(arreglo[1]);

let arreglo2 = [];
arreglo2[0]=0;
console.log(arreglo2[0]);

arreglo2[1]=1;
console.log(arreglo2[1]);

let arreglo3 = [...arreglo,...arreglo];
console.log(arreglo3);


a= 'hola';
b= 'fabian';

console.log(a+' '+b);

c=`hola
como estas?`;

console.log(c);
