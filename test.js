function checkQuiz(){
 var quizScore = 0
 var question1 = document.querySelector("input[name='q1']:checked").value;
 if (question1 == "jack"){
 quizScore = quizScore + 1
}
var question2 = document.querySelector("input[name='q2']:checked").value;
if (question2 == "eggs"){
quizScore = quizScore + 1
}
var question3 = document.querySelector("input[name='q3']:checked").value;
if (question3 == "Killer"){
quizScore = quizScore + 1
}
var question4 = document.querySelector("input[name='q4']:checked").value;
if (question4 == "resse's"){
quizScore = quizScore + 1
}
var question5 = document.querySelector("input[name='q5']:checked").value;
if (question5 == "doge"){
quizScore = quizScore + 1
}
var question6 = document.querySelector("input[name='q6']:checked").value;
if (question6 == "scare"){
quizScore = quizScore + 1
}
var question7 = document.querySelector("input[name='q7']:checked").value;
if (question7 == "true") {
    quizScore = quizScore + 1
  }
var question8 = document.querySelector("input[name='q8']:checked").value;
if (question8 == "night") {
quizScore = quizScore + 1
}
var question9 = document.querySelector("input[name='q9']:checked").value;
if (question9 == "wolf") {
quizScore = quizScore + 1
}
var question10 = document.querySelector("input[name='q10']:checked").value;
if (question10 == "Mexico") {
quizScore = quizScore + 1
}
var question11 = document.querySelector("input[name='q11']:checked").value;
if (question11 == "gandplenty") {
quizScore = quizScore + 1
}
var question12 = document.querySelector("input[name='q12']:checked").value;
if (question12 == "Ireland") {
quizScore = quizScore + 1
}
var question13 = document.querySelector("input[name='q13']:checked").value;
if (question13 == "zero") {
quizScore = quizScore + 1
}
var question14 = document.querySelector("input[name='q14']:checked").value;
if(question14 == "Ghost Rider"){
  quizScore = quizScore + 1
}
var question15 = document.querySelector("input[name='q15']:checked").value;
if(question15 == "Y"){
  quizScore = quizScore + 1
}
var question16 = document.querySelector("input[name='q16']:checked").value;
if(question16 == "jason"){
  quizScore = quizScore + 1
}
var question17 = document.querySelector("input[name='q17']:checked").value;
if(question17 == "The nightmare b4"){
  quizScore = quizScore + 1
}
var question18 = document.querySelector("input[name='q18']:checked").value;
if(question18 == "jigsaw"){
  quizScore = quizScore + 1
}
var question19 = document.querySelector("input[name='q19']:checked").value;
if(question19 == "Freddy"){
  quizScore = quizScore + 1
}
var question20 = document.querySelector("input[name='q20']:checked").value;
if(question20 == "chuck"){
  quizScore = quizScore + 1
}
alert("Think that was easy...")
alert("Your score is...")
alert(quizScore)  
}
