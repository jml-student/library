const myLibrary = ["book1", "book2"];

function Book() {

}

function addBookToLibrary() {

}

function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    libraryContainer.innerHTML = "";
    for (i = 0; i < myLibrary.length; i++) {
        let div = document.createElement("div");
        div.setAttribute("class", "book-container")
        div.textContent = myLibrary[i];
        libraryContainer.appendChild(div);
    }
}

const newBookButton = document.querySelector(".new-book");
newBookButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.show();
})