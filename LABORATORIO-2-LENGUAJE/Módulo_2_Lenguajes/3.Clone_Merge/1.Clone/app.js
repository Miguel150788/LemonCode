//Se realiza una copia de un objeto pero de dos maneras diferentes.

const clone1 = (source) => copy = ({...source});

const clone2 = (source) => copia = source;

const source = {
    age: 15,
    name: "Miguel"
};

const copyFals = clone1(source);
console.log("Esta es la original: ");
console.log(source);
console.log("Esta es la copia: ");
console.log(copyFals);
console.log("Esta copia es otra funcion diferente")
console.log(clone1(source));