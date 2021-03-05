let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', false];

let cont = 5; 
// cont = 'hola'; <- No se puede porque ya declaramos cont como número;

console.log(f); // Puedes imprimir así un arreglo como en Python

const cred = 0;

enum color {red = 0, green = 1, blue = 2, orange = 'naranja'};

let miColor = color.orange;
let tuColor = color.blue;
console.log("\nMi color es " + miColor + " y tu color es " + tuColor);

let m; // Aquí es de tipo ANY
m = 'holaa';
let termina = m.endsWith('a');
console.log("Respuesta: ")
console.log("La variable m termina en a?",termina, "\nY cuantas letras tiene?", m.length);
