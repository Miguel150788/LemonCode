/*Crea una función que reciba una frase
en formato string y devuelva la palabra más larga. 
En caso de haber varias con longitud máxima que
devuelva siempre la primera. Ten en cuenta que 
consideramos una palabra a aquello que esté separado 
por espacios.*/


function Biggest_Word(str){
    var array = str.split(" ");
    console.log(array);
    let cadStr = "";
    for (let i = 0; i < array.length; i++) {
            if(cadStr.length < array[i].length){
                cadStr = array[i];
            }
    }
    return (cadStr);
}
console.log(Biggest_Word("Hola mundo no aasasasasassta NNmimimNN"))