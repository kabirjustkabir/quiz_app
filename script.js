const quizData = [
    {
        question : "how old are you",
        a : "10",
        b : "20",
        c : "30",
        d : "40",
        correct : 'c'
    },

    {
        question : "Sultan Azlan Shah Cup is related to which among the following Sports?",
        a : "Badminton",
        b : "Hockey",
        c : "Table Tennis",
        d : "Golf",
        correct : 'b'
    },
    {
        question : "Which Indian umpire has been recently promoted as umpire for International Hockey Federation (FIH)?",
        a : "Deepika Kaul",
        b : "Napoleon Singh",
        c : "Satinder Sharma",
        d : "Durga Thakur",
        correct : 'd'
    },
];

const questionEl = document.getElementById('question');
const text_a=document.getElementById('text_a');
const text_b=document.getElementById('text_b');
const text_c=document.getElementById('text_c');
const text_d=document.getElementById('text_d');
const submitBtn = document.getElementById('btn');

const answersEl = document.querySelectorAll(".answer");

const quiz = document.getElementById("quiz");

var currentQuiz = 0;
var score=0;

loadQuiz();

function loadQuiz(){
    deSelected();
    const currentQuestion = quizData[currentQuiz];
    questionEl.innerHTML = currentQuestion.question ;

    text_a.innerText = currentQuestion.a;
    text_b.innerText = currentQuestion.b;
    text_c.innerText = currentQuestion.c;
    text_d.innerText = currentQuestion.d;    
};
let answer=undefined;
function getSelected(){
    
    answersEl.forEach((answerEl)=>{
        if(answerEl.checked){
            answer =  answerEl.id;
        }
        
    })
    return answer;
}

function deSelected(){
    answersEl.forEach((answerEl)=>{
        answerEl.checked = false;
    });
};
submitBtn.addEventListener("click",() => {

    const answer = getSelected();

    if(answer){
        
        if (answer === quizData[currentQuiz].correct)
        {

            score++;
            console.log(score);
        }
        currentQuiz++;
        if (currentQuiz < quizData.length)
        {
            // answer = undefined;
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>You Correctly Answer ${score} Out Of ${quizData.length}.</h2>
            <button onclick="location.reload()">Reload</button>`

        }
    }

    // if (currentQuiz<quizData.length)
    // {
    //     currentQuiz ++;
    //     loadQuiz();
    // }
    // else{
    //     alert("you are Finished !!!")
    // }
    
});

