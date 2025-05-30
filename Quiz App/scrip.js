const questions=[
    {
        quesion:'Which is largest animal in the world?',
        answers:[
            {text: "Shark",correct: false},
            {text: "Blue whale",correct: true},
            {text: "Elephant",correct: false},
            {text: "Giraffe",correct: false},
        ]
    },{
        quesion:'Which is the smallest country in the world?',
        answers:[
            {text: "Vetican City",correct: true},
            {text: "Bhutan",correct: false},
            {text: "Nepal",correct: false},
            {text: "Bangladesh",correct: false},
        ]
        
    },{
        quesion:'Which is the largest desert in the world?',
        answers:[
            {text: "Kalahari",correct: false},
            {text: "Gobi",correct: false},
            {text: "Sahara",correct: false},
            {text: "Antartica",correct: true},
        ]
        
    },{
        quesion:'Which is the smallest continent in the world?',
        answers:[
            {text: "Asia",correct: false},
            {text: "Australia",correct: true},
            {text: "Arctic",correct: false},
            {text: "Africa",correct: false},
        ]

    }
];
const questionElement=document.getElementById('question');
const answerButton=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestions();
}
function showQuestions(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.quesion;
    currentQuestion.answers.forEach(answers =>{
        const button=document.createElement("button");
        button.innerHTML=answers.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct=='true';
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct=="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display='block';
}
function handleNextButtun(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML='Play again?';
    nextButton.style.display='block';
}
nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButtun();
    }else{
        startQuiz();
    }





})
startQuiz();