let numero = 100; // VAriable global, tipo number int
console.log(numero);

let decimal = 100.5;// variable global, tipo float
console.log(decimal);

let texto ="hola mundo"; //variablñe global, tipo string
let texto2 ='holamundo'; //variablñe global, tipo string
let booleano = true; //variable global, tipo boolean
let booleano2 = false; //variable global, tipo boolean
let arreglo2 = ["python", "java", "JS"];//Variable global, tipo arreglo
let arreglo = [1, 2, 3, 4, 5];//Array

console.log(arreglo);
console.log(arreglo[3]);
console.log(arreglo[-2]);
console.log(arreglo[30]);

let aregloMixto = [1,2,3,4,5,"a","b","c","d","e", true, false, false]; // Variable
console.log(aregloMixto);

let objeto = {
    nombre : "juan",
    edad : 19,
    telefono : "4774563286"
}

console.log(objeto);
console.log(objeto.telefono);
console.log("edad: "+objeto.edad);
console.log("nombre: "+objeto.nombre);

let estudiante = {
    nombre : "juan",
    matricula : 123119,
    carrera : "ISSC",
    materias : ["programacion", "Matematicas", "base de datos"],
    amigos : [
    {
        nombre : "pedro",
        telefono : "47756323"
    },
    {
        nombre : "paola",
        telefono : "477557364"
    }]
}

console.log(estudiante.materias[1])
console.log(estudiante.amigos[1].nombre)

let variable = 10 ;
console.log(typeof variable)

let variable2 = "blah";
console.log(typeof variable2);

let variable3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(typeof variable3);

let variable4 = true;
console.log(typeof variable4);

let variable5 = {
    nombre : "juan",
    edad : 19,
    telefono : "4774563286"
}
console.log(typeof variable5.edad);

