var opener=document.querySelector(".opener")
var start=document.querySelector(".start")
var questionContainer=document.querySelector(".questionContainer")
var timer=document.querySelector(".timer")
var question=document.querySelector(".question")
var answers=document.querySelector(".answers")
var startTime=60
var questionIndex=0
var interval=0
var score = 0

var questions= [
  {
    question: "What is 2 + 2?",
    choices: ["2", "7", "4", "9"],
    correctAnswer: "4"
  },
  {
    question: "What is 4 + 4?",
    choices: ["2", "7", "4", "8"],
    correctAnswer: "8"
  },
  {
    question: "What is 1 + 1?",
    choices: ["2", "8", "4", "3"],
    correctAnswer: "2"
  },
  {
    question: "What is 5 + 5?",
    choices: ["2", "7", "10", "8"],
    correctAnswer: "10"
  }
]

start.addEventListener("click", function(){
  opener.style.display = "none"
  
  if (interval===0){
    interval=setInterval(function(){
      startTime--
      timer.innerHTML = "Time: " + startTime
      if (startTime<=0){
        clearInterval(interval)
        timer.innerHTML = "Time Up"
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
