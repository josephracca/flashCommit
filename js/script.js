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
let sheet6 = "/6";
let sheet7 = "/7";
let stackSelected = "";
let stackPicked = false;

let csStack = document.getElementById("csStack");
let htmlStack = document.getElementById("htmlStack");
let cssStack = document.getElementById("cssStack");
let javascriptStack = document.getElementById("javascriptStack");
let bootstrapStack = document.getElementById("bootstrapStack");
let reactStack = document.getElementById("reactStack");
let angularStack = document.getElementById("angularStack");

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
    "col-12",
    "col-sm-4",
    "px-4",
    "px-lg-5",
    "pt-4",
    "pt-lg-5"
  );

  flashCard.classList = "col-12 pt-5";
}

function openLibrary() {
  stacksMenu.classList.add("slideRight");

  stacks.classList.remove("d-none");
  libraryOpen = true;
  closeBtn.classList.remove("d-none");
  stacksheader.classList.remove("d-none");
  stacksMenu.classList.add(
    "col-12",
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
  // closeLibrary();
  enableBtns();
  stackStarted = false;
  flipBtn.innerText = "click to start";
  resetColor();
  position.innerText = "";
  questionCounter = 0;
  category.innerText = "New stack selected...";
}

csStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>C#</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet1;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("csColor");

  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>C#</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("csColor");
  stackPicked = true;
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
  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>html</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("htmlColor");
  stackPicked = true;
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
  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>css</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("cssColor");
  stackPicked = true;
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
  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>javascript</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("jsColor");
  stackPicked = true;
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
  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>bootstrap</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("bootstrapColor");
  stackPicked = true;
});

reactStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>react</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet6;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("reactColor");
  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>react</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("reactColor");
  stackPicked = true;
});

angularStack.addEventListener("click", function () {
  mainCard.innerHTML =
    "<h1>angular</h1><div class='centerAlign'>(click to start)</div>";
  stackSelected = sheet7;
  disableArrows();
  initialize();
  mainCard.classList =
    "btn btn-dark justify-content-center m-2 p-2 p-md-4 p-lg-5 shadow";
  mainCard.classList.add("angularColor");
  // FOR ANIMATED CARD
  frontCard.innerHTML =
    "<h1>angular</h1><div class='centerAlign'>(click to start)</div>";
  frontCard.classList =
    "card__face card__face--front btn btn-dark justify-content-center p-3 p-lg-5";
  frontCard.classList.add("angularColor");
  stackPicked = true;
});

function loadQuestions(url) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let questions = JSON.parse(this.responseText).feed.entry;
      let stackName = JSON.parse(this.responseText).feed.title.$t;

      storedQuestions = questions;
      nowStudying = stackName;

      positionDisplay();
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

let termFirst = true;

function displayFirst() {
  enableArrows();
  stackStarted = true;
  loadQuestions(url_pt1 + apikey + stackSelected + url_pt2);
  console.log(url_pt1 + apikey + stackSelected + url_pt2);
  var delayInMilliseconds = 1000;

  setTimeout(function () {
    mainCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    changeColor(storedQuestions[questionCounter].gsx$color.$t);

    fillFront();
    function fillFront() {
      frontCard.innerHTML =
        "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    }
    changeColor(storedQuestions[questionCounter].gsx$color.$t);
  }, delayInMilliseconds);

  setTimeout(function () {
    flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP OVER';
  }, delayInMilliseconds);
}

mainCard.addEventListener("click", function () {
  if (!stackStarted) {
    displayFirst();
  } else {
    flipCard();
  }
});

function resetColor() {
  mainCard.classList.remove("green", "blue", "pink");
  mainCard.classList.add("btn-dark");
}

function changeColor(color) {
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

  // FOR ANIMATED CARD
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

function flipBack() {
  flipBtn.classList.remove("btn-dark");
  flipBtn.classList.add("btn-light");
  flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP BACK';
}

function flipOver() {
  flipBtn.classList.remove("btn-light");
  flipBtn.classList.add("btn-dark");
  flipBtn.innerHTML = '<i class="fas fa-sync-alt"></i> FLIP OVER';
}

function flipCard() {
  changeColor(storedQuestions[questionCounter].gsx$color.$t);

  if (termFirst) {
    mainCard.innerHTML =
      "<def>" + storedQuestions[questionCounter].gsx$definition.$t + "</def>";
    termFirst = false;

    flipBack();

    fillBack();
  } else {
    mainCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    termFirst = true;
    flipOver();
  }
}

function positionDisplay() {
  console.log(questionCounter);
  let currentQ = questionCounter + 1;
  let totalQ = storedQuestions.length.toString();

  position.innerText = currentQ + " / " + totalQ;
  category.innerText = "currently studying: " + nowStudying;
}

prevBtn.addEventListener("click", function () {
  if (stackStarted) {
    termFirst = true;
    flipOver();
    if (questionCounter > 0) {
      questionCounter--;
    } else {
      questionCounter = storedQuestions.length - 1;
    }

    mainCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";

    // FOR ANIMATED CARD
    fillFront();
    function fillFront() {
      frontCard.innerHTML =
        "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
    }
    fillBack();
    changeColor(storedQuestions[questionCounter].gsx$color.$t);

    positionDisplay();
  } else {
  }
});

function fillBack() {
  backCard.innerHTML =
    "<def>" + storedQuestions[questionCounter].gsx$definition.$t + "</def>";
}

function fillFront() {
  frontCard.innerHTML =
    "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";
}

nextBtn.addEventListener("click", function () {
  if (stackStarted) {
    termFirst = true;

    flipOver();

    if (questionCounter < storedQuestions.length - 1) {
      questionCounter++;
    } else {
      questionCounter = 0;
    }

    mainCard.innerHTML =
      "<p>" + storedQuestions[questionCounter].gsx$term.$t + "</p>";

    // FOR ANIMATED CARD
    fillFront();
    fillBack();
    changeColor(storedQuestions[questionCounter].gsx$color.$t);
    positionDisplay();
  } else {
  }
});

let card = document.querySelector(".card");
card.addEventListener("click", function () {
  if (stackPicked) {
    newFlipCard();
  } else {
  }
});

flipBtn.addEventListener("click", function () {
  if (!stackPicked) {
  } else {
    newFlipCard();
  }
});

function newFlipCard() {
  if (!stackStarted) {
    displayFirst();
  } else {
    flipCard();
    card.classList.toggle("is-flipped");
  }
}
