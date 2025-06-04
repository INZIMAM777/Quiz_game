let Qbank=[{
    question:"what is the color of blood?",
    options:['Red','Green','Yellow','Blue'],
    correct:0
},
{
    question:"what is the color of the sky?",
    options:['Red','Green','Yellow','Blue'],
    correct:3
},
{
    question:"what is the color of grass?",
    options:['Red','Green','Yellow','Blue'],
    correct:1
},
{
    question:"what is the color of sun?",
    options:['Red','Green','Yellow','Blue'],
    correct:2
},
{
    question:"what is the color of banana?",
    options:['Red','Green','Yellow','Blue'],
    correct:2
}]

//selecting elements
let option=document.querySelectorAll('.option');
let choice=document.querySelectorAll('.choice');
let [question,op1,op2,op3,op4]=document.querySelectorAll('#Hq',"#a1","#a2","#a3","#a4");
let btnNext=document.querySelector('#btnNext');
let container=document.querySelector('#container');
let currentQ=0;
let score=0;

//load question
const loadQuestion=()=>{
    const que=Qbank[currentQ];
    question.innerText=`${currentQ+1}: ${que.question}`;
    que.options.forEach((e, index) => {
        window[`a${index + 1}`].innerText = e;
    });

}


loadQuestion();


//check answer

btnNext.addEventListener('click',()=>{
    //getting the index of the selected option
   let slctIndex = -1;
    option.forEach((e, index) => {
        if (e.checked) {
            slctIndex = index;
        }
    });

    if (slctIndex === -1) {
        alert("Please select an option!");
        return;
    }

    //correct answer verification and incr score,currentQ
    if(slctIndex===Qbank[currentQ].correct){
        score++;
    }
    currentQ++;
    if(currentQ<Qbank.length){
        //deselect all options before loading next question
        option.forEach((e) => {
            e.checked = false;
        });
        //load next question
        loadQuestion();
    }
    else{
        container.innerHTML=`<div style="max-width: 90%; width: 500px; margin: auto; text-align: center; padding: 1.5rem 1rem; background-color: #fef6f9; border: 2px solid #654ea3; border-radius: 1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
    <h2 style="font-size: 1.75rem; color: #654ea3; margin-bottom: 0.5rem;">🎉 Quiz Completed!</h2>
    <h3 style="font-size: 1.1rem; color: #444; margin-bottom: 1.25rem;">Your score is <span style="color:#d63384;">${score}</span> out of <span style="color:#654ea3;">${Qbank.length}</span></h3>
    <p style="font-size: 0.95rem; color: #555; margin-bottom: 1.5rem;">Great job! You can take the quiz again to improve or test your memory.</p>
    <button id="btnReload" onclick="location.reload()" style="padding: 0.65rem 1.5rem; font-size: 1rem; background-color: #654ea3; color: white; border: none; border-radius: 0.75rem; cursor: pointer; transition: background-color 0.3s ease;">
        🔁 Take Again
    </button>
</div>
`;
    }
    
})

