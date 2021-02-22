// Cuando queremos usar un módulo debemos importarlo
import { myModule } from './myModule'; 
// Cuando en la dirección ponemos primero ./ es que está en la misma carpeta

let person = new myModule('Dani', 19);
person.who();