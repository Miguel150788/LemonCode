/*Suponiendo objetos sin anidamiento
 y con propiedades primitivas, 
 construye una función que compare 
 el contenido de 2 objetos.
*/


//Apartado A
var user = { name: "María", age: 30 };
var clonedUser = { name: "María", age: 30 };

console.log(user === clonedUser); // false

function isEqual(a, b) {
 return (user.name === clonedUser.name);
}

console.log(isEqual(user, clonedUser)); // true

// Apartado B

var user = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  var clonedUser = {
    name: "María",
    age: 30,
    address: { city: "Málaga", code: 29620 },
    friends: ["Juan"],
  };
  
  function isDeepEqual(a, b) {
    return typeof user === typeof clonedUser;
  }
  
  console.log(isDeepEqual(user, clonedUser)); // true