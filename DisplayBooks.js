function displayBooks(books) {
    let refreshDisplayBook = document.getElementById("displayBook")
    refreshDisplayBook.className = "displayBook"
    refreshDisplayBook.innerHTML="";
    if (books === 0){
        let noDisplayBook = document.getElementById("displayBook")
        noDisplayBook.className = "nobook"
        noDisplayBook.innerHTML="";
        
        const element = createElement("element");
        const aucunLivre = createElement("p", "Aucun livre n'a été trouvé");
        
        content.appendChild(noDisplayBook);
        noDisplayBook.appendChild(element);
        element.appendChild(aucunLivre);

    }else{
        for (let i = 0; i < books.length; i++) {
        const book = books[i];
 
        displayBook(book,false)
        }
    }
}

function displaySessionStorage() {
    let refreshSessionStorageBook = document.getElementById("sessionStorageBook")
    refreshSessionStorageBook.innerHTML="";

    for (let i = 0; i < sessionStorage.length; i++) {
        let bookSessionStorageKey = sessionStorage.key(i);
        let bookSessionStorage = sessionStorage.getItem(bookSessionStorageKey);
        const book = JSON.parse(bookSessionStorage);

        displayBook(book,true)     
    }
}

function displayBook(book,isBookMark){
    const parentElement = isBookMark ? document.getElementById("sessionStorageBook") :document.getElementById("displayBook"); 
    
    const element = createElement("element");
    element.className = "newElement";

    const btn = createElement("button");
    btn.type = "submit";
    
    if (isBookMark){
        btn.className = "fa fa-trash";
        btn.addEventListener("click", () => {
            sessionStorage.removeItem(book.id);
            displaySessionStorage();    
        });
        
    }else{
        btn.className = "fa-solid fa-bookmark";
        btn.addEventListener("click", () => {
            BookManipulator.setBookSessionStorage(book);
        });
    }
    let bookDescription;
    if(book.description === "Information manquante"){
        bookDescription = book.description
    }else{
        bookDescription = book.description + "..."
    }
    const id = createElement("p", "Id : " + book.id);
    const title = createElement("p", "Titre : " + book.title);
    const authors = createElement("p", "Auteur : " + book.authors[0]);
    const description = createElement("p", "Description : " + bookDescription);
    const image = createElement("img");
    image.src = book.image
    const myDiv = document.createElement("div");
    const boxImage = document.createElement("div")
    boxImage.id = "centerImage"
    
    parentElement.appendChild(element);
    element.appendChild(myDiv)
    myDiv.appendChild(title);
    myDiv.appendChild(btn);
    element.appendChild(id);
    element.appendChild(authors);
    element.appendChild(description);
    element.appendChild(boxImage)
    boxImage.appendChild(image);
}

function displaySectionDisplayBook(){
    let content = document.querySelector("#content");
    let sectionDisplayBook = document.createElement("section");
    sectionDisplayBook.className = "displayBook";
    sectionDisplayBook.id = "displayBook"
    
    content.appendChild(sectionDisplayBook);    
}

function displaySectionDisplaySessionStorageBook(){
    let content = document.querySelector("#content");
    let sectionDisplaySessionStorageBook = document.createElement("section");
    sectionDisplaySessionStorageBook.className = "displayBook";
    sectionDisplaySessionStorageBook.id = "sessionStorageBook";
    const pochlist = document.querySelector("#content h2");

    content.appendChild(pochlist);
    content.appendChild(sectionDisplaySessionStorageBook);    
}








