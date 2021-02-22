// --- Arrow function --- //
var imprime = function (message) { return console.log(message); };
var message = 'heyyy';
imprime(message);
var aumenta = function (numero, cuanto) {
    console.log("El número antes valía", numero);
    numero += cuanto;
    console.log("Ahora el número vale", numero);
};
aumenta(5, 4);
// --- Arrow function --- //
function itera() {
    for (var i = 0; i < 5; i++) {
        process.stdout.write(i + " ");
    }
}
itera();
