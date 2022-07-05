
function generarAleatorio(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
}
let continuar = prompt("¿Queres jugar? S para jugar N para finalizar");
while(continuar == "S"){


let modo = prompt("Vamos a jugar adivinanzas, escribe F para jugar el modo facil, D para el modo dificil")

if(modo == "F"){
    console.log("Eligió el modo de juego facil, tiene 5 oportunidades para adivinar");
    let adivinanza = (generarAleatorio(1, 10));
    for(let i = 1; i <= 5; i++){
        let numero = parseInt(prompt("Adivine el número del 1 al 10, tiene 5 oportunidades"));
        if(numero == adivinanza){
            console.log("Has adivinado, ganaste! El número era " , adivinanza);
            console.log("Has utilizado" , i , "intentos");
            break
        }
        else if(numero < adivinanza && numero > 0){
            console.log("El número es mas alto!");
        }
        else if(numero > adivinanza && numero <= 10){
            console.log("El número es mas bajo!");
        }
        else if(numero >= 11){
            console.log("Dije un número del 1 al DIEZ!");
        }
        else if(numero <= 0){
            console.log("Dije un número del UNO al 10!");
        }
        else{
            console.log("Eso no es un número...");
        }
        console.log("Fallaste, te quedan " , (5 - parseInt(i)) , "oportunidades. " , numero , "no es el número");
    }
}

else if(modo == "D"){
    console.log("Eligió el modo de juego dificil, tiene 5 oportunidades para adivinar");
    let adivinanza = (generarAleatorio(1, 20));
    for(let i = 1; i <= 5; i++){
        let numero = parseInt(prompt("Adivine el número del 1 al 20, tiene 5 oportunidades"));
        if(numero == adivinanza){
            console.log("Has adivinado, ganaste! El número era " , adivinanza);
            console.log("Has utilizado" , i , "intentos");
            break
        }
        else if(numero < adivinanza && numero > 0){
            console.log("El número es mas alto!");
        }
        else if(numero > adivinanza && numero <= 20){
            console.log("El número es mas bajo!");
        }
        else if(numero >= 21){
            console.log("Dije un número del 1 al VEINTE!");
        }
        else if(numero <= 0){
            console.log("Dije un número del UNO al 20!");
        }
        else{
            console.log("Eso no es un número...");
        }
        console.log("Fallaste, te quedan " , (5 - parseInt(i)) , "oportunidades." , numero , "no es el número");
    }
}
let continuar = prompt("¿Quieres continuar?")
if(continuar == "S"){
    console.log("Sigamos jugando")
}
else{
    console.log("gracias por jugar");
    break
}
}

