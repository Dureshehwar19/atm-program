#! /usr/bin/env node
import inquirer from "inquirer";

let myBalance = 50000; //dollar
let myPin = 1234;

let pinAnswer= await inquirer.prompt({
    name:"pin",
    message:"Enter your pin code",
    type:"number",
}
)
if(pinAnswer.pin === myPin){
    console.log("Correct Pin Code!");

    let operationAnswer= await inquirer.prompt(
        [
            {
                name:"operation",
                message:"please select an option",
                type:"list",
                choices:["withdraw", "check balance"]
            }
        ]
    );
console.log(operationAnswer);

    if(operationAnswer.operation === "withdraw"){
        let amountAnswer= await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"Enter your amount for withdraw: ",
                    type:"number",
                }
            ]
        );
    
        if(amountAnswer.amount > myBalance){
            console.log("Insufficient Balance!");
        }
    
    else if (myBalance -= amountAnswer.amount){
    console.log("Withdarw Successfully!" + amountAnswer.amount);
        console.log("Your Remaining Balance is:" + myBalance);}

    }
else if(operationAnswer.operation === "check balance"){
    console.log("Your Balance is!:" + myBalance);
}
}
else{
    console.log("Incorrect Pin Number!");
}

