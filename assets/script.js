function countdown() {
    var seconds = 60;
    function tick(){
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0 ) {
            setTimeout (tick, 1000);
        } else {
            clearInterval(tick)
    }
}
    tick();
}
countdown();


var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

submitButton.addEventListener("click", function(){
	showResults(myQuestions, quizContainer, resultsContainer);
})



//generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function showQuestions(questions, thisQuizContainer){
    thisQuizContainer = quizContainer
	questions = myQuestions
	var output = [];
	var answers;

	
	for(var i=0; i<questions.length; i++){
		
		
		answers = [];

		
		for(letter in questions[i].answers){

			
			answers.push(
				'<label>'
					+ '<input id="answer'+letter+'" type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		
		output.push(
            '<button class="submit-answer">submit</button>' +
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>' 

		);

	}
	quizContainer.innerHTML = output.join('');
    document.querySelector(".submit-answer").addEventListener("click", function(){
        console.log(this.value)

    })
}

var myQuestions = [
	{
		question: "Inside which HTML element do we put the Java Script?",
		answers: {
			a: '<java script>',
			b: '<js>',
			c: '<scripting>',
            d: '<script>'
		},
		correctAnswer: 'd'
	},
	{
		question: "How do you write Hello Word in an alert box?",
		answers: {
			a: 'alert("Hello World")',
			b: 'msg("Hello World")',
			c: 'alertBox("Hello World")',
            d: 'msgBox("Hello World")'
		},
		correctAnswer: 'a'
	},
    {

        question: "How do you create a function in JavaScript?",
        answers: {
            a: 'function = myFunction()',
            b: 'function myFunction()',
            c: 'function:myFunction()',
            d: 'function = myFunction[]'
        },
        correctAnswer: 'b'

    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: 'if i == 5 then',
            b: 'if (i == 5)',
            c: 'if i = 5',
            d: 'if i = 5 then'
        },
        correctAnswer: 'b'
    },
    {
        question: "How to write an IF statement for executing some code if i is NOT equal to 5?",
        answers: {
            a: 'if (i != 5)',
            b: 'if i <> 5',
            c: 'if (i <> 5)',
            d: 'if i =! 5 then'
        },
        correctAnswer: 'a'
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: 'for (i <= 5; i++)',
            b: 'for i = 1 to 5',
            c: 'for (i = 0; i <= 5; i++)',
            d: 'for (i = 0; i <= 5)'
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: 'var colors = (1:"red", 2:"green", 3:"blue")',
            b: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            c: 'var colors = "red", "green", "blue"',
            d: 'var colors = ["red", "green", "blue"]'
        },
        correctAnswer: 'd'
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        answers: {
            a: 'X',
            b: '-',
            c: '=',
            d: '&'
        },
        correctAnswer: 'c'
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: '<!--This is a comment-->',
            b: '"This is a comment"',
            c: '*This is a comment*',
            d: '//This is a comment'
        },
        correctAnswer: 'd'
    },
    {
        question: "How do you declare a JavaScript variable?",
        answers: {
            a: 'var studentName;',
            b: 'v studentName;',
            c: 'variable studentName;',
            d: 'var <studentName>;'
        },
        correctAnswer: 'a'
    },
    {
        question: "What will the following code return: Boolean(10 > 9)",
        answers: {
            a: 'NaN',
            b: 'false',
            c: 'true',
            d: 'Undefined'
        },
        correctAnswer: 'c'
    },
    {
        question: "How do you round the number 7.25, to the nearest integer?",
        answers: {
            a: 'round(7.25)',
            b: 'Math.round(7.25)',
            c: 'rnd(7.25)',
            d: 'Math.rnd(7.25)'
        },
        correctAnswer: 'b'
    }

];




// showQuestions(myQuestions, quizContainer);

function showResults(questions, quizContainer, resultsContainer){
	
	
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	
	var userAnswer = '';
	var numCorrect = 0;
	
	
	for(var i=0; i<questions.length; i++){

		
		// userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		
		if(userAnswer===questions[i].correctAnswer){
			
			numCorrect++;
			
			
			answerContainers[i].style.color = 'lightgreen';
		}
		
		else{
			
			// answerContainers[i].style.color = 'red';
		}
	}

	
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}



submitButton.addEventListener("click", showQuestions)