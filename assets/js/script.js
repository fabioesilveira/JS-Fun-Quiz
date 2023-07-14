



const Questions = [
    {
        q: "Inside which HTML element do we put the Java Script?",
        a: [{ text: '<java script>', isCorrect: false },
        { text: '<js>', isCorrect: false },
        { text: '<scripting>', isCorrect: false },
        { text: '<script>', isCorrect: true }
        ]
    },

    {
        q: "How do you write Hello Word in an alert box?",
        a: [{ text: 'alert("Hello World")', isCorrect: true },
        { text: 'msg("Hello World")', isCorrect: false },
        { text: 'alertBox("Hello World")', isCorrect: false },
        { text: 'msgBox("Hello World")', isCorrect: false }
        ]
    },

    {

        q: "How do you create a function in JavaScript?",
        a: [{ text: 'function = myFunction()', isCorrect: false },
        { text: 'function myFunction()', isCorrect: true },
        { text: 'function:myFunction()', isCorrect: false },
        { text: 'function = myFunction[]', isCorrect: false }
        ]
    },

    {
        q: "How to write an IF statement in JavaScript?",
        a: [{ text: 'if i == 5 then', isCorrect: false },
        { text: 'if (i == 5)', isCorrect: true },
        { text: 'if i = 5', isCorrect: false },
        { text: 'if i = 5 then', isCorrect: false }
        ]
    },


    {
        q: "How does a FOR loop start?",
        a: [{ text: 'for (i <= 5; i++)', isCorrect: false },
        { text: 'for i = 1 to 5', isCorrect: false },
        { text: 'for (i = 0; i <= 5; i++)', isCorrect: true },
        { text: 'for (i = 0; i <= 5)', isCorrect: false }
        ]
    },

    {
        q: "What is the correct way to write a JavaScript array?",
        a: [{ text: 'var colors = (1:"red", 2:"green", 3:"blue")', isCorrect: false },
        { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', isCorrect: false },
        { text: 'var colors = "red", "green", "blue"', isCorrect: false },
        { text: 'var colors = ["red", "green", "blue"]', isCorrect: true }
        ]
    },

    {
        q: "Which operator is used to assign a value to a variable?",
        a: [{ text: 'X', isCorrect: false },
        { text: '-', isCorrect: false },
        { text: '=', isCorrect: true },
        { text: '&', isCorrect: false }
        ]
    },

    {
        q: "How can you add a comment in a JavaScript?",
        a: [{ text: '<!--This is a comment-->', isCorrect: false },
        { text: '"This is a comment"', isCorrect: false },
        { text: '*This is a comment*', isCorrect: false },
        { text: '//This is a comment', isCorrect: true }
        ]
    },

    {
        q: "How do you declare a JavaScript variable?",
        a: [{ text: 'var studentName;', isCorrect: true },
        { text: 'v studentName;', isCorrect: false },
        { text: 'variable studentName;', isCorrect: false },
        { text: 'var <studentName>;', isCorrect: false }
        ]
    },

    {
        q: "What will the following code return: Boolean(10 > 9)",
        a: [{ text: 'NaN', isCorrect: false },
        { text: 'false', isCorrect: false },
        { text: 'true', isCorrect: true },
        { text: 'Undefined', isCorrect: false }
        ]
    },

    {
        q: "How do you round the number 7.25, to the nearest integer?",
        a: [{ text: 'round(7.25)', isCorrect: false },
        { text: 'Math.round(7.25)', isCorrect: true },
        { text: 'rnd(7.25)', isCorrect: false },
        { text: 'Math.rnd(7.25)', isCorrect: false }
        ]
    },


];

let currQuestion = 0
let score = 0
let tick 
let seconds

function countdown() {
        seconds = 60;
        tick = function () {
        var counter = document.getElementById("counter");
        seconds--;
        
        if (seconds > 0) {
           
            setTimeout(tick, 1000);
        } else {
            seconds = 0
            clearInterval(tick)
            document.getElementById("opt").remove()
            document.getElementById("ques").remove()
            document.getElementById("btn").remove()
            loadScore()
        }
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds); 
    }
    tick();
}

function loadQues() {
    const question = document.getElementById("ques")
    const opt = document.getElementById("opt")

    question.textContent = Questions[currQuestion].q;
    opt.innerHTML = ""

    for (let i = 0; i < Questions[currQuestion].a.length; i++) {
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choiceLabel = document.createElement("label");

        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;

        choiceLabel.textContent = Questions[currQuestion].a[i].text;

        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choiceLabel);
        opt.appendChild(choicesdiv);
    }
}

loadQues();

function loadScore() {
    
    const totalScore = document.getElementById("score")
    //TODO : use local storage to store total score
    totalScore.textContent = `You scored ${score} out of ${Questions.length}`
    let btn = document.createElement("button")
    btn.textContent = 'restart quiz'
    btn.addEventListener("click",function (){
        window.location.reload()
    })
    document.getElementById("panel").appendChild(btn)
}


function nextQuestion() {
    if (currQuestion < Questions.length - 1) {
        currQuestion++;
        loadQues();
    } else {
        document.getElementById("opt").remove()
        document.getElementById("ques").remove()
        document.getElementById("btn").remove()
        loadScore();
    }
}

function checkAns() {
    const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

    if (Questions[currQuestion].a[selectedAns].isCorrect) {
        score++;
        console.log("Correct")
        nextQuestion();
    } else {
        seconds = seconds - 10
        nextQuestion();
    }
}

document.getElementById("panel").style = "display:none;"

document.getElementById("submit").addEventListener("click", function (event) {

    countdown()
    document.getElementById("panel").style = "display:block;"
    event.target.style = "display:none;"

})


//local storage