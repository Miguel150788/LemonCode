/*Revertimos una cadena de texto palabra a palabra.
Tenemos la misma opción de dos maneras direrentes
*/
const reverseText= (text)=> {
    let arr = str.split(' '); 
    let invertString = arr.reverse();
    let unirString = invertString.join(" ");
    return unirString;
  }
const inverText=(text)=> text.split(" ").reverse().join(" ");


let str = 'Leon Caballo Iguana Lobo';
let str1 = 'Leon Caballo Iguana Lobo';

console.log("Original;", str);
console.log("Copia ",reverseText(str));
console.log("Copia", inverText(str1));