// declare variables to follow the quiz steps 
var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

// Referencing DOM elements
var timerEl = document.getElementById("time");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var feedbackEl = document.getElementById("feedback");
var submitBtn = document.getElementById("submit");
var initialsEl = document.getElementById("initials");


function startQuiz() {
  // start screen to hide 
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // questions to show (unhide)
  questionsEl.removeAttribute("class");

  // start the timer
  timerId = setInterval(clockTick, 1000);

  // show the time 
  timerEl.textContent = time;

  getQuestion();
}

function getQuestion() {
  // show current question from array
  var currentQuestion = questions[currentQuestionIndex];

  // update title with a current question
  var titleEl = document.getElementById("question-title");
  titleEl.textContent = currentQuestion.title;

  // remove any old input from choices 
  choicesEl.innerHTML = "";

  // loop 
  currentQuestion.choices.forEach(function(choice, i) {
    //  new button for each choice
    var choiceNode = document.createElement("button");
    choiceNode.setAttribute("class", "choice");
    choiceNode.setAttribute("value", choice);

    choiceNode.textContent = i + 1 + ". " + choice;

    // adding a click event listener to every choice
    choiceNode.onclick = questionClick;

    // To display on the page 
    choicesEl.appendChild(choiceNode);
  });
}

function questionClick() {
  // check if user answered wrong
  if (this.value !== questions[currentQuestionIndex].answer) {
    // Deducting time for a wrong answer
    time -= 10;

    if (time < 0) {
      time = 0;
    }

    // Displaying a new time 
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
  } else {
    feedbackEl.textContent = "Correct!";
  }

  // showing if the answer was right/wrong on page
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 1000);

  // next question
  currentQuestionIndex++;

  // Do we have more questions to ask?
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}

function quizEnd() {
  // end the timer 
  clearInterval(timerId);

  // display the end screen 
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");

  // display final score 
  var finalScoreEl = document.getElementById("final-score");
  finalScoreEl.textContent = time;

  // hide questions
  questionsEl.setAttribute("class", "hide");
}

function clockTick() {
  // update timer 
  time--;
  timerEl.textContent = time;

  // Do we have more time?
  if (time <= 0) {
    quizEnd();
  }
}

function saveHighscore() {
  // whats the value from input box
  var initials = initialsEl.value.trim();

  // value cant be empty 
  if (initials !== "") {
    // pull scores from localstorage, if none yet -  set to empty array
    var highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];

    // use a format for a new score 
    var newScore = {
      score: time,
      initials: initials
    };

    // Save to local 
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    // redirect to a score page
    window.location.href = "highscores.html";
  }
}

function checkForEnter(event) {
  // Reterning value 
  if (event.key === "Enter") {
    saveHighscore();
  }
}

// submit initials
submitBtn.onclick = saveHighscore;

// start quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
