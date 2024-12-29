const prompt = require("prompt-sync")({sigint: true });
food = Number(prompt('How much was the bill?'))
tipPercentage = Number(prompt('Please enter tip percentage?')/100)
tipAmount = food * tipPercentage
totalFoodBill = food + tipAmount
console.log('Tip amount: $',tipAmount)
console.log('Bill total: $',totalFoodBill)