function initLogin() {
  document.getElementById("login-btn").addEventListener("click", function () {
    // 1 - get the mobile number
    const mobileNumber = document.getElementById("input-number");
    const contactNumber = mobileNumber.value.trim();

    // 2 - get the pin
    const inputPin = document.getElementById("input-pin");
    const pin = inputPin.value.trim();

    // 3 - check if the mobile number and pin are empty
    if (contactNumber === "" || pin === "") {
      alert("Please enter a valid mobile number and pin");
      return;
    }

    // 4 - match pin and mobile number
    if (contactNumber === "01750528877" && pin === "1234") {
      window.location.href = "home.html";
    } else {
      alert("Invalid mobile number or pin");
    }
  });
}

initLogin();
