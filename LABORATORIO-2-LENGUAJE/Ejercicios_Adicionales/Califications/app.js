//Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
    David: 8.25,
    Maria: 9.5,
    Jose: 6.75,
    Juan: 5.5,
    Blanca: 7.75,
    Carmen: 8,
  };
//Realizo la misma funcion de dos maneras diferentes, llevando las dos a la misma solucion.
function printAverage(classResults) {
    console.log(classResults);
    let num = 0;
    let media = 0;
    let i = 0;
    for (const property in classResults) {
       num += classResults[property];
       i++;
    }
    console.log("Nota media del grupo: " + (media = num/i));
    mediaClasificacion(media);
    ;
  }
  //Vemos la media de clasificacion;
  let mediaClasificacion = (media) => {
    if(media == 10)console.log("Matricula de Honor");
    else if(media < 10 && media >9) console.log("Sobresaliente");
    else if(media < 9 && media >7)console.log( "Notable");
    else if(media < 7 && media >6)console.log( "Bien");
    else if(media < 6 && media >5) console.log("Suficiente");
    else if(media < 5 && media >4) console.log("Insuficiente");
    else if(media < 4) console.log("Por debajo de 4");
  };

  printAverage(eso2o);//llamo a la funcion.
  console.log(Object.values(eso2o));//lo paso como una Array
  prueba(eso2o);
  function prueba(eso2o){
    let array = Object.values(eso2o);
    var element = 0
    let i;
    for (i = 0; i < array.length; i++) {
        element +=array[i];
    }
    let media = element / i;
    console.log("La media de las notas es: " + media);
    mediaClasificacion(media);
  }