// Descrizione: 
// Visualizzare in pagina 5 numeri casuali. 
const randomNumbers = []
for (let i = 0; i < 5; i++){
    
    let numbCounter = i;
    numbCounter = Math.floor(Math.random() * 49) + 1;
    randomNumbers.push(numbCounter);

}

console.log(randomNumbers);


//  Dichiaro la variabile dei 5 numeri
//  Le faccio visualizzare a schermo
const numbersList = document.getElementById('numbers-list');

setTimeout((e)=>{
   numbersList.innerHTML = '<li><p>' + randomNumbers + '</p></li>'; 
}, 2000);


// Da lì parte un timer di 30 secondi. 
const timer = document.getElementById('timer');
let timerCounter = 31;

setTimeout((e)=>{

    let intervalCountdown = setInterval((e) => {
        
        timerCounter = timerCounter - 1;
        
        // Dopo 30 secondi i numeri scompaiono 
        //   timeoutClear 
        if(timerCounter === 0){
            clearInterval(intervalCountdown);
        } 
    
        return timer.innerHTML = timerCounter;
   
    }, 1000);

    return

}, 1000);


// e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente,
let userForm = document.getElementById('answers-form');
setTimeout((e)=>{
    userForm. // FAI APPARIRE IL FORM, RIRPENDI DA QUI
}, 32000)

const userInput = document.getElementById('input-group'); 



// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// NOTA: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.


// BONUS:
// Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse 
// da numeri lo blocchiamo in qualche modo.

// Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.


// Consigli del giorno:
//  Pensate prima in italiano.
//  Dividete in piccoli problemi la consegna.
//  Individuate gli elementi di cui avete bisogno per realizzare il programma.
//  Immaginate la logica come fosse uno snack: 
//    "Dati 2 array di numeri, indica quali e quanti numeri ci sono in comune tra i due array"