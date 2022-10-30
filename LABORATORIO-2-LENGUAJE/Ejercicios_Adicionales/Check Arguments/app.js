/*Es muy habitual en javascript, 
al recibir argumentos de una función,
 querer asegurarnos de que no sean 
 undefined o null. En este ejercicio 
 debes convertir el código de abajo 
 en algo equivalente
 pero más compacto y expresivo. */


let f = (input) => result= input === undefined?"Unknown": input === null?"":input;

let str= "Hola";
let str1 = null;
let str2 = undefined;
console.log(f(str));
console.log(f(str1));
console.log(f(str2));