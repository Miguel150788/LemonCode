
/*Realizamos la misma operacion de copiar
y sobreescribir si son el mismo nombre*/

const  a = {name: "Maria",
    surname: "Ibañez",
    country: "SPA"};

const b = {name: "Luisa",
    age: 31,
    married: true};

    function merge(a,b){
    const new1 = { 
        ...b,
        ...a};
    return new1;
};

console.log(merge(a,b));

const merge2 =(a,b)=> Object.assign(b, a);
console.log(merge2(a,b));