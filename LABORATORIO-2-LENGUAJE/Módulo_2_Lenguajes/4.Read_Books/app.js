
const books = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
    ];

    const isBookRead = (books, titleToSearch)=>{
        for( var elemen of books){
            if(elemen.title == titleToSearch){

                console.log(elemen.title, elemen.isRead);
                break;
            }
        }
        if(elemen.title != titleToSearch){
            console.log(titleToSearch,false);
        }
            
        
    }
isBookRead(books,'Devastación');