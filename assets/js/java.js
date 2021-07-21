


var btnEl = window.document.querySelector(".btn-start");
var question = document.querySelector(".questionAsked");

var  startQuiz =function(event){
  
 alert("button clicked againnnn");
 debugger;
 var newQuestion = document.createElement("h1");
 newQuestion.textContent=("What is your name?");
 newQuestion.className=("btn-start");
 question.appendChild(newQuestion);
 event.stopPropagation;
}

btnEl.addEventListener("click", startQuiz);

// ("click", function(){
//     alert("buttonclicked");
// });