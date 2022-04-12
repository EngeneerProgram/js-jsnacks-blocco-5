/*
Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC) 

*/
function reverse(s){
    return s.split("").reverse().join("");
}

let parola = reverse("Rosario")
console.log(parola)