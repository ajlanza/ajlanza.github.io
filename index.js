// all questions with answer choices and correct answer
const questions = [ {
    question: 'What is glass made from?',
    possibleAnswers: ['Sand', 'Milk', 'Squirrels', 'Magnets'],
    correctAnswer: 'A'
    },
    { question: 'What is glass formed by lightning strikes known as?',
    possibleAnswers: ['Fulgerites', 'Eons', 'Thimbles', 'Attrition'],
    correctAnswer: 'A'
    },
    { question: 'What state of matter is glass?',
    possibleAnswers: ['Delta Wave', 'Gamma Ray', 'Liquid', 'Amorphous Solid'],
        correctAnswer: 'D'
    },
    {  question: 'How much pressure is required to score glass?',
    possibleAnswers: ['David Bowie', '6 pounds', '2 tons', '7 atmospheres'],
    correctAnswer: 'B'
    },
    {  question: ' How long is it estimated that it takes a glass bottle to decompose in the environment?',
    possibleAnswers: ['1 million years', '2 miles', '3 decades', '4 calling birds'],
    correctAnswer: 'A'
    },
];
//Set initial variables
let questionNumber = 0;
let score = 0;

//See what to do when our button is clicked
$('button').on("click", (function (event) {
    
    let classNow = $(this).attr("class");
    console.log(classNow);
    //when quiz starts show the stats and start asking questions
    if (classNow === "start") {
        
        //console.log("start button pushed");
        updateStats();
        populateQuestion();
        changeButton(classNow);
    }
    //when user submits an answer check to see if it's correct
    else if (classNow === "submitAnswer") {
        //console.log("submit answer button pushed");
        checkAnswer();
        
    }
    //when user has answered, prompt for the next question
    else if (classNow === "nextQuestion") {
        //console.log("next question button pushed");
        questionNumber++;
        if (questionNumber > 4) {
            restartQuiz();

        }
        else {
        updateStats();
        populateQuestion();
        changeButton(classNow);
        } 
    }
}));

  function changeButton(whatClass){
    if (whatClass === "start") {
        $('button').toggleClass("start submitAnswer");
        $('button').text('Submit Answer');
      } 
    else if (whatClass === "submitAnswer"){
        //run code to submit and check answer
        //console.log("submitAnswer if ran");
        $('button').toggleClass("submitAnswer nextQuestion");
        $('button').text('Next Question');
    }
    else if (whatClass === "nextQuestion"){
        //run code to get next question
        //console.log("nextQuestion if ran");
        $('button').toggleClass("nextQuestion submitAnswer");
        $('.feedback').text("");
        $('button').text("Submit Answer")
    }
  }

  function populateQuestion() {
    $(".insertQuestion").html(
        `<li>${questions[questionNumber].question}</li>
         <li><input type='radio' id='A' name='answer' value='A'>
         <label for="${questions[questionNumber].possibleAnswers[0]}">${questions[questionNumber].possibleAnswers[0]}</li>
         <li><input type='radio' id='B' name='answer' value='B'>
         <label for="${questions[questionNumber].possibleAnswers[1]}">${questions[questionNumber].possibleAnswers[1]}</li>
         <li><input type='radio' id='C' name='answer' value='C'>
         <label for="${questions[questionNumber].possibleAnswers[2]}">${questions[questionNumber].possibleAnswers[2]}</li>
         <li><input type='radio' id='D' name='answer' value='D'>
         <label for="${questions[questionNumber].possibleAnswers[3]}">${questions[questionNumber].possibleAnswers[3]}</li>`);
        }

  function updateStats() {
    $(".score").text(`Question: ${questionNumber+1} of 5   Score: ${score}`);
  }

  function checkAnswer(){
    //make sure a radio button has been selected
    if ($('input[name=answer]:checked').length > 0) {    
        let selected = $('input:checked');
        let answer = selected.val();
        let correct = questions[questionNumber].correctAnswer;
    //console.log(answer);
    //console.log(correct);
        if (answer === correct) {
         //console.log("You got it right!");
          score++;
         $('.feedback').text('Correct!')
         updateStats();
         changeButton("submitAnswer");
         $("body").removeClass("building broken");
         $("body").addClass("stained");
    }
        else if (answer != correct) {
            //console.log("You are incorrect.");
         $('.feedback').text(`The correct answer is ${questions[questionNumber].correctAnswer}.`)
         updateStats();
         changeButton("submitAnswer");
         $("body").removeClass("building stained");
         $("body").addClass("broken");
        }
  }
  else {
      alert("Please select an answer to proceed.");
    }
  }

  function nextQuestion(){
      updateStats();
      populateQuestion();
      $(".feedback").text("");
  }

  function restartQuiz(){
    questionNumber = 0;
    $(".score").text(`You scored ${score} out of 5.`);
    score = 0;
    $(".insertQuestion").text('Would you like to take the quiz again?')
    $(".feedback").text("");
    $('button').toggleClass("start nextQuestion");
    $('button').text("Start Over")
    $("body").removeClass("stained broken").addClass("building");
  }