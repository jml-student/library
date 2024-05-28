const myLibrary = ["book1", "book2"];

function Book() {

}

function addBookToLibrary() {

}

function displayLibrary() {
    for (i = 0; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.textContent = myLibrary[i];
    }
}