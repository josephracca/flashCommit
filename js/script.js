// alert('Good!');

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

document.getElementById("nextBtn").disabled = true;
document.getElementById("prevBtn").disabled = true;
document.getElementById("flipBtn").disabled = true;

function enableBtn() {
	document.getElementById("nextBtn").disabled = false;
	document.getElementById("prevBtn").disabled = false;
	document.getElementById("flipBtn").disabled = false;
}

function initialize() {
	enableBtn();
	stackStarted = false;
  flipBtn.innerText = "click to start";
}

//event listeners for each stack
csStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>C#</h1>";
  stackSelected = sheet1;
  initialize();
});

htmlStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>html</h1>";
  stackSelected = sheet2;
  initialize();

  //   loadQuestions(url_pt1 + apikey + sheet2 + url_pt2);
});

cssStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>css</h1>";
  stackSelected = sheet3;
  initialize();

  //   loadQuestions(url_pt1 + apikey + sheet3 + url_pt2);
});

javascriptStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>javascript</h1>";
  stackSelected = sheet4;
  initialize();

  //   loadQuestions(url_pt1 + apikey + sheet4 + url_pt2);
});

bootstrapStack.addEventListener("click", function () {
  mainCard.innerHTML = "<h1>bootstrap</h1>";
  stackSelected = sheet5;
  initialize();

  //   loadQuestions(url_pt1 + apikey + sheet5 + url_pt2);
});

//change the number above to coincide with the sheet

let storedQuestions = [];
let questionCounter = 0;

//for reference: https://docs.google.com/spreadsheets/d/e/2PACX-1vRMgNqCB-AH4-sHFqH3MX_0gwE6BscoBPm1IODYNI3OCInq0Ftwc6Io8stq-_bZL6Pi-n_ZKc4R4jdu/pubhtml

//pull from google sheet URL
function loadQuestions(url) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      console.log(JSON.parse(this.responseText));

      //start by making it a variable
      let questions = JSON.parse(this.responseText).feed.entry;
      console.log(questions);

      storedQuestions = questions;
      console.log(storedQuestions);

      //go through the array witha  for loop
      for (let i = 0; i < questions.length; i++) {
        // console.log(questions[i].gsx$definition.$t);
        // displayText.innerHTML=questions[i].gsx$definition.$t;
        mainCard.innerText = questions[i].gsx$term.$t;
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
    flipBtn.innerText = "FLIP";
  } else {
    flipCard();
  }
});

mainCard.addEventListener("click", function () {
  if (!stackStarted) {
    loadQuestions(url_pt1 + apikey + stackSelected + url_pt2);
    stackStarted = true;
    flipBtn.innerText = "FLIP";
  } else {
    flipCard();
  }
});

console.log(termFirst);

function flipCard() {
  console.log(termFirst);

  if (termFirst) {
    mainCard.innerText = storedQuestions[questionCounter].gsx$definition.$t;
    termFirst = false;
  } else {
    mainCard.innerText = storedQuestions[questionCounter].gsx$term.$t;
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

  mainCard.innerText = storedQuestions[questionCounter].gsx$term.$t;
  console.log(questionCounter);
});

console.log(questionCounter);

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

  mainCard.innerText = storedQuestions[questionCounter].gsx$term.$t;
  console.log(questionCounter);
  console.log(termFirst);
});

//event listener for stacks button
//this will pull the correct sheet from the spreadsheet
