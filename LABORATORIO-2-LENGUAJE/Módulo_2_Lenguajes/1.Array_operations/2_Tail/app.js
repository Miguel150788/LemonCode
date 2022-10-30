
const tail = (array) =>{
    const [primero, ...resto] = array;
    return (resto);
};

const array = [ "Hola", "Que" , "Tal", "estas"];

console.log(tail(array));