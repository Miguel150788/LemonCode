

//Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:



const values =(obj)=>{
    let recup = [];
    for(text in obj){
        recup += obj[text];
        recup += ", "
    }
    recup = recup.substring(0, recup.length-2)
    return recup.split(", ");
  }

const prueba = (obj)=> Object.values(obj);


console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" }));
console.log(prueba({ id: 31, duration: 310, name: "long video", format: "mp4" }));