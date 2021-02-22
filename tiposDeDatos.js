var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
console.log(f); // Puedes imprimir así un arreglo como en Python
var cred = 0;
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
    color["orange"] = "naranja";
})(color || (color = {}));
;
var miColor = color.orange;
var tuColor = color.blue;
console.log("\nMi color es " + miColor + " y tu color es " + tuColor);
var m; // Aquí es de tipo ANY
m = 'holaa';
var termina = m.endsWith('a');
console.log("La variable m termina en a?", termina, "\n Y cuantas letras tiene?", m.length);
