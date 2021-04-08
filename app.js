let display = document.querySelector("#displayResult");

let buttons = document.querySelectorAll("button");
let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");
let clearBtn = document.querySelector("#clear");
let deleteBtn = document.querySelector("#delete");
let resultbtn = document.querySelector("#result");



for(let i=0 ; i < buttons.length ; i++ ){

    if(buttons[i].innerHTML === '='){
        buttons[i].addEventListener("click", calculate(i));
    } else{
        buttons[i].addEventListener("click", addToCurrentValue(i));
    }
}

function addToCurrentValue (i){

    return function(){

        if (buttons[i].innerHTML === "÷") {
            display.innerHTML  +=  "/ " ;
        } else if (buttons[i].innerHTML === "X"){
            display.innerHTML += "*";
        } else {
            display.innerHTML  += buttons[i].innerHTML;
        }

    };

}

clearBtn.addEventListener("click", function() {
    display.innerHTML = '';
});

deleteBtn.addEventListener("click", function() {
    display.innerHTML = display.innerHTML.slice(0, -4);
});

function calculate(i) {
    return function () {
        display.innerHTML = eval(display.innerHTML);
    };
}