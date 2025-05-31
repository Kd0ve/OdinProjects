const myLibrary = [];
const newBook = document.querySelector('#new-book-btn')
const closeDiag = document.querySelector('#close');
const library = document.querySelector('#library');
const dialog = document.querySelector('#new-book-dialog');
const confirm = document.querySelector('#confirm');
const bookAuth = document.querySelector("#author");
const bookTitle = document.querySelector('#title');
const bookNumPages = document.querySelector('#numPages');
const bookRead = document.querySelector('#read');
const form = document.querySelector('#form');
const alertBox = document.querySelector('#form-alert');


function Book(author, title, numPages, read, id) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(author, title, numPages, read) {
    id = crypto.randomUUID();
    const book = new Book(author, title, numPages, read, id);
    myLibrary.push(book);
}

function displayBooks(libraryArr) {
    // remove books currently displayed
    while (library.firstChild) {
        library.removeChild(library.firstChild);
    }

    // create card for books
    libraryArr.forEach(book => {
        let newBook = document.createElement('div');
        newBook.setAttribute('class', 'card');
        library.appendChild(newBook);
        
        const title = document.createElement("h2");
        title.innerText += `Title: ${book.title}`;

        const p1 = document.createElement("p")
        p1.innerText += `Author: ${book.author}`;

        const p2 = document.createElement("p")
        p2.innerText += `Num of Pages: ${book.numPages}`;

        const btnRead = document.createElement("button");
        btnRead.textContent = 'Toggle Read';
        btnRead.setAttribute('id', 'toggle-read');
        const p3 = document.createElement("p");
        book.read = book.read.toLowerCase();
        if (book.read == 'yes') {
            p3.innerText += `Read yet?: Yes`;
        } else {
            p3.innerText += `Read yet?: No`;
        }

        const btn = document.createElement("button");
        btn.textContent = 'Remove';
        btn.setAttribute('id', 'remove');
        btn.setAttribute('data-uuid', book.id);

        newBook.appendChild(title);
        newBook.appendChild(p1);
        newBook.appendChild(p2);
        newBook.appendChild(p3);
        newBook.appendChild(btn);
        newBook.appendChild(btnRead);

        library.appendChild(newBook);
    })
}

newBook.addEventListener("click", () => {
    dialog.showModal();
});

closeDiag.addEventListener("click", () => {
    event.preventDefault();
    dialog.close();
    form.reset();
    alertBox.style.display = 'none';
    alertBox.textContent = '';
})

library.addEventListener("click", (event) => {
    if (event.target && event.target.id === "remove") {
        const bookId = event.target.getAttribute('data-uuid');
        const bookIndex = myLibrary.findIndex(book => book.id === bookId);
        if (bookIndex > -1) {
            myLibrary.splice(bookIndex, 1);
            displayBooks(myLibrary);
        }
    }
});

library.addEventListener("click", (event) => {
    if (event.target && event.target.id === "toggle-read") {
        const bookCard = event.target.parentElement;
        const bookTitle = bookCard.querySelector("h2").innerText.replace('Title: ', '');
        const book = myLibrary.find(b => b.title === bookTitle);
        if (book) {
            book.read = (book.read.toLowerCase() === 'yes') ? 'No' : 'Yes';
            displayBooks(myLibrary);
        }
    }
});

confirm.addEventListener('click', () => {
    event.preventDefault();
    if (!bookAuth.value || !bookTitle.value || !bookNumPages.value || !bookRead.value) {
        alertBox.textContent = 'Please fill out all fields.';
        alertBox.style.display = 'block';
        return;
    }

    addBookToLibrary(bookAuth.value, bookTitle.value, bookNumPages.value, bookRead.value);
    displayBooks(myLibrary);
    dialog.close();
    form.reset();
    alertBox.style.display = 'none';
    alertBox.textContent = '';
});

addBookToLibrary('J.R.R Tolken', 'The Hobbit', '300', 'No');
addBookToLibrary('George Orwell', '1984', '328', 'Yes');
displayBooks(myLibrary);