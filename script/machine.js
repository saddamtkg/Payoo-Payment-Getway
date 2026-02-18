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
