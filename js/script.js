let inputText = document.getElementById("inputText");

let displayText = document.getElementById("displayText");

let mainCard = document.getElementById("mainCard");
let prevBtn = document.getElementById("prevBtn");
let flipBtn = document.getElementById("flipBtn");
let nextBtn = document.getElementById("nextBtn");

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

let stackStarted = false;

let storedQuestions = [];
let questionCounter = 0;

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
}

//event listeners for each stack
//this will push the correct sheet from the spreadsheet to the url
csStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>C#</h1>(click to start)";
  stackSelected = sheet1;
  disableArrows();
  initialize();
});

htmlStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>html</h1>(click to start)";
  stackSelected = sheet2;
  disableArrows();
  initialize();
});

cssStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>css</h1>(click to start)";
  stackSelected = sheet3;
  disableArrows();
  initialize();
});

javascriptStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>javascript</h1>(click to start)";
  stackSelected = sheet4;
  disableArrows();
  initialize();
});

bootstrapStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>bootstrap</h1>(click to start)";
  stackSelected = sheet5;
  disableArrows();
  initialize();
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
      // console.log(questions);
      // make the array accessible outside of this function
      storedQuestions = questions;
      // console.log(storedQuestions);

      //go through the array with a for loop
      for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i].gsx$definition.$t);
        // displayText.innerHTML=questions[i].gsx$definition.$t;
        mainCard.innerHTML = '<p>' + questions[questionCounter].gsx$term.$t + '</p>';
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
    loadQuestions(url_pt1 + apikey + stackSelected + url_pt2);
    stackStarted = true;
    flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP';
    enableArrows();
  } else {
    flipCard();
  }
});

mainCard.addEventListener("click", function () {
  // console.log(storedQuestions);

  enableArrows();

  if (!stackStarted) {
    changeColor();
    loadQuestions(url_pt1 + apikey + stackSelected + url_pt2);
    stackStarted = true;
    flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP';
  } else {
    flipCard();
  }
});

// console.log(termFirst);

function resetColor(){
  mainCard.classList.remove('green');
    mainCard.classList.add('btn-dark');
}

function changeColor(){
  mainCard.classList.add('green');
    mainCard.classList.remove('btn-dark');
}

function flipCard() {
  // console.log(termFirst);
  // console.log(questionCounter);
  changeColor();


  if (termFirst) {
    mainCard.innerHTML = '<def>' + storedQuestions[questionCounter].gsx$definition.$t + '</def>';
    termFirst = false;
  } else {
    mainCard.innerHTML = '<p>' + storedQuestions[questionCounter].gsx$term.$t + '</p>';
    termFirst = true;
  }
}

//event listener for prev button
//for loop that goes through each index
//must reset to last [.length] once it hits the first one
prevBtn.addEventListener("click", function () {
  if (questionCounter > 0) {
    questionCounter--;
  } else {
    questionCounter = storedQuestions.length - 1;
  }

  mainCard.innerHTML = '<p>' + storedQuestions[questionCounter].gsx$term.$t + '</p>';
  // console.log(questionCounter);
});



//event listener for next button
//for loop that goes through each index
//must reset to first [0] once it hits the last one
nextBtn.addEventListener("click", function () {
  termFirst = true;
  // console.log(questionCounter);

  if (questionCounter < storedQuestions.length - 1) {
    questionCounter++;
  } else {
    questionCounter = 0;
  }

  mainCard.innerHTML = '<p>' + storedQuestions[questionCounter].gsx$term.$t + '</p>';
  // console.log(questionCounter);
  // console.log(termFirst);
});
