let user_sel = prompt("Enter your choice");
let computer_sel = Math.floor(Math.random()*3)+1;

console.log(user_sel);
console.log(computer_sel);
//let rock=1, scissor=2 and paper=3
if(user_sel==computer_sel){
    alert("tie");
}
else if((user_sel==1 && computer_sel==2)||(user_sel==2 && computer_sel==3)||(user_sel==3 && computer_sel==1)){
    alert("you win ");
}
// else if(){
//     alert("you win ");
// }
// else if(user_sel==3 && computer_sel==1){
//     alert("you win ");
// }
else{
    alert("you lose");
}