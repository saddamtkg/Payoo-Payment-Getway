function initCashout() {
  "use strict";
  document
    .getElementById("withdraw-btn") // cashout-btn -> click event listener
    .addEventListener("click", function () {
      hideErrorMessage();
      // 1. get agent number
      const agentNumber = getValueFromInput("cashout-number");
      if (agentNumber === null || agentNumber.length !== 11) {
        setMessage("Invalid agent number", "error");
        return;
      }
      // 2. get amount to withdraw
      const withdrawAmount = getValueFromInput("cashout-amount"); // cashout-amount -> input value
      if (withdrawAmount === null || withdrawAmount <= 0) {
        setMessage("Invalid amount", "error");
        return;
      }
      const currentBalance = getBalance(); // machine -> get balance
      const newBalance = currentBalance - Number(withdrawAmount);
      if (isNaN(newBalance) || newBalance < 0) {
        setMessage("Insufficient balance", "error");
        return;
      }

      const pin = getValueFromInput("cashout-pin"); // cashout-pin -> input value
      if (pin === null || pin.length !== 4 || pin !== "1234") {
        setMessage("Invalid pin", "error");
        return;
      }
      // 5. add transaction to history
    const transactionCard = document.getElementById("history-container");
    const newTransactionCard = document.createElement("div");
    newTransactionCard.classList.add("transaction-card", "p-5", "bg-base-100", "box-shadow-xl", "rounded-2xl", "border-1", "border-gray-100");
    newTransactionCard.innerHTML = `
      <p>Cashout successfully: ${withdrawAmount}</p>
      <p>To ${agentNumber} mobile number</p>
      <p>At ${new Date().toLocaleString()}</p>
    `;
    transactionCard.appendChild(newTransactionCard);
    setBalance(newBalance);
    });
}

initCashout();
