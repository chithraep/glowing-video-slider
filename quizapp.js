console.clear();




let quizData=[{question:"most popular programming language?",
a:"java",
b:"phython",
c:"c",
answer:"c"
},];
console.log(quizData[0].question);
console.log(quizData[0].a);
console.log(quizData[0].b);
console.log(quizData[0].c);




//get element from dom
let title=document.querySelector(".title");
let aLabel=document.querySelector(".aLabel");
let bLabel=document.querySelector(".bLabel");
let cLabel=document.querySelector(".cLabel");
let sbtn = document.getElementById("submit");
let answers=document.querySelectorAll(".answer");
let quizNumber=0;
let mark =0;
console.log("answers are",answers)



//task1
//display UI
function displayQuestionAnswer(){
    title.innerHTML=quizData[0].question;
    aLabel.innerHTML=quizData[0].a;
    bLabel.innerHTML=quizData[0].b;
    cLabel.innerHTML=quizData[0].c;


}
    
//Task2
//check submited button

   function submitAnswer(){
    sbtn.addEventListener("click",
     function (event){
        event.preventDefault();
       let userAnswers= getUserAnswer();
       console.log(userAnswers);

       if(userAnswers==quizData[0].answer){
        console.log(quizData[0].answer);
        alert("CONGRAGULATION YOU ARE RIGHT ")
        
        console.log(mark)
       }else{
        alert("OOPS!!YOU ARE WRONG")
       }
       console.log("assaddddd",userAnswers);
     })
     
     
    };   
    
        //alert("you are great");
        ///get user answer 

function getUserAnswer(){
    let userAnswer;

    answers.forEach(function(answer){
        console.log("hai",answer);
       
        if(answer.checked===true){
           
            userAnswer=answer.id;
            console.log(userAnswer); 
        
            return userAnswer;
        }

    })
    
        
 
    
   
     return userAnswer
    };




//function invoke
displayQuestionAnswer();

submitAnswer()
