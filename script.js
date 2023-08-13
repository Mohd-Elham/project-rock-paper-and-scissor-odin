
function myRock(){
    var user_sel =1;
    test(user_sel);
}
function myPaper(){
    var user_sel =3;
    test(user_sel);
}
function myScissor(){
    var user_sel =2;
    test(user_sel);
}

var myDivr = document.getElementById('rock');
var myDivs = document.getElementById('scissor');
var myDivp = document.getElementById('paper');
var myresult = document.getElementById("rslt");
var cChoice = document.getElementById("cmptr");

myDivr.addEventListener('click',myRock);
myDivs.addEventListener('click',myScissor);
myDivp.addEventListener('click',myPaper);

function test(user_sel){
    let computer_sel = Math.floor(Math.random()*3)+1;

    switch(computer_sel){
        case 1: cChoice.innerHTML="Computers Selection: rock";break;

        case 3: cChoice.innerHTML="Computers Selection: paper";break;

        case 2: cChoice.innerHTML="Computers Selection: scissor";break;

        default: break;
    }
    if(user_sel==computer_sel){
        myresult.innerHTML="tie";
    }

    else if((user_sel==1 && computer_sel==2)||(user_sel==2 && computer_sel==3)||(user_sel==3 && computer_sel==1)){
        myresult.innerHTML="You win";
    }

    else if((user_sel==2 && computer_sel==1)||(user_sel==3 && computer_sel==2)||(user_sel==1 && computer_sel==3)){
        myresult.innerHTML=" you lose";
        
    }
}