//result
let showResult = document.querySelector(".result p")
let result = "" ;
let tempNumber = "" 
let reset = false

showResult.innerText = "0" ;
let signs = ["+","-","*","/"]

// Number inputs 
let numbers = document.querySelectorAll('.buttonRow .number')

for (const number of numbers) {
    number.addEventListener("click", () => {
        if (reset === true) {
            reset = false
            result = ""

        }
        
        tempNumber += number.innerText
        result += number.innerText
        showResult.innerText = tempNumber

    })
}

// formulas
// plus
let plus = document.querySelector(".signs #plus")

plus.addEventListener("click", ()=>{
    if (result != "" && !signs.includes(result.slice(-1)) ) {
        if (reset === true) {
            reset = false
        }  
        tempNumber = ""
        
        showResult.innerText = eval(result)
        
        result += '+';
           
        console.log(eval(showResult.innerText));
        console.log(result);
        
    }
})

// minus 
let minus = document.querySelector(".signs #minus")

minus.addEventListener("click", ()=>{
    if (result != ""  && !signs.includes(result.slice(-1))) {
        if (reset === true) {
            reset = false
        }
        tempNumber = ""

        showResult.innerText = eval(result)

        result += '-';
        
        console.log(eval(showResult.innerText));
        console.log(result);
    }
})

// multiply 
let multiply = document.querySelector(".signs #multiply")

multiply.addEventListener("click", ()=>{
    if (result != "" && !signs.includes(result.slice(-1))) {
        if (reset === true) {
            reset = false
        }
        tempNumber = ""
    
        showResult.innerText = eval(result)
        
        result += '*';
    
        console.log(eval(showResult.innerText));
        console.log(result);
    }
})

// divide
let divide = document.querySelector(".signs #divide")

divide.addEventListener("click", ()=>{
    if (result != "" && !signs.includes(result.slice(-1))) {
        if (reset === true) {
            reset = false
        }
        tempNumber = ""
        
        showResult.innerText = eval(result)

        result += '/';
    
        console.log(eval(showResult.innerText));
        console.log(result);
    }
})

// equal
let equal = document.querySelector(".buttonRow .equal")

equal.addEventListener("click", ()=>{
    showResult.innerText = eval(result) ;
    tempNumber =""
    reset = true
})


// correct 
let correct = document.querySelector(".signs #correct")

correct.addEventListener("click", () => {

    tempNumber=""
    showResult.innerText = "0" ;
    result = ""


    console.log(result);
})