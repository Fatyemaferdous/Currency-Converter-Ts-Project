#! /usr/bin/env node
import inquirer from "inquirer"

const currency: any = {
    USD : 1,
    PKR : 278,
    INR : 84,
    POUNDS : 0.79,
    EURO : 0.93,
    CAD : 1.37,
    AED : 3.67,
    AUD : 1.50,
    JPY : 160,
    RUB : 89,
    CNY : 7.26,
}

let conversionQuestions = await inquirer.prompt([
    {
    name: "from",
    message: "Select your currency from",
    type : "list",
    choices : ["USD","PKR","INR","POUNDS","EURO","CAD","AED","AUD","JPY","RUB","CNY"]
},    
{
    name: "to",
    message: "Select your currency to",
    type : "list",
    choices : ["USD","PKR","INR","POUNDS","EURO","CAD","AED","AUD","JPY","RUB","CNY"]
},
{
    name: "amount",
    message: "Enter your amount",
    type : "number"
}
])

let fromAmount = currency[conversionQuestions.from]
let toAmount = currency[conversionQuestions.to]
let baseAmount = conversionQuestions.amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount.toFixed(2))