let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
let user_score=0;
let comp_score=0;
let userscore=document.querySelector("#userscore");
let compscore=document.querySelector("#compscore");

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
     const choiceid=choice.getAttribute("id");
     playgame(choiceid);

});
});
const playgame=(choiceid)=>{
    const compchoice=gencompchoice();
    console.log("user choice=",choiceid);
    console.log("compchoice=",compchoice);
    if(choiceid===compchoice){
    drawgame();
    }
    else{
        let userwin=true;
        if(choiceid==="rock"){
            userwin = compchoice === "scissor"? true : false;
        }
        else if(choiceid==="paper"){
            userwin = compchoice ==="rock"? true : false;
        }
        else{
            userwin = compchoice ==="paper"? true : false;
        }
        showwinner(userwin,choiceid,compchoice);
    }
    
    
    
}
const gencompchoice=()=>{
      const options=["rock","paper","scissor"];
      let x=Math.floor(Math.random()*3);
      return options[x];
};
const showwinner = (userwin,choiceid,compchoice)=> {
if(userwin){
 console.log("you won");
user_score++;
userscore.innerText=user_score;
msg.innerText=`you won! your ${choiceid} beats ${compchoice}`;
msg.style.backgroundColor="green";

}
else{
    console.log("you lose");
    comp_score++;
    compscore.innerText=comp_score;
    msg.innerText=`you lost.${compchoice} beats your ${choiceid}`;
    msg.style.backgroundColor="red"
}
};
 const drawgame=()=>{
    console.log("it was a draw");
    msg.innerText=`draw`;
    msg.style.backgroundColor="burlywood";
 };