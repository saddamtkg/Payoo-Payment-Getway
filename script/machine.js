// machine id -> input value

function getValueFromInput(id){
  const input = document.getElementById(id);
  const value = input.value.trim();
  if(!input.value || input.value === ""){
    return null;
  }
  return value;
}

// machine -> balance

function getBalance(){
  const balance = document.getElementById("balance").innerText;
  return Number(balance);
}

// machine -> set balance
function setBalance(value){
  document.getElementById("balance").innerText = value.toString();
}


// message + type: "error" (লাল) বা "success" (সবুজ)
function setMessage(message, type) {
  const errorMessage = document.getElementById("error-message-text");
  errorMessage.innerText = message;
  errorMessage.classList.remove("hidden");
  errorMessage.classList.remove("text-red-500", "text-green-500");
  errorMessage.classList.add(type === "success" ? "text-green-500" : "text-red-500");
}

// error message -> hide error message
function hideErrorMessage(){
  const errorMessage = document.getElementById("error-message-text");
  errorMessage.innerText = "";
  errorMessage.classList.add("hidden");
}


//machine -> id> hide all > show id

function showOnly(id){

  const addmoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");

  // console.log(`add Money- ${addmoney} Cashout- ${cashout}`);
  addmoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");

}
