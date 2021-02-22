var Point = /** @class */ (function () {
    // Métodos:
    function Point(x, y, z) {
        this.y = y;
        this.z = z;
        this.x = x;
        // No necesitamos esto con esa declaración en el contructor: 
        // this.y = y;
        // this.z = z;
    }
    Point.prototype.draw = function () {
        // Se debe usar el  -- this -- para llamar a los atributos
        console.log('x: ' + this.x + ', y: ' + this.y + ' z: ' + this.z);
    };
    Object.defineProperty(Point.prototype, "xx", {
        get: function () {
            return this.z;
        },
        set: function (value) {
            this.z = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
/*
-- Así podemos crear un objeto e inicializar
sus atributos si no tenemos constructor --

let punto = new Point();
punto.x = 1;
punto.y = 2;
*/
var punto = new Point(1, 2);
var punto2 = new Point();
// punto2.x = 1; -- No se puede ya que es privado
punto2.z = 3;
punto.draw();
punto2.draw();
punto.xx = 23;
console.log("Ahora el valor de x es", punto.xx);
