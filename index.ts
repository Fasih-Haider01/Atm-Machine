#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 2020;
console.log("Pin-Code: 2020");
let pinAnswer = await inquirer.prompt([
    {
        name:"pin",
        type: "number",
        message: "Enter your pin"
    }
]);

if (pinAnswer.pin === myPin)
{
    console.log("Correct pin code!!");

let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select option",
            type: "list",
            choices: ["withdrawl" , "check balance" , "fast cash"]
        }
    ]);

    if(operationAns.operation === "withdrawl")
    {
        let amountAns = await inquirer.prompt([
            {
                name:"amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);

        if (amountAns.amount > myBalance)
        {
            console.log("Insufficient Balance");
        }
        else if (myBalance -= amountAns.amount)
        {
            console.log(`Your balance is: ${myBalance}`);
        }
    }
    else if(operationAns.operation === "check balance")
    {
        console.log(`Your balance is: ${myBalance}`)
    }
    else if(operationAns.operation === "fast cash")
    {
        let fastcashAns = await inquirer.prompt([
            {
                name: "cash",
                message: "Select the amount you want to transact",
                type:"list",
                choices: [1000 , 2000 , 5000 , 10000 , 20000]
            }
        ]);
        myBalance -= fastcashAns.cash;
        console.log(`Your remaining balance is: ${myBalance}`);
    }
}
else{
    console.log("Incorrect pin code");
}