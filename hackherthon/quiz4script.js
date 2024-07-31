const questions = [
    {
        question: " What is a goal?",
        answers: [
            {text: "a) Something you eat",correct:false},
            {text: "b) A plan or target you want to achieves",correct:true},
            {text: "c) A game you play with friends",correct:false},
            {text: "d) A type of toy",correct:false}
        ]
    },
    {
        question: " Why is it important to set goals in entrepreneurship?",
        answers: [
            {text: "a) To have fun",correct:false},
            {text: "b) To have something to do",correct:false},
            {text: "c) To give up easily",correct:false},
            {text: "d) To have a clear direction and purpose for your business",correct:true}
        ]
    },
    {
        question: " What are values?",
        answers: [
            {text: "a) Things you buy at a store",correct:false},
            {text: "b) Principles or beliefs that are important to you",correct:true},
            {text: "c) Types of animals",correct:false},
            {text: "d) Types of colors",correct:false}
        ]
    },
    {
        question: " Why is it important to have good values in entrepreneurship?",
        answers: [
            {text: "a) To cheat others",correct:false},
            {text: "b) To make a lot of money quickly",correct:false},
            {text: "c) To build trust and reputation with customers and partners",correct:true},
            {text: "d) To keep secrets from others",correct:false}
        ]
    },
    {
        question: " What does ethics mean in entrepreneurship?",
        answers: [
            {text: "a) Ignoring rules and laws",correct:false},
            {text: "b) Doing whatever you want",correct:false},
            {text: "c) Making decisions based on what is right and fair",correct:true},
            {text: "d) Stealing from others",correct:false}
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