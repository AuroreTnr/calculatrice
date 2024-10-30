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
positifNegatif.addEventListener("click", calculatrice)




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
        console.log(arr);
        
        // POSITIF/NEGATIF NON RESOLU
        // if(value === "signe"){
        //     arr.splice(arr.indexOf("signe") - 1, 0, "-")
        //     console.log(arr);
            
        // }


        input.value =  expression = arr.join(" ").replaceAll(" ", "").replace("modulo", "%").replace("signe", "");
        console.log(expression);
        
        
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






