const header = document.querySelector("header");
const addButton = document.querySelector(".addButton");
const deleteButton = document.querySelector(".delButton");
const submitButton = document.querySelector(".submitButton");
const closeButton = document.querySelector(".closeButton");
const clearButton = document.querySelector(".clearButton");
const dialog = document.querySelector("dialog");
const cardContainer = document.querySelector(".section-flex");
const main = document.querySelector(".main-flex");
let titleValue = document.querySelector("#title");
let authorValue =  document.querySelector("#author");
let startDateValue =  document.querySelector("#date-started");
let endDateValue =  document.querySelector("#date-ended");
let pagesReadValue =  document.querySelector("#pages-read");
let imageValue = document.querySelector("#file-btn");
let deleteCheckedButton = document.querySelector("#deleteCheckedbtn");
let cancelDeleteButton = document.querySelector("#cancelDeletebtn");
let cardStyle =null;
let cleanUpArray = [];
let secondArray =[];




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
        cardStyle = document.querySelectorAll(".card-style");


        //microlayout

            //microImage

        // let microImage = document.createElement("div");
        // microImage.setAttribute("id", "MicroImageStyle");
        // microImage.setAttribute("class", "micro-layout-style");
        // card.append(microImage);

        let microImage = document.createElement("img");
        microImage.setAttribute("id", "MicroImageStyle");
        microImage.setAttribute("class", "micro-layout-style");
        microImage.setAttribute("src", "");

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
        microCheckBox.checked = false;
        microCheckBox.style.visibility = "hidden";

        card.prepend(microCheckBox);


        return [card.getAttribute("id"), microImage, microTitle, microAuthor, microStartDate, microEndDate, microPagesRead, microCheckBox, cardStyle]


    };

}

//tilt animation not as smooth or sleek as I thought.
// document.addEventListener("scroll", (e) => {

//     console.log("i am scrolling");
//     // access transitoin proeprty of rotation and give it new position.
//     for (let i of cardStyle) {
//         i.style.rotate= "3deg";

//     }

    
    
// });

// document.addEventListener("scrollend", (e) => {
//     for (let i of cardStyle) {
//         i.style.rotate= "0deg";

//     }
// });



deleteButton.setAttribute("disabled", "disabled");


header.addEventListener("pointerdown", (e) => {

    if (e.target.tagName == "svg" && e.target.disabled != true ){
        console.log("yay")
        e.target.parentElement.style.boxShadow ="0.2rem 0.2rem inset";



        
    }else if (e.target.tagName == "button" && e.target.disabled != true ) {
        e.target.style.boxShadow ="0.2rem 0.2rem inset";

    }

});

header.addEventListener("pointerup", (e) => {

    if (e.target.tagName == "svg" ){
        console.log("yay")
        e.target.parentElement.style.boxShadow ="0.5rem 0.5rem";



        
    }else if (e.target.tagName == "button" && e.target.disabled != true ) {
        e.target.style.boxShadow ="0.5rem 0.5rem";

    }

});


//ALL HEADER BUTTON click EVENTS CAN BE REFACTORED VIA EVENT DELEGATION****MUST DO


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

        deleteButton.removeAttribute("disabled"); //maybe async is needed here to constantly check if cards exist and to update disability status of button based on existance of card objects...

            
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
      
        if (microImage.getAttribute("src") == "") {
            microImage.setAttribute("src", "./masahiro-miyagi-SUE-yUTqn7w-unsplash.jpg");

        }else {
            microImage.setAttribute("src", book.image); //`${book.image}`
            microImage.setAttribute("alt", `image alt: ${book.image}`);
            microImage.setAttribute("width", "50px");
            microImage.setAttribute("height", "50px");
            //console.log(book.image);
    
        }

        

        
       
        
        
        


        
        microTitle.append(book.title);
        microAuthor.append(book.author);
        microStartDate.append(book.startDate);
        microEndDate.append(book.endDate);
        microPagesRead.append(book.pagesRead);



        // console.log(allBooks); //main collection (2/2) - the book objects

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
    if (deleteCheckedButton.hidden == true && cancelDeleteButton.hidden == true) {

        deleteCheckedButton.hidden = false;
        cancelDeleteButton.hidden = false;



        cancelDeleteButton.addEventListener("click", (e) => {
            deleteCheckedButton.hidden = true;

            cancelDeleteButton.hidden = true;
            
            for (let i of allCards) {
                i.microCheckBox.style.visibility = "hidden";
                i.microCheckBox.checked = false;

            }

            addButton.removeAttribute("disabled");
            deleteButton.removeAttribute("disabled");
    

        })

        deleteCheckedButton.addEventListener("click", (e)=>{
            console.log(allCards);

           for (let card of allCards){
                if (card.microCheckBox.checked == true){

                    console.log(card);
                    
                    // console.log(card.cardAttributeIdentifier);
                    // //***need to fix single delete: get index of card, add to array, if item in array is in allCards, delete from all cards then delete from array. 
                    console.log(`${card.cardAttributeIdentifier} was deleted`);
                    console.log(allCards.indexOf(card));
                    document.querySelector(`#${card.cardAttributeIdentifier}`).remove();
                    //allCards[allCards.indexOf(card)] = undefined; //this is a hacky way of solving the deletion problem, it does not clear the allCard array.
                    
                    // allCards.splice(allCards.indexOf(card), 1);
                


                                
                }

                

            }
          


            /*for (let card of allCards){
                if(card.microCheckBox.checked == true) {
                    cleanUpArray.push(allCards.indexOf(card)); //pushes card object into cleanup array if that objects checkbox is checked
                    secondArray.push(card.cardAttributeIdentifier); //pushed cards ID into second array
                }

            }

            console.log(cleanUpArray);
            console.log(secondArray); */


            allCards.forEach(i => i.cardAttributeIdentifier == document.querySelector(`#${i.cardAttributeIdentifier}`) ? console.log("card exists") : allCards.splice(allCards.indexOf(i), 1)  ); //HOLY SHIT I THINK THIS SOLVES THE DELETE BUG!!!

    
            console.log(allCards);

         


        
        });



    }

    
//need to create an async function that listens to checkboxes of allCards, searches for checked boxes, and dynamically updates an the checkBoxesTrue array with cards with checked boxes.
//then, use the "delete Checked" button to delete all cards in that array. (UPDATE: LOL NO I DON'T THINK SO. I CAN HACK MY WAY AROUND ITTTT)


 





    



})






//TODO:
//fix over flow in layout item divs.
//fix image uploading only showing alt
//animate the dialog box
//look into lazy loading images for website performance
//look into animating slight tilt of cards when scrolling. Want to make a sort of inertial effect
//look into a "display mode" that goes from the beginning of the document to the end at a certain speed.