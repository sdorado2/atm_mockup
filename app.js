//Current Balance
let balance = {
  money: Math.floor(Math.random() * 4000),
};

//Deposit
let plusBalance = () => {
  let deposit = parseInt(prompt("Deposit: "));
  console.log("deposit is : " + deposit);
  return (balance.money += deposit);
};

let depositInfo = () => {
  let depInfo = document.querySelector(".mainScreen");
  depInfo.innerHTML = `Your current balance is : $` + plusBalance();
};

//Withdraw
let minusBalance = () => {
  let withdraw = parseInt(prompt("Withdraw: "));
  console.log("withdraw is: ", withdraw);
  return (balance.money -= withdraw);
};

let withdrawInfo = () => {
  let withInfo = document.querySelector(".mainScreen");
  withInfo.innerHTML = `Your current balance is : $` + minusBalance();
};

//CheckBalance
let checkBalance = () => {
  console.log(`The current balance in the account is : $${balance.money}.`);
  return balance.money;
};

const balanceInfo = () => {
  let infoBox = document.querySelector(".mainScreen");
  infoBox.innerHTML = `Current Balance is : $` + checkBalance();
};

//Display Information

//Number Pad Presses
const padDigits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
};
const numInput = (button) => {
  if (button === "one") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.one;
    return storedNum.push(padDigits.one);
  } else if (button === "two") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.two;
    return storedNum.push(padDigits.two);
  } else if (button === "three") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.three;
  } else if (button === "four") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.four;
  } else if (button === "five") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.five;
  } else if (button === "six") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.six;
  } else if (button === "seven") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.seven;
  } else if (button === "eight") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.eight;
  } else if (button === "nine") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.nine;
  } else if (button === "zero") {
    let numDisp = document.querySelector(".mainScreen");
    numDisp.innerHTML = padDigits.zero;
  }
};

let storedNum = [];
console.log(storedNum);

let enteredNumb = () => {
  let joinNum = parseInt(storedNum.join(""));
  return (joinNum);
  
};

//Clear Info

// console.log("current balance is :", balance.money);
// console.log(plusBalance());
// console.log(minusBalance());
// checkBalance();
