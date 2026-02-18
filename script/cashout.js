function initCashout() {
  "use strict";
  document
    .getElementById("withdraw-btn") // cashout-btn -> click event listener
    .addEventListener("click", function () {
      document.getElementById("error-message-text").innerText = "";
      const withdrawAmount = getValueFromInput("cashout-amount"); // cashout-amount -> input value
      if (withdrawAmount === null || withdrawAmount <= 0) {
        document.getElementById("error-message-text").innerText =
          "Invalid amount";
        return;
      }
      const currentBalance = getBalance(); // machine -> get balance
      const newBalance = currentBalance - Number(withdrawAmount);
      if (isNaN(newBalance) || newBalance < 0) {
        document.getElementById("error-message-text").innerText =
          "Insufficient balance";
        return;
      }

      const pin = getValueFromInput("cashout-pin"); // cashout-pin -> input value
      if (pin === null || pin.length !== 4 || pin !== "1234") {
        document.getElementById("error-message-text").innerText = "Invalid pin";
        return;
      }
      document.getElementById("error-message-text").innerText =
        "Withdraw successful";
      setBalance(newBalance); // machine -> set balance
    });
}

initCashout();
