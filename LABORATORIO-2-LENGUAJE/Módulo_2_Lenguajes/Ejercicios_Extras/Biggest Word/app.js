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