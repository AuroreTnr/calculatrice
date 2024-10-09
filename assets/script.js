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
clear.addEventListener("click", reset);




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

        input.value =  expression = arr.join(" ").replace("=","").replaceAll(" ", "").replace("modulo", "%");
        
        // CALCUL %
        if (expression.includes("%")) {
            pourcentage()
    
        }
    }

        
}


// CALCUL %
function pourcentage(){

    if(arr.includes("+")) {
        console.log(arr);
        
        
        let sliceNb1 = arr.slice(arr[1], (arr.indexOf("+"))).join("");
        let sliceNb2 = arr.slice((arr.indexOf("+") + 1), arr[arr.length]).join("").replace("modulo", "").replace("=", "");


        console.log(sliceNb1);
        console.log(sliceNb2);
        

        expression = sliceNb2 + (sliceNb2 * sliceNb1/100);
        
        

        // PAS BON

    }
    else if(arr.includes("-")) {
        console.log(arr);
        
        let sliceNb1 = arr.slice(arr[1], (arr.indexOf("-"))).join("");
        let sliceNb2 = arr.slice((arr.indexOf("-") + 1), arr[arr.length]).join("").replace("modulo", "").replace("=", "");

        console.log(sliceNb1);
        console.log(sliceNb2);

        expression = sliceNb1 - (sliceNb1 * sliceNb2/100);

        // OK

    }
    else if(arr.includes("*")) {
        console.log(arr);
        
        let sliceNb1 = arr.slice(arr[1], (arr.indexOf("*"))).join("");
        let sliceNb2 = arr.slice((arr.indexOf("*") + 1), arr[arr.length]).join("").replace("modulo", "").replace("=", "");

        console.log(sliceNb1);
        console.log(sliceNb2);

        expression =  sliceNb1 * (sliceNb1 * sliceNb2/100);

        // ????????????

        // exemple 20 * 2%
        // 2 % de 20 = 0.4
        // 20 * 0.4 = 8


    }
    else if(arr.includes("/")) {
        console.log(arr);
        
        let sliceNb1 = arr.slice(arr[1], (arr.indexOf("/"))).join("");
        let sliceNb2 = arr.slice((arr.indexOf("/") + 1), arr[arr.length]).join("").replace("modulo", "").replace("=", "");

        console.log(sliceNb1);
        console.log(sliceNb2);

        expression =  sliceNb1 / (sliceNb1 * sliceNb2/100);

        // ????????????

        // exemple 20 / 2%
        // 2 % de 20 = 0.4
        // 20 / 0.4 = 50


    }

}
    



// DISPLAY RESULTAT
function resultat(){
    interruptor = false;

    console.log(arr.join("").replace("modulo", "").replace("=", ""));
    
    
    try {
        input.value = eval(expression)
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









