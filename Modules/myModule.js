"use strict";
exports.__esModule = true;
exports.myModule = void 0;
// Cuando le ponemos 'export' el archivo se vuelve un módulo
var myModule = /** @class */ (function () {
    function myModule(name, age) {
        this.name = name;
        this.age = age;
    }
    myModule.prototype.who = function () {
        console.log('Me llamo', this.name, 'y tengo', this.age, 'años.');
    };
    return myModule;
}());
exports.myModule = myModule;
