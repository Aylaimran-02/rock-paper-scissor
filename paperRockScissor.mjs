
import randomInteger from "random-int";
randomInteger

import PromptSync from "prompt-sync";
PromptSync

let choices =  ["rock", "paper", "scissor"];

let userPrompt = "0 for rock, 1 for paper, 2 for scissor";
let outcome =  "ready to play";

// Computer choice randomly

let computerChoice = randomInteger(0,2);
computerChoice = choices[computerChoice];

// For User choices
const prompt = PromptSync();

let userChoice = prompt(userPrompt);
userChoice = choices[userChoice];

if (computerChoice === userChoice){
    outcome = "Game draw";
}
else if(computerChoice === "rock" && userChoice === "paper"){
    outcome = "User win";
}
else if(computerChoice === "paper"&& userChoice === "rock"){
    outcome = "Computer win";
}
else if(computerChoice === "rock" && userChoice === "scissor"){
    outcome = "Computer win";
}
else if(computerChoice === "scissor" && userChoice === "rock"){
    outcome = "User win";
}
else if(computerChoice === "paper" && userChoice === "scissor"){
    outcome = "User win";
}
else if(computerChoice === "scissor" && userChoice === "paper"){
    outcome = "Computer win";
}


console.log("Computer chose : " +" " + computerChoice);
console.log("User chose : " +" " +  userChoice);
console.log("Outcome is : " +" " +  outcome);




