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
if (question3 == "killer"){
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
if (question6 == "Scare"){
quizScore = quizScore + 1
}
var question7 = document.querySelector("input[name='q7']:checked").value;
if (question7 == "true"){
    quizScore = quizScore - 1
  }
quizScore = quizScore + 1
}
var question8 = document.querySelector("input[name='q8']:checked").value;
if (question8 == "NBC"){
quizScore = quizScore + 1
}
var question9 = document.querySelector("input[name='q9']:checked").value;
if (question9 == "wolf"){
quizScore = quizScore + 1
}
var question10 = document.querySelector("input[name='q10']:checked").value;
if (question10 == "mex"){
quizScore = quizScore + 1
}
alert("think that was easy?")
  alert("YOUR SCORE IS...")
  alert(quizScore)
