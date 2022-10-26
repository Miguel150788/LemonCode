
function clone (source){
    const copy = {...source}
    return (copy);
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
