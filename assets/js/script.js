
class Propietario {
    constructor(nombrePropietario,direccion,telefono){
        this.nombrePropietario = nombrePropietario;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    datosPropietario(){
        return `El nombre del dueño es: ${this.nombrePropietario}, el domicilio es ${this.direccion} y el numero telefonico de contacto es: ${this.telefono}`
    }
}

class Animal extends Propietario{
     constructor(nombrePropietario,direccion,telefono,tipo){
         super(nombrePropietario,direccion,telefono,tipo)
         this._tipo = tipo ;
     }
    get tipo() {
        return this._tipo;
    }

    mostrartipo(){
        return `El tipo de animal es un: ${this._tipo}` ;
    }


}


class Mascota extends Animal{
    constructor(nombrePropietario,direccion,telefono,tipo,nombre,enfermedad){
        super(nombrePropietario,direccion,telefono,tipo,nombre,enfermedad)
        this._nombre=nombre;
        this._enfermedad=enfermedad;
    }
   get getNombre(){
       return this._nombre;
   }
   set setNombre(nombre){
       _nombre =nombre;
   }
   get getEnfermedad(){
    return this._enfermedad;
   }
    set setEnfermedad(enfermedad){
     _enfermedad = enfermedad;
    }
    mostrarMascota(){
        return `mientras que el nombre de la mascota es: ${this._nombre} y la enfermedad: ${this._enfermedad}` ;
    }
   
}





let agregar = document.getElementById('boton')
agregar.addEventListener('click', mostrarInfo);


function mostrarInfo(event) {
    event.preventDefault();
    
   
    let nombrePropietario = document.getElementById('propietario').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    let nombre = document.getElementById('nombreMascota').value;
    let enfermedad = document.getElementById('enfermedad').value;
    let tipo = document.getElementById('tipo').value;
    var animalito = new Mascota(nombrePropietario,direccion,telefono,tipo,nombre,enfermedad);
    let propietario =animalito.datosPropietario();
    let mostrarTipo = animalito.mostrartipo();
    let mostrarMascota =animalito.mostrarMascota();

    switch(tipo){
        case "perro":
            document.querySelector('#resultado ul').innerHTML= respuestas.perroMascota(propietario,mostrarTipo,mostrarMascota);   
        break;
        case "gato":
            document.querySelector('#resultado ul').innerHTML= respuestas.gatoMascota(propietario,mostrarTipo,mostrarMascota);
        break;
        case "conejo":
            document.querySelector('#resultado ul').innerHTML= respuestas.conejoMascota(propietario,mostrarTipo,mostrarMascota);
        break;
        default:
            document.querySelector('#resultado ul').innerHTML="nada seleccionado" 
        break
    }
    
}

// Punto 5 : Instancia para cada tipo de animal
const respuestas = (() =>{

    return{
        perroMascota: (propietario,mostrarTipo,mostrarMascota)  => `* ${propietario} <br>*${mostrarTipo} ${mostrarMascota} `,
        gatoMascota: (propietario,mostrarTipo,mostrarMascota) => `* ${propietario} <br>*${mostrarTipo} ${mostrarMascota} `,
        conejoMascota: (propietario,mostrarTipo,mostrarMascota) => `* ${propietario} <br>*${mostrarTipo} ${mostrarMascota} `
    }

})();


