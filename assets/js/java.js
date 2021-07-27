


var btnEl = window.document.querySelector(".list-answers");
var clickedAnswerEl = ""; //window.document.querySelector(".indiv-answers-area");
var questionSpace = document.querySelector(".questionAsked");
var areaForQuestions = document.getElementById("answers-area")
//removing existing from main page
var startQuizBtnEl = document.getElementById("list-replace");
var existingQuestion = document.getElementById("replace");
// VAR FOR ALL QUESTIONS AND ANSWERS//
var answerA="";
var answerB="";
var answerC="";
var answerD="";
var answerSelected = "";
var questionRound = 0
var gradedAnswer = ""

function increaseQuestionRound  (){
    questionRound = questionRound+1;
};

// var seconds = document.getElementById("countdown").textContent;
// var countdown = setInterval(function() {
//     seconds--;
//     document.getElementById("countdown").textContent = seconds;
//     if (seconds <= 0) clearInterval(countdown);
// }, 1000);

var quizQuestionsEl = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "3"},
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "1"},
   {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python", 
    choiceD: "React.js",
    correctAnswer: "2"},
    {
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "4"},
    {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "1"},  
    {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "3"},
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "2"}
];

function generateQuizQuestion(){
  
    var currentQuestion = quizQuestionsEl[questionRound];
    questionSpace.innerHTML = currentQuestion.question;
    answerA.innerHTML = currentQuestion.choiceA;
    answerB.innerHTML = currentQuestion.choiceB;
    answerC.innerHTML = currentQuestion.choiceC;
    answerD.innerHTML = currentQuestion.choiceD;
};

function clickingAnswersA (){

    clickingAnswersA=1;
    answerSelected = clickingAnswersA;
    console.log(1);
    if (quizQuestionsEl[questionRound]["correctAnswer"] == answerSelected){
        alert("correct answer!");
        increaseQuestionRound();
        generateQuizQuestion();
        return(answerSelected = true);
    }else{
        alert("wrong answer!!");
        increaseQuestionRound();
        generateQuizQuestion();
        return(answerSelected =false);
    };

};

function clickingAnswersB (){

   clickingAnswersB = 2; 
   answerSelected=clickingAnswersB;
   console.log(2)
   if (quizQuestionsEl[questionRound]["correctAnswer"] == answerSelected){
        alert("correct answer!");
        increaseQuestionRound();
        generateQuizQuestion();
        return(answerSelected = true);
    }else{
        alert("wrong answer!!");
        increaseQuestionRound();
        generateQuizQuestion();
        return(answerSelected =false);
    };

};

function clickingAnswersC (){
    clickingAnswersC = 3; 
    answerSelected = clickingAnswersC;
    console.log(3);
     if (quizQuestionsEl[questionRound]["correctAnswer"] == answerSelected){
    alert("correct answer!")
    increaseQuestionRound();
    generateQuizQuestion();
    return(answerSelected = true);
    }else{
    alert("wrong answer!!")
    increaseQuestionRound();
    generateQuizQuestion();
    return(answerSelected =false);
    }
};

function clickingAnswersD (){
   clickingAnswersD = 4;
   answerSelected=clickingAnswersD;
   console.log(4)
    if (quizQuestionsEl[questionRound]["correctAnswer"] == answerSelected){
    alert("correct answer!")
    increaseQuestionRound();
    generateQuizQuestion();
    return(answerSelected = true);
    }else{
    alert("wrong answer!!")
    increaseQuestionRound();
    generateQuizQuestion();
    return(answerSelected =false);
    }
};


// INSERTING BUTTONS TO THE PAGE 
function insertingListForButtonsSpaceEl (){
  
 

 //removing existing button and questions//
 existingQuestion.remove();
 startQuizBtnEl.remove();

 //introducing Questions
 newQuestionEl = document.createElement("h1");
 newQuestionEl.textContent=("What is your name?");
 newQuestionEl.className=("individual-questions");
 questionSpace.appendChild(newQuestionEl);
 // INTRODUCING THE FOUR OPTIONS BUTTONS///
 answerA = document.createElement("li");
 answerA.textContent= (" sdaflkasdlfalsdflasdkflaskdflkasldk                 asldfasldfklsadf ");
 answerA.className=("answers-a");
 answerA.setAttribute('id','1');
 areaForQuestions.appendChild(answerA);

 answerB = document.createElement("li");
 answerB.textContent= ("this is answer B");
 answerB.className=("answers-b");
 answerB.setAttribute('id','2')
 areaForQuestions.appendChild(answerB);

 answerC = document.createElement("li");
 answerC.textContent= ("this is answer C");
 answerC.className=("answers-c");
 answerC.setAttribute('id','3');
 areaForQuestions.appendChild(answerC);

 answerD = document.createElement("li");
 answerD.textContent= ("answers-d");
 answerD.className=("answers-d");
 answerD.setAttribute('id','4');
 areaForQuestions.appendChild(answerD);
   
};

function pickingQuestions(){

    clickOnA =window.document.querySelector(".answers-a");
    clickOnA.addEventListener("click", clickingAnswersA);
   
    clickOnB =window.document.querySelector(".answers-b");
    clickOnB.addEventListener("click", clickingAnswersB);
   
    clickOnC =window.document.querySelector(".answers-c");
    clickOnC.addEventListener("click", clickingAnswersC);
   
    clickOnD =window.document.querySelector(".answers-d");
    clickOnD.addEventListener("click", clickingAnswersD);

};
 


var startQuiz = function (){
    
    insertingListForButtonsSpaceEl();
    // for (i=0; questionRound<=7;questionRound++){
    // generateQuizQuestion();
    // pickingQuestions ();
    // }
   
// 
    generateQuizQuestion();

    pickingQuestions();

    
};

btnEl.addEventListener("click", startQuiz);
