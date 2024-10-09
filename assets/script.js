// SELECTION

const buttons = document.querySelectorAll("button");
const egal = document.querySelector(".equal");
const clear = document.querySelector("#clear");
const input = document.getElementById("screen");
const positifNegatif = document.querySelector("#signe")


//EVENT
for(const button of buttons){
    button.addEventListener("click", calculatrice)
}


egal.addEventListener("click", resultat);
clear.addEventListener("click", reset);
positifNegatif.addEventListener("click", signe)




// FONCTIONS

let interruptor = true;
let value;
let arr = [];
let expression;




// CALCUL
function calculatrice(e){
    // CALCUL (+ - * /)
    if (interruptor) {
        value = e.target.getAttribute("id");
        arr.push(value)
        // console.log(arr);
        

        input.value =  expression = arr.join(" ").replaceAll(" ", "").replace("modulo", "%");
        // console.log(expression);
        
        
        // CALCUL %
        if (expression.includes("%")) {
            modulo()
    
        }

    }

        
}


// CALCUL MODULO
function modulo(){

    expression.replace("modulo", "%")
    console.log(arr);

}

// CHANGER DE SIGNE
function signe(){
    positifNegatif.classList.toggle("-")
    signeNegatif = positifNegatif.getAttribute("class");
    arr.unshift(signeNegatif)
    arr.pop()
    
    input.value = arr.join("");

    // PAS BON
    
    
    
}
    



// DISPLAY RESULTAT
function resultat(){
    interruptor = false; 
    
    try {
        input.value = eval(expression.replace("=", ""))
    }catch (error) {
        input.value = "Erreur";
    }
    
}




// RESET
function reset(){
    interruptor = true;
    
    arr = [];

    input.value = "0";
}






