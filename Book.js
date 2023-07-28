
class Book{
    
    constructor(googleResponseBook){
        this.id = googleResponseBook.id
        this.title = googleResponseBook.volumeInfo?.title;
        this.authors = googleResponseBook.volumeInfo?.authors  ?? "Informaton manquante";
        this.description = googleResponseBook.volumeInfo?.description?.substr(0, 200)  ?? "Informaton manquante";
        this.image= googleResponseBook.volumeInfo?.imageLinks?.smallThumbnail ? googleResponseBook.volumeInfo?.imageLinks.smallThumbnail:"images/unavailable.png","width =100";
    }
    
   
}



