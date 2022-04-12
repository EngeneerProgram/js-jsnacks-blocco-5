// Scrivi una funzione che fonda due array (aventi 
// lo stesso numero di elementi) prendendo alternativamente 
//  gli elementi da uno e  
// dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]. 


function createArray(){
    const lettere = ["a" , "b" , "c", "d"];
    const numeri = [1 , 2, 3, 4];

    
    const newArray=[];

    for(let i = 0; i<lettere.length; i++){
        console.log(lettere[i])
        
    }

    for(let i = 0; i<numeri.length; i++){
        console.log(numeri[i])
    }
    // console.log(lettere[0] +numeri[0]) 
    
    for(let i = 0; i<lettere.length && i<numeri.length; i++){
        console.log(lettere[i] + numeri[i])
        newArray.push(lettere[i], numeri[i])
    }
    console.log(newArray)
}

createArray();