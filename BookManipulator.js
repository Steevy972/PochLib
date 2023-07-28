class BookManipulator {
    static async searchBook(title, authors) {
        const book = await GoogleApiCaller.searchByNameTitleAndAutor2(title, authors);
        const listBook = [];

        if (book.totalItems === 0) {
            return 0
        }else {
            for (let i = 0; i < book.items.length; i++) {
                listBook.push(new Book(book.items[i]));
            }

            return listBook;
        }
    }

    static async setBookSessionStorage(book) {
        if (sessionStorage.getItem(book.id) == null) {
            let bookSelect = book.id;
            let bookValue = JSON.stringify(book);
            sessionStorage.setItem(bookSelect, bookValue);
            
            displaySessionStorage();
            
        }else {
            alert('Vous ne pouvez ajouter deux fois le même livre');
        }
    }
    
}
