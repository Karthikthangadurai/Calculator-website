// To get element by Id's in HTML

let inputData = document.getElementById("inputdata");
let btnClear = document.getElementById("btnclear");
let btnPct = document.getElementById("btnpct");
let btnDel = document.getElementById("btndel");
let btnDivid = document.getElementById("btndivid");
let btnSeven = document.getElementById("btnseven");
let btnEight = document.getElementById("btneight");
let btnNine = document.getElementById("btnnine");
let btnMulti = document.getElementById("btnmulti");
let btnFour = document.getElementById("btnfour");
let btnFive = document.getElementById("btnfive");
let btnSix = document.getElementById("btnsix");
let btnMinus = document.getElementById("btnminus");
let btnOne = document.getElementById("btnone");
let btnTwo = document.getElementById("btntwo");
let btnThree = document.getElementById("btnthree");
let btnPlus = document.getElementById("btnplus");
let btnDzero = document.getElementById("btndzero");
let btnZero = document.getElementById("btnzero");
let btnDot = document.getElementById("btndot");
let btnEqual = document.getElementById("btnequal");


// Button clear call panra
btnClear.addEventListener("click",function(){
  inputData.value = "";
})

// Button percentage ha call panra
btnPct.addEventListener("click",function(){
  inputData.value = inputData.value / 100;
})

// Delete button ha call panra
btnDel.addEventListener("click",function(){
  inputData.value = inputData.value.slice(0,-1);
})

// All Number button ha call panra
btnOne.addEventListener("click", function () {
  inputData.value += "1";
  });

btnTwo.addEventListener("click",function(){
  inputData.value += "2"; 
});

btnThree.addEventListener("click",function(){
  inputData.value += "3"; 
});

btnFour.addEventListener("click",function(){
  inputData.value += "4"; 
});

btnFive.addEventListener("click",function(){
  inputData.value += "5"; 
});

btnSix.addEventListener("click",function(){
  inputData.value += "6"; 
});

btnSeven.addEventListener("click",function(){
  inputData.value += "7"; 
});

btnEight.addEventListener("click",function(){
  inputData.value += "8"; 
});

btnNine.addEventListener("click",function(){
  inputData.value += "9"; 
});

btnZero.addEventListener("click",function(){
  inputData.value += "0"; 
});

btnDzero.addEventListener("click",function(){
  inputData.value += "00"; 
});

btnDot.addEventListener("click",function(){
  inputData.value += "."; 
});

// To call mathematical operators

let firstNumber = "";
let operator = "";
let secondNumber = "";

btnPlus.addEventListener("click", function () {
    firstNumber = inputData.value;
    operator = "+";
    inputData.value = "";
    console.log(firstNumber,operator)
});

btnMinus.addEventListener("click", function () {
    firstNumber = inputData.value;
    operator = "-";
    inputData.value = "";
    console.log(firstNumber,operator)
});

btnMulti.addEventListener("click", function () {
    firstNumber = inputData.value;
    operator = "*";
    inputData.value = "";
    console.log(firstNumber,operator)
});

btnDivid.addEventListener("click", function () {
    firstNumber = inputData.value;
    operator = "/";
    inputData.value = "";
    console.log(firstNumber,operator)
});

btnEqual.addEventListener("click", function () {
  secondNumber = inputData.value
  console.log(secondNumber)
    if (operator === "+") {
        let total = Number(firstNumber) + Number(secondNumber);
        inputData.value = total;
        console.log(inputData.value)
    } else if(operator === "-"){
       inputData.value = Number(firstNumber) - Number(secondNumber);
        console.log(inputData.value)
    } else if(operator === "*"){
       inputData.value = Number(firstNumber) * Number(secondNumber);
        console.log(inputData.value)
    } else if(operator === "/"){
       inputData.value = Number(firstNumber) / Number(secondNumber);
        console.log(inputData.value)
    }
});

