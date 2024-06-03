const addButton = document.querySelector(".addButton");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closeButton");
const clearButton = document.querySelector(".clearButton");
const dialog = document.querySelector("dialog");
let titleValue = document.querySelector("#title");
let authorValue =  document.querySelector("#author");
let startDateValue =  document.querySelector("#date-started");
let endDateValue =  document.querySelector("#date-ended");
let pagesReadValue =  document.querySelector("#pages-read");
let allBooks = [];




function createBookObject(title = null, author=null, startDate=null, endDate=null, pagesRead=null) {
    this.title = title;
    this.author = author;
    this.startDate = startDate;
    this.endDate = endDate;
    this.pagesRead = pagesRead;
}







addButton.addEventListener('click', (e) => {

    //create a form with options for title of book, author of book, date started, date finished, pages read.

    dialog.showModal();


});

closeButton.addEventListener('click', (e) => {
    dialog.close();
});

submitButton.addEventListener("click", (e) => {

    /*get individual field data
    parse data into an object
    give e.value the value of that object.*/


    let book = new createBookObject(titleValue.value, authorValue.value, startDateValue.value, endDateValue.value, pagesReadValue.value)
    allBooks.push(book);
    e.value = book;
    console.log(e.value);
    titleValue.value = null;
    authorValue.value = null;
    startDateValue.value = null ;
    endDateValue.value = null;
    pagesReadValue.value = null;

    console.log(allBooks);
    e.preventDefault();
    dialog.close();

});

//NEXT STEP AFTER LUNCH: FIGURE OUT HOW TO PARSE INFORMATION OUT OF DIALOG ELEMENT

//make it so clicking out of the dialog exits the dialog without saving or updating info