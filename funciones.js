function primera (num1, num2=1, num3=1){
    return num1+num2+num3;
}

console.log(primera(8,undefined,3));

function segunda ({num1, num2=1, num3=1}){
    return num1+num2+num3;
}

const objX = {
    num1:5
};

console.log(segunda(objX));