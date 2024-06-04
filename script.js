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

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };





function createBookObject(title = null, author=null, startDate=null, endDate=null, pagesRead=null, identifier=null) {
    this.title = title;
    this.author = author;
    this.startDate = startDate;
    this.endDate = endDate;
    this.pagesRead = pagesRead;
    this.identifier = identifier;
}



function createCardObject() {

    this.createCard = function() {

        //create div element
        //give it a unique attribute (id, probably)
        //insert it into cardContainer
        //within div element, create microlayout for book properties as well as edit and remove buttons
        //is this going to be a method in a larger card object constructor or will this just be a function to call on...?
        let card = document.createElement("div");
        card.setAttribute("class", "card-style");
        card.setAttribute("id", `identifier${getRndInteger(0, 1000)}`);
        // console.log(card.getAttribute("id"));
        cardContainer.append(card);


        //microlayout

            //microImage

        let microImage = document.createElement("div");
        microImage.setAttribute("id", "MicroImageStyle");
        microImage.setAttribute("class", "micro-layout-style");
        card.append(microImage);



            //microTitle
        let microTitle =document.createElement("div");
        // microTitle.setAttribute("class", "MicroTitleStyle");
        microTitle.setAttribute("class", "micro-layout-style MicroLayoutItemsStyle");
        card.append(microTitle);

            //microAuthor
        
        let microAuthor = document.createElement("div");
        microAuthor.setAttribute("class", "micro-layout-style MicroLayoutItemsStyle" )
        card.append(microAuthor);
        
            //microStartDate
        let microStartDate =  document.createElement("div");
        microStartDate.setAttribute("class", "micro-layout-style MicroLayoutItemsStyle" )
        card.append(microStartDate);

            //microEndDate
        let microEndDate = document.createElement("div");
        microEndDate.setAttribute("class", "micro-layout-style MicroLayoutItemsStyle" )
        card.append(microEndDate);


            //microPagesRead
        let microPagesRead =  document.createElement("div");
        microPagesRead.setAttribute("class", "micro-layout-style MicroLayoutItemsStyle" )
        card.append(microPagesRead);


        return card.getAttribute("id");


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

    let newCard = new createCardObject;
    let book = new createBookObject(titleValue.value, authorValue.value, startDateValue.value, endDateValue.value, pagesReadValue.value, newCard.createCard())
    allBooks.push(book);
    tempBook.add(book);
    e.value = book;
    // console.log(e.value);

    titleValue.value = null;
    authorValue.value = null;
    startDateValue.value = null ;
    endDateValue.value = null;
    pagesReadValue.value = null;

    // console.log(allBooks);
    // console.log(tempBook);



    e.preventDefault();
    dialog.close();

});
//at this point, card is created, and tempBook is loaded. Now I need to get the object from tempBook displayed into the card.





//need formvalidation so blank cards aren't created. try solving this with form validation alone.
//might not need identifier..must test later.