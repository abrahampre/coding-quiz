


var btnEl = window.document.querySelector(".list-answers");
var question = document.querySelector(".questionAsked");
var areaForQuestions = document.getElementById("answers-area")
//removing existing from main page
var startQuizBtnEl = document.getElementById("list-replace");
var existingQuestion = document.getElementById("replace");
// VAR FOR ALL QUESTIONS AND ANSWERS//

var quizQuestions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "c"},
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
   {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"},
    {
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "d"},
    {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"},  
    {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"},
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"}, 
];


// INSERTING BUTTONS TO THE PAGE 
var  insertingListButtonsEl =function(){
  
 alert("button clicked againnnn");

 //removing existing button and questions//
 existingQuestion.remove();
 startQuizBtnEl.remove();

 //introducing Questions
 var newQuestionEl = document.createElement("h1");
 newQuestionEl.textContent=("What is your name?");
 newQuestionEl.className=("individual-questions");
 question.appendChild(newQuestionEl);
 // INTRODUCING THE FOUR OPTIONS BUTTONS///
 var answerA = document.createElement("li");
 answerA.textContent= (" sdaflkasdlfalsdflasdkflaskdflkasldk                 asldfasldfklsadf ");
 answerA.className=("answers-area");
 areaForQuestions.appendChild(answerA);

 var answerB = document.createElement("li");
 answerB.textContent= ("this is answer B");
 answerB.className=("answers-area");
 areaForQuestions.appendChild(answerB);

 var answerC = document.createElement("li");
 answerC.textContent= ("this is answer C");
 answerC.className=("answers-area");
 areaForQuestions.appendChild(answerC);

 var answerD = document.createElement("li");
 answerD.textContent= ("this is answer D");
 answerD.className=("answers-area");
 areaForQuestions.appendChild(answerD);
 
}

// var insertQuestionsEl= quizQuestions[]{
//     for(i=0; i<10; i++){
//         console.log(quizQuestions[i]);
//     }]




btnEl.addEventListener("click", insertingListButtonsEl);

// ("click", function(){
//     alert("buttonclicked");
// });