const questions = [
    {
        question: " What is teamwork?",
        answers: [
            {text: "a) Doing everything alone",correct:false},
            {text: "b) Ignoring others' ideas",correct:false},
            {text: "c) Competing with others to win",correct:false},
            {text: "d) Working together with others to achieve a common goal",correct:true}
        ]
    },
    {
        question: " Why is teamwork important in a market?",
        answers: [
            {text: "a) To make lots of money",correct:false},
            {text: "b) To have fun with friends",correct:false},
            {text: "c) To solve problems and serve customers better",correct:true},
            {text: "d) To work against each other",correct:false}
        ]
    },
    {
        question: " What is a market?",
        answers: [
            {text: "a) A place to play games",correct:false},
            {text: "b) A place where people buy and sell goods and services",correct:true},
            {text: "c) A place to watch movies",correct:false},
            {text: "d) A place to sleep",correct:false}
        ]
    },
    {
        question: " How can you contribute to a team in a market?",
        answers: [
            {text: "a) By not listening to others",correct:false},
            {text: "b) By sharing ideas and helping each other",correct:true},
            {text: "c) By being rude to teammates",correct:false},
            {text: "d) By keeping all the profits to yourself",correct:false}
        ]
    },
    {
        question: " Why is it important to listen to customers in a market?",
        answers: [
            {text: "a) To ignore their needs",correct:false},
            {text: "b) To make them angry",correct:false},
            {text: "c) To understand their needs and provide better products or services",correct:true},
            {text: "d) To make them wait for a long time",correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxtbtn");

let cqi = 0;
let score = 0;

function startquiz()
{
    cqi = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showquestion();
}
function showquestion(){
    resetstate();
    let cq = questions[cqi];
    let questionno = cqi+1;
    questionElement.innerHTML = questionno + ". " + cq.question;

    cq.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswer)
    })
}
function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectanswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
        }) ;
        nextButton.style.display = "block";
}

function showscore(){
    resetstate();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length} !!`;
    nextButton.innerHTML = "play again";
    nextButton.style.display = "block";
}
function handlenextbutton(){
    cqi++;
    if(cqi < questions.length){
        showquestion();
    }
    else{
        showscore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(cqi < questions.length){
        handlenextbutton()
    }
    else{
        startquiz();
    }
})
startquiz();