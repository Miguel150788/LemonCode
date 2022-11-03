
const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];

    const isBookRead = (books, titleToSearch)=>{
        for( var elemen of books){
            if(elemen.title == titleToSearch){

                console.log(elemen.title, elemen.isRead);
                return elemen.isRead;
                break;
            }
        }
        if(elemen.title != titleToSearch){
            console.log(titleToSearch,false);
            return false;
        } 
    }
let prueba = isBookRead(books,'Devastación');

//Se realiza con la comprobacion, si se cumple las dos devuelve true si no false.

const isBookRead2 = (books,title) =>books.some(book => book.title ===title && book.isRead===true)

console.log("Esta prueba se realiza con un for: ", prueba);
console.log(`Esta prueba se hace con find: `, isBookRead2(books, "Harry Potter y la piedra filosofal"))
