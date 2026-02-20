function initCashout() {
  "use strict";
  document
    .getElementById("withdraw-btn") // cashout-btn -> click event listener
    .addEventListener("click", function () {
      hideErrorMessage();
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
      setMessage("Withdraw successful", "success");
      setBalance(newBalance); // machine -> set balance
    });
}

initCashout();
