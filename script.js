// SpendWise JavaScript Foundation

// 1. Store application data
let budget = 50000;
let expenses = 15000;

// 2. Calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 3. Collect user input
let userBudget = prompt("Enter your monthly budget:");
let userExpenses = prompt("Enter your total expenses:");

// Convert user input from text to numbers
userBudget = Number(userBudget);
userExpenses = Number(userExpenses);

// 4. Perform budget calculation
let remainingBalance = calculateBalance(userBudget, userExpenses);

// 5. Display results in the console
console.log("===== SpendWise Budget Summary =====");
console.log("Budget: KES " + userBudget);
console.log("Expenses: KES " + userExpenses);
console.log("Remaining Balance: KES " + remainingBalance);

// Display the result based on the balance
if (remainingBalance > 0) {
    console.log("Status: You are within your budget.");
} else if (remainingBalance === 0) {
    console.log("Status: Your budget has been fully used.");
} else {
    console.log("Status: You have exceeded your budget.");
}