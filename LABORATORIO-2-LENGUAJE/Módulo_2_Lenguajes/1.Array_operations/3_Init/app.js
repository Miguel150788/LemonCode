const init = (array) => {
    const arrayNew = [...array];
    arrayNew.pop();
    return arrayNew;
}

const array = ["Hola", 3, 4, 5, 5];
console.log("Array original",array);
console.log("Retorno de array modificada new" ,init(array));