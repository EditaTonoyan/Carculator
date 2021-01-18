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

let defaultResult = 0;
let currentResult = defaultResult;

//function for add
function plus(){
    let resultCalc = `${currentResult} + ${input.value}`;
    currentResult += parseInt(input.value);
    result(currentResult, resultCalc);

}

btnplus.addEventListener("click", plus);
// function for subtract

function subtract(){
  
    if(currentResult==0){
       resultCalc=`${input.value}`;
      currentResult=parseInt(input.value- currentResult);
    }
    else{
        resultCalc=`${currentResult}-${input.value}`;
      currentResult=currentResult-parseInt(input.value);}
   
      result(currentResult, resultCalc);

  }
  
  btnminus.addEventListener("click", subtract);


  function multiply() {

    if(currentResult == 0){
        resultCalc=`${input.value}`;
        currentResult=parseInt(input.value);

    }else{
        resultCalc=`${currentResult}*${input.value}`;
        currentResult=currentResult*parseInt(input.value);
    }
    result(currentResult, resultCalc);

  }

  btnmultiply.addEventListener("click", multiply);

  function division(){

        if(currentResult == 0){
            resultCalc=`${input.value}`;
            currentResult = parseInt(input.value);
        }else{
            resultCalc=`${currentResult}/${input.value}`;
            currentResult = currentResult/parseInt(input.value);
        }
        result(currentResult,resultCalc);

  }

  btndivide.addEventListener("click", division);