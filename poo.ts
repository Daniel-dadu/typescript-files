class Point {
    // Atributos:
    private x; // Solo lo puedes modificar dentro de la clase

    // Métodos:
    constructor(x?, private y?, public z?){ // Con los signos ? hacemos opcional su inicialización
        this.x = x;
        
        // No necesitamos esto con esa declaración en el contructor: 
        // this.y = y;
        // this.z = z;
    }

    draw() {
        // Se debe usar el  -- this -- para llamar a los atributos
        console.log('x: ' + this.x + ', y: ' + this.y + ' z: ' + this.z);
    }

    get X(){
        return this.x;
    }

    set X(value){
        this.x = value;
    }
}

/* 
-- Así podemos crear un objeto e inicializar 
sus atributos si no tenemos constructor --

let punto = new Point();
punto.x = 1;
punto.y = 2;
*/

let punto = new Point(1,2);
let punto2 = new Point();

// punto2.x = 1; -- No se puede ya que es privado
punto2.z = 3;

punto.draw();
punto2.draw();

punto.X = 23;
console.log("Ahora el valor de x es", punto.X)