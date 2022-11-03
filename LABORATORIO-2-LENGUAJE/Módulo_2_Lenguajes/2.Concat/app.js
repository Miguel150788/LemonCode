//1. Contatenamos dos arrays a y b una seguida de la otra.
//2. Concatenamos multiples arrays con el metodo concat();


const concat = (a, b) =>  week = [...a, ...b];

let nuevo_array= (a, b, c, d) => daysWeek.concat(b, c, d);
let new_array= (param1,param2, ...param) => param1.concat(param2, ...param);

 const daysWeek = ["Lunes", "Martes", "Miercoles", "jueves", "viernes"];
 const daysWeekend = ["Sabado", "Domingo"];
 const Verano = ["Julio", "Agosto"];
 const primavera = ["Abril", "Marzo"];

 //console.log(concat(daysWeek,daysWeekend));

 console.log(nuevo_array(daysWeek,daysWeekend, Verano, primavera));
 console.log(new_array(daysWeek,daysWeekend, Verano,daysWeek, daysWeekend, Verano));
