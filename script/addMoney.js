function initAddMoney() {
  document.getElementById("add-money-btn").addEventListener("click", function () {
    hideErrorMessage();
    //1. bank account get
    const bankAccount = getValueFromInput("add-money-bank");
    if (bankAccount == "Select A Bank") {
      setMessage("Please select A Bank", "error");
      return;
    }
    // 2. get bank account number
    const accno = getValueFromInput("add-money-number");
    if (accno === null || accno.length !== 11) {
      setMessage("Please enter a valid bank account number", "error");
      return;
    }
    // 3. get amount to add
    const amount = getValueFromInput("add-money-amount");
    const newBalance = getBalance() + Number(amount);

    if (isNaN(newBalance) || newBalance < 0) {
      setMessage("Invalid amount to add", "error");
      return;
    }
    // 4. get pin
    const pin = getValueFromInput("add-money-pin");
    if (pin === null || pin.length !== 4) {
      setMessage("Invalid pin", "error");
      return;
    }

    // 5. add transaction to history
    const transactionCard = document.getElementById("history-container");
    const newTransactionCard = document.createElement("div");
    newTransactionCard.classList.add("transaction-card", "p-5", "bg-base-100", "box-shadow-xl", "rounded-2xl", "border-1", "border-gray-100");
    newTransactionCard.innerHTML = `
      <p>Money added successfully: ${amount}</p>
      <p>From ${bankAccount} account number ${accno}</p>
      <p>At ${new Date().toLocaleString()}</p>
    `;
    transactionCard.appendChild(newTransactionCard);

  });
}

initAddMoney();
