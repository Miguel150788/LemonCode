let f = (input) => result= input === undefined?"Unknown": input === null?"":input;

let str= "Hola";
let str1 = null;
let str2 = undefined;
console.log(f(str));
console.log(f(str1));
console.log(f(str2));