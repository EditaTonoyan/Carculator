let input = document.getElementById("num");
let btnplus = document.getElementById("plus");
let btnminus = document.getElementById("minus");
let btnmultiply  = document.getElementById("multiplication");
let btndivide = document.getElementById("division");

let currentResultOut  = document.getElementById("currentout");
let resultOut = document.getElementById("out");
// function for result
function result(result, text) {
    
    resultOut.textContent = result;
    currentResultOut.textContent = text;
}

function inpNum(){
    return parseInt(input.value);
}

let defaultResult = 0;
let currentResult = defaultResult;

function shortCalc(operator, resultBefore, calcNumber){
    let resultCalc = `${resultBefore} ${operator} ${calcNumber}`;
    result(currentResult, resultCalc);

}

function plus(){
    let inputValue = inpNum();
    let befCurrent = currentResult;
    currentResult += parseInt(inputValue);
    shortCalc('+', befCurrent, inputValue);
    

}

btnplus.addEventListener("click", plus);

