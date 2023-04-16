import PromptSync from "prompt-sync";

const prompt = PromptSync();

// const maxValue = 10;

// const randomNum = Math.floor(Math.random() * maxValue) + 1;
// let status = false;

// console.log(randomNum);

// while (!status){

// let userInput = prompt("Guess a number between 1 and    " + maxValue + ' ')
//  userInput   = Number(userInput);

// if (userInput === randomNum){

// status = true;
// console.log("You won! The number was " + randomNum);

// }

// else if( userInput > randomNum){

//     console.log("Sorry, your gas was too high.");
// }
// else {

//     console.log("Sorry Your gas was too low.");

// }

// }


// const product = ["Shirt", "Trouser", "Jacket"]
// const gift = ["pen", "keychain", "tie"]


// for (let i = 0; i < product.length; i++) {
//    for (let j = 0; j < gift.length; j++) {
//     console.log( product[i] + "__" + gift[j]);
    

//    }
    
// }

// for in loop

var obj = {
    firstName: "Ayla",
    lastName: "Imran",
    age : 20,
    emai : "aylaimran02@gmail.com"
}

for (var key in obj){

console.log(key + ":" + " " + obj[key]);

}













