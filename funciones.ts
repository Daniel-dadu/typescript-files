// --- Arrow function --- //
let imprime = (message) => console.log(message);

var message = 'heyyy';
imprime(message);

let aumenta = (numero, cuanto) => {
    console.log("El número antes valía",numero)
    numero += cuanto;
    console.log("Ahora el número vale",numero)
}

aumenta(5, 4);
// --- Arrow function --- //

function itera() {
    for (let i = 0; i < 5; i++){
        process.stdout.write(i + " ");
    }
}
itera();




