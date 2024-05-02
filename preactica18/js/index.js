let lista = document.getElementById("lista");
let texto= "Hola mi nombre es Saul y acabo de cumplir 20 años";
console.log(texto);

lista.innerHTML = texto;

texto = 'esta es otra cadena';
lista.innerHTML = texto;

texto = `Esta es otra forma`;
lista.innerHTML = texto;

let text = `Cadena multilinea
La salle 
Alumnos 302
Esta es la semana de examenes
Suerte`;

console.log(text);

let a = 5
let b = 10

let result = `La suma de ${a} + ${b} es ${a+b}
<ul>
    <li>La resta de ${a} - ${b} es ${a-b}</li>
    <li>La multiplicación de ${a} x ${b} es ${a*b}
    <li>La división de ${a} / ${b} es ${a/b}</li>
</ul>`;
console.log(result);
lista.innerHTML = result;

let persona = 'Renata';
let edad = 20;
let cadena = 'mi nombre es';
function miFuncion(cadenas, personaX, edadExp){
    let resultado = ``;
    //resultado += personaX + 'tiene una edad de'+ edadExp;
    resultado = `${cadenas} ${personaX} tiene una edad de ${edadExp} años`;
    console.log (resultado);
    return resultado;
}

miFuncion("Nombre:", persona, edad);

//let resultado2 = miFuncion`Hola ${persona} buenos dias, tienes una edad de ${edad}`;

function mostrarNombre(name) {
    console.log(name);
    return name;
}

let reultado2 = mostrarNombre`Reno`;

let titulo = "Ganadores de los Oscaras 2024"
let cantantes = ["Billie Eilish", "Lady Gaga", "Adele"];
let cadenaHTML = `<h1>${titulo}</h1>`;

cadenaHTML += `<ul>`;
for(let cantante of cantantes ){
    cadenaHTML += `<li>${cantante}</li>`;
}

cadenaHTML += `<ul>`;

lista.innerHTML = cadenaHTML;