let inputText = document.getElementById("inputText");

let displayText = document.getElementById("displayText");
let position = document.getElementById("position");
let category = document.getElementById("category");

let closeBtn = document.getElementById("closeBtn");
let stacks = document.getElementById("stacks");
let stacksheader = document.getElementById("stacksheader");

let mainCard = document.getElementById("mainCard");

let frontCard = document.getElementById("frontCard");
let backCard = document.getElementById("backCard");

let prevBtn = document.getElementById("prevBtn");
let flipBtn = document.getElementById("flipBtn");
let nextBtn = document.getElementById("nextBtn");

let flashCard = document.getElementById("flashCard");

let url_pt1 = "https://spreadsheets.google.com/feeds/list/";
let apikey = "1mWZd_gXoAk91XFwkZgsDkDsPweBEnt7W0fjqqYV5IUc";
let url_pt2 = "/public/full?alt=json";
let sheet1 = "/1";
let sheet2 = "/2";
let sheet3 = "/3";
let sheet4 = "/4";
let sheet5 = "/5";
let stackSelected = "";

let csStack = document.getElementById("csStack");
let htmlStack = document.getElementById("htmlStack");
let cssStack = document.getElementById("cssStack");
let javascriptStack = document.getElementById("javascriptStack");
let bootstrapStack = document.getElementById("bootstrapStack");
let stacksMenu = document.getElementById("stacksMenu");
let stackIcon = document.getElementById("stackIcon");

let stackStarted = false;

let storedQuestions = [];
let questionCounter = 0;
let libraryOpen = true;
let nowStudying = "";

function closeLibrary() {
  stacks.classList.add("d-none");
  libraryOpen = false;
  closeBtn.classList.add("d-none");
  stacksheader.classList.add("d-none");
  stacksMenu.classList.remove(
    "col-11",
    "col-sm-4",
    "px-4",
    "px-lg-5",
    "pt-4",
    "pt-lg-5"
  );
  // stackIcon.classList.remove('pr-2');
  // stackIcon.classList.add('p-4');
  flashCard.classList = "col-12 pt-5";
}

function openLibrary() {
  stacksMenu.classList.add("slideRight");

  stacks.classList.remove("d-none");
  libraryOpen = true;
  closeBtn.classList.remove("d-none");
  stacksheader.classList.remove("d-none");
  stacksMenu.classList.add(
    "col-11",
    "col-sm-4",
    "px-4",
    "px-lg-5",
    "pt-4",
    "pt-lg-5"
  );
  flashCard.classList = "col-12 col-md-8 pt-5";
}

// CLOSE BUTTON
closeBtn.addEventListener("click", function () {
  // this closes the stack library so hide everything but the icon and then also
  // console.log("close pressed");
  if (libraryOpen) {
    closeLibrary();
  } else {
    openLibrary();
  }
});

stackIcon.addEventListener("click", function () {
  if (libraryOpen) {
    closeLibrary();
  } else {
    openLibrary();
  }
});

document.getElementById("nextBtn").disabled = true;
document.getElementById("prevBtn").disabled = true;
document.getElementById("flipBtn").disabled = true;
document.getElementById("mainCard").disabled = true;

function enableBtns() {
  document.getElementById("flipBtn").disabled = false;
  document.getElementById("mainCard").disabled = false;
}

function enableArrows() {
  document.getElementById("nextBtn").disabled = false;
  document.getElementById("prevBtn").disabled = false;
}

function disableArrows() {
  document.getElementById("nextBtn").disabled = true;
  document.getElementById("prevBtn").disabled = true;
}

function initialize() {
  enableBtns();
  stackStarted = false;
  flipBtn.innerText = "click to start";
  resetColor();
  position.innerText = "";
  questionCounter = 0;
  category.innerText = "New stack selected...";
  // closeLibrary();
}

//event listeners for each stack
//this will push the correct sheet from the spreadsheet to the url
csStack.addEventListener("click", function () {

  mainCard.innerHTML =
    "<h1>C#</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet1;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("csColor");

  // TEST
  frontCard.innerHTML =
    "<h1>C#</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("csColor");
  // newFlipCard();

});

htmlStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>html</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet2;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("htmlColor");
  // TEST
  frontCard.innerHTML =
    "<h1>html</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("htmlColor");
});

cssStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>css</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet3;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("cssColor");
  // TEST
  frontCard.innerHTML =
    "<h1>css</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("cssColor");
});

javascriptStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>javascript</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet4;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("jsColor");
  // TEST
  frontCard.innerHTML =
    "<h1>javascript</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("jsColor");
});

bootstrapStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>bootstrap</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet5;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("bootstrapColor");
  // TEST
  frontCard.innerHTML =
    "<h1>bootstrap</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("bootstrapColor");
});

//change the number above to coincide with the sheet

//pull from google sheet URL
function loadQuestions(url) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      // console.log(JSON.parse(this.responseText));

      //start by making it a variable
      let questions = JSON.parse(this.responseText).feed.entry;
      let stackName = JSON.parse(this.responseText).feed.title.$t;

      // console.log(stackName);
      // console.log(questions);
      // make the array accessible outside of this function
      storedQuestions = questions;
      nowStudying = stackName;
      // console.log(storedQuestions);
      positionDisplay();

      //go through the array with a for loop
      for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i].gsx$definition.$t);
        // displayText.innerHTML=questions[i].gsx$definition.$t;
        // mainCard.innerHTML =
        //   "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
        // prevBtn.innerText=questions[i].gsx$choice2.$t;
        // flipBtn.innerText=questions[i].gsx$choice3.$t;
        // nextBtn.innerText=questions[i].gsx$choice4.$t;
      }
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

let termFirst = true;

//event listener for flip button
//replace inner text with the opposite ijnformation
//maybe create a bool or value that sets it to 0 or 1?

flipBtn.addEventListener("click", function () {
  if (!stackStarted) {
    displayFirst();
  } else {
    flipCard();
    newFlipCard();
  }
});

// let colorString = toString(storedQuestions[questionCounter].gsx$color.$t);
// console.log(colorString);

function displayFirst() {
  enableArrows();
  stackStarted = true;

  // debugger;
  loadQuestions(url_pt1 + apikey + stackSelected + url_pt2);

  // add timeout here

  var delayInMilliseconds = 1000; //1 second

  setTimeout(function () {
    mainCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    changeColor(storedQuestions[questionCounter].gsx$color.$t);

    frontCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    changeColor(storedQuestions[questionCounter].gsx$color.$t);
  }, delayInMilliseconds);

  setTimeout(function () {
    flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP OVER';
  }, delayInMilliseconds);

  // console.log(stackStarted);

  // positionDisplay();
}

mainCard.addEventListener("click", function () {
  // console.log(storedQuestions);
  // console.log(stackStarted);

  if (!stackStarted) {
    displayFirst();
  } else {
    flipCard();
  }
});

// console.log(termFirst);

function resetColor() {
  mainCard.classList.remove("green", "blue", "pink");
  mainCard.classList.add("btn-dark");
}

function changeColor(color) {
  // mainCard.classList.add('green');
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.remove("btn-dark");
  mainCard.classList.remove(
    "green",
    "blue",
    "pink",
    "csColor",
    "csColorL",
    "csColorD"
  );
  mainCard.classList.add(color);

  // test
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.remove("btn", "btn-dark");
  frontCard.classList.remove(
    "green",
    "blue",
    "pink",
    "csColor",
    "csColorL",
    "csColorD"
  );
  frontCard.classList.add(color);

  backCard.classList =
    "card__face card__face--back  btn btn-dark justify-content-center p-3 p-lg-5";
  backCard.classList.remove("btn", "btn-dark");
  backCard.classList.remove(
    "green",
    "blue",
    "pink",
    "csColor",
    "csColorL",
    "csColorD"
  );
  backCard.classList.add(color);
}

function flipCard() {
  // console.log(termFirst);
  // console.log(questionCounter);

  changeColor(storedQuestions[questionCounter].gsx$color.$t);

  if (termFirst) {
    mainCard.innerHTML =
      "<def>" + storedQuestions[questionCounter].gsx$definition.$t + "</def>";
    termFirst = false;
    flipBtn.classList.remove("btn-dark");
    flipBtn.classList.add("btn-light");
    flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP BACK';

    // TEST
    backCard.innerHTML =
      "<def>" + storedQuestions[questionCounter].gsx$definition.$t + "</def>";
  } else {
    mainCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    termFirst = true;
    flipOver();
  }
}

function flipOver() {
  flipBtn.classList.remove("btn-light");
  flipBtn.classList.add("btn-dark");
  flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP OVER';
}

function positionDisplay() {
  let currentQ = questionCounter + 1;
  let totalQ = storedQuestions.length.toString();

  position.innerText = currentQ + " / " + totalQ;
  category.innerText = "current stack: " + nowStudying;

  // position.innerText = (questionCounter + 1) + " of " ( storedQuestions.length + 1 );
}

//event listener for prev button
//for loop that goes through each index
//must reset to last [.length] once it hits the first one
prevBtn.addEventListener("click", function () {
  termFirst = true;
  card.classList.toggle("is-flipped");
  flipOver();

  // console.log(questionCounter);

  if (questionCounter > 0) {
    questionCounter--;
  } else {
    questionCounter = storedQuestions.length - 1;
  }

  mainCard.innerHTML =
    "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";

  // test
  frontCard.innerHTML =
    "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
  backCard.innerHTML =
    "<def>" + storedQuestions[questionCounter].gsx$definition.$t + "</def>";
  changeColor(storedQuestions[questionCounter].gsx$color.$t);

  positionDisplay();

  // console.log(questionCounter);
});

//event listener for next button
//for loop that goes through each index
//must reset to first [0] once it hits the last one
nextBtn.addEventListener("click", function () {
  // debugger;
  //currently it's taking it and flipping the card back and forth between def and term, 
  // BUT we only want it to display the first term
  termFirst = true;
  // card.classList.toggle("is-flipped");

  flipOver();
  // console.log(questionCounter);

  if (questionCounter < storedQuestions.length - 1) {
    questionCounter++;
  } else {
    questionCounter = 0;
  }

  mainCard.innerHTML =
    "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";

  // test
  frontCard.innerHTML =
    "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
  backCard.innerHTML =
    "<def>" + storedQuestions[questionCounter].gsx$definition.$t + "</def>";

  changeColor(storedQuestions[questionCounter].gsx$color.$t);

  // console.log(questionCounter);
  // console.log(termFirst);
  positionDisplay();
});

let card = document.querySelector(".card");
card.addEventListener("click", function () {
  newFlipCard();
});

function newFlipCard() {
  if (!stackStarted) {
    displayFirst();
  } else {
    flipCard();
    card.classList.toggle("is-flipped");
  }
}
