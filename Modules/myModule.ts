// Cuando le ponemos 'export' el archivo se vuelve un módulo
export class myModule{
    constructor(private name?, private age?){}

    who(){
        console.log('Me llamo', this.name, 'y tengo', this.age, 'años.');
    }
}