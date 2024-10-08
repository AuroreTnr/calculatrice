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


let arr = [];


function calculatrice(e){
    
    let nb = e.target.textContent;
    arr.push(nb);
    
    input.value = arr.join(" ");

    
}


function resultat(){
    const expression = arr.join(" ").replace("×", "*").replace("÷", "/").replace("=","");
    console.log((expression));

    try {
        input.value = eval(expression)
    }catch (error) {
        input.value = "Erreur";
    }
    
}

function reset(){
    arr = [];

    input.value = "0";
}










