const myLibrary = [];

class Book {
    constructor(title, author, pages, readed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readed = readed;
    }
};

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let readed = document.querySelector("#readed").value;

    let book = new Book(title, author, pages, readed);
    myLibrary.push(book);
};

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
        readed.setAttribute("class", "content readed-content");

        let status = document.createElement("div");
        status.setAttribute("class", "status");

        let firstBox = document.createElement("div");
        firstBox.setAttribute("class", "first-box");

        let secondBox = document.createElement("div");
        secondBox.setAttribute("class", "second-box");

        status.appendChild(firstBox);
        status.appendChild(secondBox);
        readed.appendChild(status);
        libraryContent.appendChild(readed);
        
        
        styleStatus(myLibrary[i].readed, firstBox, secondBox, status);

        status.addEventListener("click", () => {
            if (myLibrary[i].readed === "off") {
                myLibrary[i].readed = "on";
                styleStatus(myLibrary[i].readed, firstBox, secondBox, status);
            } else if (myLibrary[i].readed === "on") {
                myLibrary[i].readed = "off";
                styleStatus(myLibrary[i].readed, firstBox, secondBox, status);
            }
        })

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
};

function styleStatus(readedStatus, x, y, z) {
    if (readedStatus === "on") {
        x.setAttribute("style", "background-color: var(--green-color);");
        x.textContent = "Yes";
        y.setAttribute("style", "background-color: white;");
        y.textContent = "";
        z.setAttribute("style", "background-color: var(--green-color);")
    } else {
        x.setAttribute("style", "background-color: white;");
        x.textContent = "";
        y.setAttribute("style", "background-color: rgb(218, 0, 0);");
        y.textContent = "No";
        z.setAttribute("style", "background-color: rgb(218, 0, 0);")
    }
};

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.show();
});

const addButton = document.querySelector(".add");
addButton.addEventListener("click", () => {
    addBookToLibrary();
    let checkbox = document.querySelector("#readed");
    let lastIndex = myLibrary.length - 1;
    if (checkbox.checked) {
        myLibrary[lastIndex].readed = "on";
    } else {
        myLibrary[lastIndex].readed = "off";
    }
    displayLibrary();
    const dialog = document.querySelector("dialog");
    dialog.close();
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    title.value = "";
    author.value = "";
    pages.value = "";
});

const quit = document.querySelector(".quit");
quit.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.close();
});