const addButton = document.querySelector(".addButton");
const deleteButton = document.querySelector(".delButton");
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
let imageValue = document.querySelector("#file-btn");
let deleteCheckedButton = null;
let allBooks = [];
let allCards = [];


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  };





function createBookObject(title = null, author=null, startDate=null, endDate=null, pagesRead=null, identifier=null, image=null) {
    this.title = title;
    this.author = author;
    this.startDate = startDate;
    this.endDate = endDate;
    this.pagesRead = pagesRead;
    this.identifier = identifier;
    this.image = image;
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

        // let microImage = document.createElement("div");
        // microImage.setAttribute("id", "MicroImageStyle");
        // microImage.setAttribute("class", "micro-layout-style");
        // card.append(microImage);

        let microImage = document.createElement("img");
        microImage.setAttribute("id", "MicroImageStyle");
        microImage.setAttribute("class", "micro-layout-style");
        // microImage.setAttribute("src", "");
        // microImage.setAttribute("alt", "");


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

            //microCheckBox
        let microCheckBox = document.createElement("input");
        microCheckBox.setAttribute("type", "checkbox");
        microCheckBox.setAttribute("class", "checkbox-style");
        microCheckBox.style.visibility = "hidden";

        card.prepend(microCheckBox);


        return [card.getAttribute("id"), microImage, microTitle, microAuthor, microStartDate, microEndDate, microPagesRead, microCheckBox]


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



   //need to first check if  is in temtitle.Value.value is empty.

    if (titleValue.value) {
            
        let newCard = new createCardObject;
        let [cardAttributeIdentifier, microImage, microTitle, microAuthor, microStartDate, microEndDate, microPagesRead, microCheckBox] = newCard.createCard();
        newCard.microTitle = microTitle;
        newCard.microAuthor = microAuthor
        newCard.microStartDate = microStartDate
        newCard.microEndDate = microEndDate
        newCard.microPagesRead = microPagesRead
        newCard.cardAttributeIdentifier = cardAttributeIdentifier;
        newCard.microImage = microImage
        newCard.microCheckBox = microCheckBox;

        allCards.push(newCard); //this is where the DOM cards reside. Go here to delete them eventually


        let book = new createBookObject(titleValue.value, authorValue.value, startDateValue.value, endDateValue.value, pagesReadValue.value, cardAttributeIdentifier, imageValue.value);
        // console.log(allCards); //main collection (1/2) - the card objects
        allBooks.push(book);
        e.value = book;
        // console.log(e.value);

        imageValue.value = null;
        titleValue.value = null;
        authorValue.value = null;
        startDateValue.value = null ;
        endDateValue.value = null;
        pagesReadValue.value = null;



    
        // console.log(imageValue);
        // microImage.append(book.) -> gotta get image from form, add it to book object, then put it in card 
        microImage.setAttribute("src", book.image); //`${book.image}`
        microImage.setAttribute("alt", `image alt: ${book.image}`);
        
        
        


        
        microTitle.append(book.title);
        microAuthor.append(book.author);
        microStartDate.append(book.startDate);
        microEndDate.append(book.endDate);
        microPagesRead.append(book.pagesRead);



        console.log(allBooks); //main collection (2/2) - the book objects


        // these comments mimic the function of dialog sending data somewhere. Form validation only works when mimic is off, but data only works when mimic is on. This will be fixed once backend is created.
        e.preventDefault();
        dialog.close();

    }

    });




deleteButton.addEventListener("click", (e) => {

    //put checkbox on every card
    for (let i of allCards) {
        i.microCheckBox.style.visibility = "visible";

    }

   

    
    
    //make other buttons unclickable
    addButton.setAttribute("disabled", "disabled");
    deleteButton.setAttribute("disabled", "disabled");

        // console.log(allCards); // the card objects


    //make a "delete checked" button appear next ot the delete button that will delete all checked items.
    if (deleteCheckedButton == null) {

        deleteCheckedButton = document.createElement("button");
        deleteCheckedButton.textContent = "Delete Checked";
        deleteButton.after(deleteCheckedButton);


        //make a "cancel" button appear next ot the "delete checked" button that will go back to base state.
        let cancelDeleteButton = document.createElement("button");
        cancelDeleteButton.textContent = "Done";
        deleteCheckedButton.after(cancelDeleteButton);



        cancelDeleteButton.addEventListener("click", (e) => {
            deleteCheckedButton.remove();

            cancelDeleteButton.remove();
            
            for (let i of allCards) {
                i.microCheckBox.style.visibility = "hidden";
                i.microCheckBox.checked = false;

            }

            deleteCheckedButton = null;
            addButton.removeAttribute("disabled");
            deleteButton.removeAttribute("disabled");
    

        })

        deleteCheckedButton.addEventListener("click", (e)=>{

            for (let card of allCards){
                if (card.microCheckBox.checked == true){
                    
                    console.log(`{card.cardAttributeIdentifier} was deleted`);
                    
                    allCards.splice(allCards.indexOf(card), 1);
                    document.querySelector(`#${card.cardAttributeIdentifier}`).remove();
                                
                }
            }
        
        });



    }

    
//need to create an async function that listens to checkboxes of allCards, searches for checked boxes, and dynamically updates an the checkBoxesTrue array with cards with checked boxes.
//then, use the "delete Checked" button to delete all cards in that array.


 





    



})






//TODO:
//fix over flow in layout item divs.
//fix image uploading only showing alt
//animate the dialog box
//general styling
//look into lazy loading images for website performance

