const addButton = document.querySelector(".addButton");
const closeButton = document.querySelector(".closeButton");
const clearButton = document.querySelector(".clearButton");
const dialog = document.querySelector("dialog");







addButton.addEventListener('click', (e) => {

    //create a form with options for title of book, author of book, date started, date finished, pages read.

    dialog.showModal();


})

closeButton.addEventListener('click', (e) => {
    dialog.close();
})