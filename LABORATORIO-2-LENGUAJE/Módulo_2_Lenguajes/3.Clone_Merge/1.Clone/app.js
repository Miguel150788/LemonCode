//Se realiza una copia de un objeto pero de dos maneras diferentes.

const clone = (source) => copy = ({...source});

const clone2 = (source) =>{
    for(copy in source){
        copia = source;
    }
    return copia;
}

const source = {
    age: 15,
    name: "Miguel"
};

const copyFals = clone(source);
console.log("Esta es la original: ");
console.log(source);
console.log("Esta es la copia: ");
console.log(copyFals);

//Iterando con un bucle for in.
const copyFals2 = clone2(source);
console.log("Esta copia es recorrida con un for in")
console.log(copyFals2);