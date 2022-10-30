



//Retorna modo array;
const subsets = (word)=>{
    let strDiv = "";
    for(let i = 0; i < word.length -1; i++){
        let j = 1 + i;
        for(; j < word.length;j++){
            strDiv += word[j];
        }
        (i<j-2)?strDiv+=",":" ";
    }
    return strDiv.split(",");
  }

  //Retorna en modo String;
  const subsets1 = (word)=>{
    let strDiv = "";
    for(let i = 0; i < word.length -1; i++){
        let j = 1 + i;
        for(; j < word.length;j++){
            strDiv += word[j];
        }
           (i<j-2)?strDiv+=", ":" ";
    }
    return strDiv.split();
  }
  //Sin usar Bucle for/do/while

  const subsets2 = (txt)=>{
    const repeat = Array(txt.length).fill([txt]).flat();
    i = 0;
    strNew = "";
    repeat.forEach(element => (strNew +=","+ element.slice(i = i+1)));//foreach y cada elemento le quitamos la primera letra.
    str = strNew.substring(1, strNew.length-1); //Eliminamos el primer elemento y el ultimo
    return str.split();
  }

console.log(subsets("Menssage"));
console.log(subsets1("Menssage"));
console.log(subsets2("Menssage"));