#! /usr/bin/env node

import inquirer from "inquirer";//import inquirer code from inquirer file


//prints welcome message
console.log("\n\tWelcome to \'code with bhagwati\' - CLI simple Calculator\n ");
//asking question from users through inquirer

// making variable with the name of answer (this will be answer which we will get from user)
// await =>dont print answer directly first took all answers from the user then print
let answers = await inquirer.prompt([
    {message : "enter first number",type:"number",name:"firstNumber"},//this message will ask the user to enter 1st number.
    {message : "enter second number",type:"number",name:"secondNumber"},//this message will ask the user to enter 2nd number.
    {
        message:"select one operator to perform operations",//this message will ask the user to select any one operator which he/she wants to perform operation.
        type:"list",
        name:"operators",//it will save below one (choices).
        choices:["addition","substraction","multiplication","division"],//this operator will save in upper one (name:"operators")
    }
]);

//conditional statement if-else

if( answers.operators==="addition"){
    console.log(answers.firstNumber + answers.secondNumber)//if user answer is equals to addtion then print this
}
else if( answers.operators==="substraction"){
    console.log(answers.firstNumber - answers.secondNumber)//if user answer is equals to substraction then print this
}
else if( answers.operators==="multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)//if user answer is equals to multiplication then print this
}
else if( answers.operators==="division"){
    console.log(answers.firstNumber / answers.secondNumber)//if user answer is equals to division then print this
}
//if user slect out of this operators then print this to tell her/him that this is not valid operator/not included.
else{
    console.log("invalid input");
};


