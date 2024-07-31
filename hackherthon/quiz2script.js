const questions = [
    {
        question: " What is the purpose of saving money?",
        answers: [
            {text: "a) To spend it all at once on toys",correct:false},
            {text: "b) To have money for emergencies and future needs",correct:true},
            {text: "c) To give it away to friends",correct:false},
            {text: "d) To buy lots of candy",correct:false}
        ]
    },
    {
        question: " How can you earn money?",
        answers: [
            {text: "a) By sleeping all day",correct:false},
            {text: "b) By asking parents for money",correct:false},
            {text: "c) By doing chores or helping others",correct:true},
            {text: "d) By playing video games",correct:false}
        ]
    },
    {
        question: " What is a budget?",
        answers: [
            {text: "a) A plan for spending and saving money",correct:true},
            {text: "b) A list of things you want to buy",correct:false},
            {text: "c) A recipe for cooking dinner",correct:false},
            {text: "d) A list of your favorite activities",correct:false}
        ]
    },
    {
        question: " What is the importance of comparing prices before buying something?",
        answers: [
            {text: "a) It's not important",correct:false},
            {text: "b) To ensure you spend all your money",correct:false},
            {text: "c) To make sure you get the best value for your money",correct:true},
            {text: "d) To buy the most expensive item",correct:false}
        ]
    },
    {
        question: " Why should you save some of your allowance or money you receive as gifts?",
        answers: [
            {text: "a) So you can spend it all on treats",correct:false},
            {text: "b) To have money to buy gifts for friends",correct:false},
            {text: "c) To save for bigger purchases or future goals",correct:true},
            {text: "d) Because saving money is boring",correct:false}
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