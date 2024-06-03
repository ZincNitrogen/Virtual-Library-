const addButton = document.querySelector(".addButton");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closeButton");
const clearButton = document.querySelector(".clearButton");
const dialog = document.querySelector("dialog");
const cardContainer = document.querySelector(".section-flex");
let titleValue = document.querySelector("#title");
let authorValue =  document.querySelector("#author");
let startDateValue =  document.querySelector("#date-started");
let endDateValue =  document.querySelector("#date-ended");
let pagesReadValue =  document.querySelector("#pages-read");
let allBooks = [];
let tempBook = new Set();




function createBookObject(title = null, author=null, startDate=null, endDate=null, pagesRead=null) {
    this.title = title;
    this.author = author;
    this.startDate = startDate;
    this.endDate = endDate;
    this.pagesRead = pagesRead;
}



function createCardObject() {

    this.createCard = function() {

        //create div element
        //give it a unique attribute (id, probably)
        //insert it into cardContainer
        //within div element, create microlayout for book properties as well as edit and remove buttons
        //is this going to be a method in a larger card object constructor or will this just be a function to call on...?
        let identifierNumber = 0;
        let card = document.createElement("div");
        card.setAttribute("class", "card-style");
        card.setAttribute("id", 'identifier${++identiferNumber}');
        cardContainer.append(card);


    };
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
    tempBook.add(book);
    e.value = book;
    console.log(e.value);

    titleValue.value = null;
    authorValue.value = null;
    startDateValue.value = null ;
    endDateValue.value = null;
    pagesReadValue.value = null;

    console.log(allBooks);
    console.log(tempBook);

    e.preventDefault();
    dialog.close();

});




let test = new createCardObject;
test.createCard();


let test2 = new createCardObject;
test2.createCard();