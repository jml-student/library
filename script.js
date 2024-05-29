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
}

function displayLibrary() {
    const libraryContent = document.querySelector(".library-content");
    libraryContent.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++) {
        let number = document.createElement("div");
        number.setAttribute("class", "content");
        number.textContent = i + 1;
        libraryContent.appendChild(number);

        let title = document.createElement("div");
        title.setAttribute("class", "content");
        title.textContent = myLibrary[i].title;
        libraryContent.appendChild(title);

        let author = document.createElement("div");
        author.setAttribute("class", "content");
        author.textContent = myLibrary[i].author;
        libraryContent.appendChild(author);

        let pages = document.createElement("div");
        pages.setAttribute("class", "content");
        pages.textContent = myLibrary[i].pages;
        libraryContent.appendChild(pages);

        let readed = document.createElement("div");
        readed.setAttribute("class", "content");
        readed.textContent = myLibrary[i].readed;
        libraryContent.appendChild(readed);

        let trash = document.createElement("button");
        trash.setAttribute("class", "trash");
        trash.setAttribute("id", i);
        trash.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';
        libraryContent.appendChild(trash);

        trash.addEventListener("click", () => {
            myLibrary.splice(i, 1);
            displayLibrary();
        });
    }  
}

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.show();
});

const addButton = document.querySelector(".add");

addButton.addEventListener("click", () => {
    addBookToLibrary();
    displayLibrary();
    const dialog = document.querySelector("dialog");
    dialog.close();
});