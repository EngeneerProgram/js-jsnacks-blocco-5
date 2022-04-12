/*
Crea un array di 10 oggetti che rappresentano una zucchina, 
indicando per ognuna varietà, peso e lunghezza.
 Calcola quanto pesano tutte le zucchine. 
*/


const zucchina = [
    {
        varieta : "faenza",
        peso : 30,
        lunghezza : 30
    },

    {
        varieta : "verde_scura",
        peso : 13,
        lunghezza : 18
    },

    {
        varieta : "verde_chiara",
        peso : 20,
        lunghezza : 50
    },

    {
        varieta : "romanesca",
        peso : 14,
        lunghezza : 18
    },

    {
        varieta : "napoletana",
        peso : 30,
        lunghezza : 30
    },

    {
        varieta : "pugliese",
        peso : 30,
        lunghezza : 30
    },

    {
        varieta : "zucchina_nera",
        peso : 1,
        lunghezza : 30
    },

    {
        varieta : "pugliese",
        peso : 10,
        lunghezza : 40
    },

    {
        varieta : "zucchina_tenerumi",
        peso : 5,
        lunghezza : 10
    },

    {
        varieta : "faenza",
        peso : 6,
        lunghezza : 40
    },

    
]


//devo calcolare la somma del peso di tutte le zucchine

//ciclo for each
let peso_finale = 0;
zucchina.forEach(zucchina => {
    console.log(zucchina.peso);
    peso_finale += zucchina.peso;
});

console.log(`Le zucchine pesano in totale ${peso_finale}`)