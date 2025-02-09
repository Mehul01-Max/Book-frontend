// const axios = require("axios");
const backendUrl = "https://book-backend-796p.onrender.com";

const getBookData = async () => {
    try {
        const res = await fetch(`${backendUrl}/search?query=${searchQuery}`);
        if (!res.ok) throw new Error("Failed to fetch books");
        return await res.json();
    } catch (error) {
        console.error(error.message);
    }
};
let searchQuery = "harry potter"
let apiUrl = `${backendUrl}/search?query=${searchQuery}`;
let arr = []

const toReadShelf = document.querySelector("#to-read .books");
const ReadingShelf = document.querySelector("#reading .books");
const completedShelf = document.querySelector("#completed .books");
let currentBook = {};
const printBook = async () => {
    apiUrl = `${backendUrl}/search?query=${searchQuery}`;
    const books = await getBookData();
    ResultDiv = document.querySelector('#search-results');
    addBook(books.data.items, ResultDiv, true);
    
}
const hide = document.querySelector('.hide');
const addBook = (books, ResultDiv, bool) => {
    for (let book of books) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = renderBook(book, bool);
        if (!bool) {
            // console.log(book.status);
            ResultDiv = document.querySelector(`#${book.status} .books`);
        }
        ResultDiv.appendChild(bookDiv);

        const modal = document.querySelector('.modal');
        const closeModal = document.querySelector('.close-modal');
        bookDiv.addEventListener('click', (e) => {
            currentBook = {
                title: e.target.parentElement.children[1].innerText,
                authors: e.target.parentElement.children[2].innerText,
                image: e.target.parentElement.children[0].src
                
            };
            modal.style.display = 'flex';
            console.log(e.target.parentElement.parentElement.classList[0]);
            if (e.target.parentElement.parentElement.classList[0] == "books") {
                hide.style.display = 'flex';
            }
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            hide.style.display = 'none';
        });
    }
}
const bookInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-button');
bookInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        searchQuery = bookInput.value;
        // console.log(searchQuery);
        const allbooks = document.querySelectorAll('#search-results .book');
        allbooks.forEach((book) => {
            book.remove();
        })
    printBook();
    }
})
const renderBook = (book, bool) => {
    if (bool) {
        return `
            <img src="${book.volumeInfo.imageLinks?.thumbnail || 'placeholder-image.jpg'}" 
                 alt="${book.volumeInfo.title} cover"
                 loading="lazy">
            <h3 title="${book.volumeInfo.title}">${book.volumeInfo.title}</h3>
            <p title="${book.volumeInfo.authors?.join(', ') || 'Unknown author'}">${book.volumeInfo.authors?.join(', ') || 'Unknown author'}</p>`
    } else {
        return `
            <img src="${book.image}" 
                 alt="${book.title} cover"
                 loading="lazy">
            <h3 title="${book.title}">${book.title}</h3>
            <p title="${book.authors}">${book.authors}</p>`
    }
}

const shelf = () => {
    addBook(arr, toReadShelf, false);
}

const modalBtns= document.querySelectorAll(".modal-btn");
modalBtns.forEach((modalBtn) => {
    modalBtn.addEventListener('click', (e) => {
        toReadShelf.innerHTML = "";
        ReadingShelf.innerHTML = "";
        completedShelf.innerHTML = "";
        if (e.target.dataset.shelf === "remove") {
            console.log(currentBook);
            console.log(arr);
            arr = arr.filter((book) => {
                return book.title.replace(/\n+/g, ' ') !== currentBook.title.replace(/\n+/g, ' ');
            });
            console.log(arr);
        }
        else {
            let isPresent = false;
            for (i of arr) {
                if (i.title.replace(/\n+/g, ' ') === currentBook.title.replace(/\n+/g, ' ') && i.authors === currentBook.authors && i.image === currentBook.image) {
                    isPresent = true;
                    i.status = e.target.dataset.shelf;
                }
            }
            currentBook.status = e.target.dataset.shelf;

            if (!isPresent) {
                console.log(currentBook);
                arr.push(currentBook);
            }
        }
        console.log(toReadShelf.children);
        console.log(ReadingShelf.children);
        console.log(completedShelf.children);
        const modal = document.querySelector('.modal');
        modal.style.display = "none";
        updataLocalStorage();
        shelf();
        hide.style.display = 'none';
    })
})
const updataLocalStorage = () => {
    localStorage.setItem("arr", JSON.stringify(arr));
}
const lib = document.querySelector("#library h2");
lib.addEventListener('click', () => {
    lib.contentEditable = true;
})
document.querySelector("click", (e) => {
    if (e.target.tagName === "H2") {
        e.target.contentEditable = false;
    }
})
function init() {
    if (localStorage.getItem('arr')) {
        arr = JSON.parse(localStorage.getItem('arr'));
        shelf();
    }
}
init();
