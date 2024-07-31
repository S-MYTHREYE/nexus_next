const questions = [
    {
        question: " What does an entrepreneur do?",
        answers: [
            {text: "a) Sells lemonade",correct:false},
            {text: "b) Starts and runs a business",correct:true},
            {text: "c) Plays video games",correct:false},
            {text: "d) Goes to school",correct:false}
        ]
    },
    {
        question: " What is an important skill for an entrepreneur?",
        answers: [
            {text: "a) Riding a bicycle",correct:false},
            {text: "b) Cooking delicious food",correct:false},
            {text: "c) Watching TV",correct:false},
            {text: "d) Creativity and problem-solving",correct:true}
        ]
    },
    {
        question: " How can entrepreneurs make money?",
        answers: [
            {text: "a) By playing sports",correct:false},
            {text: "b) By saving money in a piggy bank",correct:false},
            {text: "c) By selling products or services",correct:true},
            {text: "d) By taking long naps",correct:false}
        ]
    },
    {
        question: " What is a business plan?",
        answers: [
            {text: "a) A recipe for making cookies",correct:false},
            {text: "b) A strategy for starting and running a business",correct:true},
            {text: "c) A map for exploring new places",correct:false},
            {text: "d) A list of favorite movies",correct:false}
        ]
    },
    {
        question: " Why is teamwork important for entrepreneurs?",
        answers: [
            {text: "a) To solve problems and achieve goals together",correct:true},
            {text: "b) To play games with friends",correct:false},
            {text: "c) To watch movies together",correct:false},
            {text: "d) To take long walks in the park",correct:false}
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