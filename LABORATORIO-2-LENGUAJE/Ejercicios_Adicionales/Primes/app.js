/*Realizamos unas funciones para comprobar si desde num (X) hasta num (Y),
si son numeros primos o no,
realizamos dos maneras diferentes de comprobar.
 */
//Primera opcion.
const showPrimes=(from, to)=> {
    const array = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    for(from; from <= to; from++){
        let j = 0;
        for(let i = 0; i<array.length;i++){
            from===array[i]?j=1:false;
        }
        j===1?console.log(from, "Es primo"):console.log(from, "No es primo");
    }
}

showPrimes(1,10);
//Segunda opcion, tambien devilvemos los numeros en array que son primos.
const numPrim0= (from, to)=>{
    let numPrimoArray=[];
    for(; from<to;from++){
        fals = true;
        primo(from)?numPrimoArray.push(from):fals = false;
        checkNum(fals, from);
    }
    return numPrimoArray;
}
const primo = (from)=>{
    for (let i = 2; i < from; i++) {
        if (from % i === 0) 
            return false;
    }
  return from !== 1;
}
const checkNum = (fals,from)=>fals===true?console.log(from, "Es primo"):console.log(from, "No es primo");
const numeros_primos = numPrim0(1,100)
console.log(numeros_primos);