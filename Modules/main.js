"use strict";
exports.__esModule = true;
// Cuando queremos usar un módulo debemos importarlo
var myModule_1 = require("./myModule");
// Cuando en la dirección ponemos primero ./ es que está en la misma carpeta
var person = new myModule_1.myModule('Dani', 19);
person.who();
