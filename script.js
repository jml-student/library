const myLibrary = [];

function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readed = document.querySelector("#readed").value;

    let book = new Book(title, author, pages, readed);
    myLibrary.push(book);
    console.log(myLibrary);
}

function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    
    for (i = 0; i < myLibrary.length; i++) {
        
    }
}

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.show();
})

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    addBookToLibrary();
    
})