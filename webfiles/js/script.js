//result
let showResult = document.querySelector(".result p")
let result = "" ;
let tempNumber = "" 
let reset = false

showResult.innerText = "0" ;
let signs = ["+","-","*","/"]

// Number inputs 
let numbers = document.querySelectorAll('.buttonRow .number')

//keyboard inputs
document.addEventListener("keydown", e=> {

    if (e.code.split("Numpad") && /Numpad\d/gm.test(e.code)){
        console.log('afa');
        numberInput(e.key)
    }
    
    if (e.code.split("Numpad")[1] === "Enter") {
        equalAction()
    }

    if (e.code.split("Numpad")[1] === "Add") {
        addAction()
    }

    if (e.code.split("Numpad")[1] === "Subtract") {
        substractAction()
    }

    if (e.code.split("Numpad")[1] === "Multiply") {
        multiplyAction()
    }

    if (e.code.split("Numpad")[1] === "Divide") {
        divideAction()
    }

    if (e.key === "Delete" || e.key === "Backspace") {
        correctAction()
    }
})

//direct inputs
for (const number of numbers) {
    number.addEventListener("click", () => {
        console.log(number.innerText);
        numberInput(number.innerText)
    })
}

let plus = document.querySelector(".signs #plus")
plus.addEventListener("click", ()=>{
    addAction()
})

let minus = document.querySelector(".signs #minus")
minus.addEventListener("click", ()=>{
    substractAction()
})

let multiply = document.querySelector(".signs #multiply")
multiply.addEventListener("click", ()=>{
    multiplyAction()
})

let divide = document.querySelector(".signs #divide")
divide.addEventListener("click", ()=>{
    divideAction()
})

let equal = document.querySelector(".buttonRow .equal")
equal.addEventListener("click", ()=>{
    equalAction()
})

function numberInput(input) {
    if (reset === true) {
            reset = false
            result = ""
        }
        
        tempNumber += input
        result += input
        showResult.innerText = tempNumber
}

function addAction() {
    if (result != "" && !signs.includes(result.slice(-1)) ) {
        if (reset === true) {
            reset = false
        }  
        tempNumber = ""
        
        showResult.innerText = eval(result)
        
        result += '+';
    }

}

function substractAction() {
    if (result != ""  && !signs.includes(result.slice(-1))) {
        if (reset === true) {
            reset = false
        }
        tempNumber = ""

        showResult.innerText = eval(result)

        result += '-';
    }
}

function multiplyAction() {
    if (result != "" && !signs.includes(result.slice(-1))) {
        if (reset === true) {
            reset = false
        }
        tempNumber = ""
    
        showResult.innerText = eval(result)
        
        result += '*';
    }
}

function divideAction() {
    if (result != "" && !signs.includes(result.slice(-1))) {
        if (reset === true) {
            reset = false
        }
        tempNumber = ""
        
        showResult.innerText = eval(result)

        result += '/';
    }
}

function equalAction() {
    
    showResult.innerText = eval(result?result:"0") ;
    tempNumber =""
    reset = true
}

let correct = document.querySelector(".signs #correct")
correct.addEventListener("click", () => {
    correctAction()
})

function correctAction() {
    tempNumber=""
    showResult.innerText = "0" ;
    result = ""
}