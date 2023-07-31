createButtonAddBook();
displaySectionDisplaySessionStorageBook()
displaySessionStorage();

function createButtonAddBook() {
    displayLogo()
    const button = createElement("button", "Ajouter un livre");
    button.type = "button";
    button.className = "buttonVert";
    button.addEventListener("click", function () {
        button.remove();
        displaySectionDisplayBook()
        createForm(createButtonSearchBook(), createCancelButton());    
    });
    let sectionForm = document.querySelector("h2");
    const createButton = document.createElement("div");
    sectionForm.appendChild(createButton);
    createButton.appendChild(button);
}

function displayLogo(){
    const h1 = document.querySelector(".title")
    const div = createElement("div");
    div.id = "boxImg";
    const logo = createElement("img");
    logo.src = "images/logo.svg";
    logo.id = "back"
    logo.width="100"
    h1.appendChild(div)
    div.appendChild(logo)
}

function createElement(tag, text, type, name) {
    const element = document.createElement(tag);
    if (text) element.innerText = text;
    if (type) element.type = type;
    if (name) element.name = name;
    return element;
}

function createButtonSearchBook() {
    const button2 = createElement("button", "Rechercher");
    button2.type = "button";
    button2.id = "button2"
    button2.className = "buttonVert";
    button2.addEventListener("click", function () {
        
        launchSearchBook();   
    });
    return button2;
}
function createCancelButton() {
    const button3 = createElement("button", "Annuler");
    button3.type = "button";
    button3.id = "button3"
    button3.className = "buttonRouge";
    button3.addEventListener("click", function () {
        let form = document.querySelector("form");
        let formButton = document.querySelector("formButton");
        form.remove();
        formButton.remove();
        createButtonAddBook();
        const removeDisplayBook = document.querySelector("#displayBook")
        removeDisplayBook.remove()    
    });
    return button3;
}

function createForm(button2, button3) {
    const title = createElement("label", "Titre du livre");
    const input1 = createElement("input", "", "text", "Titre du livre");
    input1.className = "margin"
    input1.id = "input1"
    const author = createElement("label", "Auteur");
    author.className = "margin"
    const input2 = createElement("input", "", "text", "Auteur");
    input2.id = "input2"
    const form = document.createElement("form");
    const formButton = document.createElement("formButton")
    let sectionForm = document.querySelector("h2");
    form.innerHTML = "";
    formButton.innerHTML = "";

    sectionForm.appendChild(form);
    form.appendChild(title);
    form.appendChild(input1);
    form.appendChild(author);
    form.appendChild(input2);
    sectionForm.appendChild(formButton)
    formButton.appendChild(button2);
    formButton.appendChild(button3);   
}



async function launchSearchBook() {
    input1 =document.getElementById("input1")
    input2 =document.getElementById("input2")
    const title = input1.value;
    const authors = input2.value;
    if (title === "" || authors === "") {
        alert("Aucun champ ne doit être vide");
    } else {
        let books = await BookManipulator.searchBook(title, authors);
        
        displayBooks(books);
    }
}


