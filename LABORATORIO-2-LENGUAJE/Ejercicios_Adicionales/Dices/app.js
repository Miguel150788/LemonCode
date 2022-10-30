function getRandomInt() {
    let max1 = 6;
    let max2 = 6;
    max1 = Math.ceil(Math.random() * max1);
    max2 = Math.ceil(Math.random() * max2);
    console.log(max1, max2);
    let tirada = max1 === 6 && max2 === 6?"Tira de Nuevo":"Siguiente jugador";
    console.log(tirada);
    return (max1, max2);
  }

var dados = getRandomInt();
