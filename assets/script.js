// SELECTION

const buttons = document.querySelectorAll("button");
const egal = document.querySelector(".equal");
const clear = document.querySelector("#clear");
const input = document.getElementById("screen");


//EVENT
for(const button of buttons){
    button.addEventListener("click", calculatrice)
}


egal.addEventListener("click", resultat);
clear.addEventListener("click", reset)




// FONCTIONS

let interruptor = true;
let value;
let arr = [];
let expression;




function calculatrice(e){
    if (interruptor) {
        value = e.target.getAttribute("id");
        arr.push(value)

        input.value =  expression = arr.join(" ").replace("×", "*").replace("÷", "/").replace("=","").replaceAll(" ", "");
    }
    
}


function resultat(){
    interruptor = false;

    try {
        input.value = eval(expression)
    }catch (error) {
        input.value = "Erreur";
    }
    
}

function reset(){
    interruptor = true;
    
    arr = [];

    input.value = "0";
}









