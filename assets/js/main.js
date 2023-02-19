var opener=document.querySelector(".opener")
var start=document.querySelector(".start")
var questionContainer=document.querySelector(".questionContainer")
var timer=document.querySelector(".timer")
var question=document.querySelector(".question")
var answers=document.querySelector(".answers")
var questionResult = document.querySelector("#question-results")
var startTime=60
var questionIndex=0
var interval=0
var score = 0

var questions= [
  {
    question: "Which one is not a primitive value type in js?",
    choices: ["String", "Number", "Boolean", "Array"],
    correctAnswer: "Array"
  },
  {
    question: "Which prefix cannot convert the number in String type to the Number type in js?",
    choices: ["+", "number", "parseInt", "%"],
    correctAnswer: "%"
  },
  {
    question: "What can you use to list the itmes in the js?",
    choices: ["Number", "Boolean", "Array", "object"],
    correctAnswer: "Array"
  },
  {
    question: "What separates js from other languages?",
    choices: ["Being static", "Being dynamic", "Being stron", "Being hard"],
    correctAnswer: "Being dynamic"
  }
]

start.addEventListener("click", function(){
  opener.style.display = "none"
  questionContainer.style.display = "block"
  if (interval===0){
    interval=setInterval(function(){
      startTime--
      timer.innerHTML = "Time: " + startTime
      if (startTime<=0){
        clearInterval(interval)
        timer.innerHTML = "Time Up"
        questionResult.style.display = "block"
      }
    }, 1000)
  }
  startQuiz(questionIndex)
})

function startQuiz(questionIndex) {
  question.innerHTML = ""
  answers.innerHTML = ""
  var userQuestion = questions[questionIndex].question;
  var userAnswers =  questions[questionIndex].choices
  question.innerHTML = userQuestion
  userAnswers.forEach(function(nextAnswer) {
  let listItem = document.createElement("li")
  listItem.innerHTML = nextAnswer
  answers.appendChild(listItem)
  listItem.addEventListener("click", (compare))
  })
}

 function compare(event) {
  let clicked = event.target;
  if(clicked.matches("li")) {
    if(clicked.textContent === questions[questionIndex].correctAnswer) {
      console.log("correct")
      score++
    } else {
      console.log("wrong")
      startTime -= 10
      score--
      if (score <= 0) {
        score = 0
      }
    }
    
      
    }
    questionIndex++ 
    if (questionIndex >= questions.length) {
      console.log("quiz is over")
      answers.innerHTML = ""
      question.innerHTML = "quiz is over!"
  } else {
    startQuiz(questionIndex)
  }
  
}
const style = document.getElementsByClassName("opener");
style.textContent =`
.opener{
  background-color: salmon;
  color: teal;
}
`
(element, {
  background: "teal",
  color: "brown"
})



