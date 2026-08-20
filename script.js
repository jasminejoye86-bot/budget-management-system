// // Default budgets for each category
// const defaultBudgets = {
//     "Tuition Fees": 5000,
//     "Examination Fees": 1000,
//     "Books & Study Material": 2000,
//     "Lab/Practical Fees": 1500
// };

// // Jab budget select ho
// function select() {
//     let budgetDropdown = document.getElementById("budget");
//     let selectedText = budgetDropdown.options[budgetDropdown.selectedIndex].text;

//     // Agar category ke liye default budget set hai
//     if (defaultBudgets[selectedText]) {
//         document.getElementById("remaining").value = defaultBudgets[selectedText];
//         document.getElementById("budgetamt").value = defaultBudgets[selectedText];
//     } else {
//         document.getElementById("remaining").value = "";
//         document.getElementById("budgetamt").value = "";
//     }
// }

// // Jab user amount likhe
// function updateBalance() {
//     let remaining = parseFloat(document.getElementById("remaining").value) || 0;
//     let amount = parseFloat(document.getElementById("amount").value) || 0;

//     // Remaining minus amount
//     let newRemaining = remaining - amount;

//     document.getElementById("remaining").value = newRemaining;
//     document.getElementById("balance").value = newRemaining;
// }
function submitForm(event) {
    event.preventDefault();
    const subject = document.getElementById("subject").value;
    const amount = parseFloat(document.getElementById("amount").value) || 0;
    const balance = document.getElementById("balance").value;
    const budget = document.getElementById("budget").value;
    const table = document.getElementById("viewtable").querySelector("tbody");
    const row = table.insertRow();
    row.insertCell(0).innerText = subject;
    row.insertCell(1).innerText = budget;
    row.insertCell(2).innerText = amount;
    row.insertCell(3).innerText = balance;
    row.insertCell(4).innerHTML = `<button class="btn btn-primary" onclick="deleteBtn(this)">Delete</button>`;

}
function select() {
    const AmountOfBudgets = {
        "Tuition Fees": 5000,
        "Examination Fees": 1000,
        "Books & Study Material": 500,
        "Lab/Practical Fees": 500,
    }
    let budget = document.getElementById("budget");
    const selectedText = budget.options[budget.selectedIndex].text;
    //  console.log(AmountOfBudgets[selectedText]);

    if (AmountOfBudgets[selectedText]) {
        document.getElementById("budgetamt").value = AmountOfBudgets[selectedText];
        document.getElementById("remaining").value = AmountOfBudgets[selectedText];
    }
}
function updateBalance() {
    let amount = parseFloat(document.getElementById("amount").value) || 0;
    let remaining = document.getElementById("remaining").value;
    let newRemainingAmount = remaining - amount;
    remaining.value = newRemainingAmount;
    let balance = document.getElementById("balance");
    balance.value = newRemainingAmount;
}
function deleteBtn(btn) {
    console.log(btn.parentNode.parentNode)
    row = btn.parentNode.parentNode;
    row.remove();
}
