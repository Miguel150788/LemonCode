//La funcion es una reproduccion de la funcion Array.include();


function includes(array, value) {
    valor = false;
    for (let i = 0; i < array.length; i++) {
        valor = value === array[i]?true:false;
    }
    return valor;
  }
console.log(includes([1, 2, 4], 4));