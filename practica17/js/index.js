let j = 500;
let nombre = "renata";
for( let j = 10; j<=20; j++){
    console.log(j);
    let nombre = "Renata";
    console.log("Nombre dentro del ciclo",nombre);
}

console.log("el valor de j despues de un ciclo es de :"+ j);
console.log("Nombre antes del ciclo", nombre)

const PI = Math.PI;
console.log(PI);

const persona = { nombre: 'diego', edad:35, sexo:'claro que sí negro', casado: false}
console.log(persona);

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.sexo)
console.log(persona.casado)

for(let propiedad in persona){
    console.log(propiedad,":", persona[propiedad])
}

let marcas = ["totoya", "Nissan", "ford", "Porsche"];

let lista = document.getElementById("lista");
//lista.innerHTML = "Hola mundo";

for(let marca of marcas){
    console.log(marca)
    lista.innerHTML += "<li>" + marca + "</li>";
}

let peliculas = [
{
    nombre : "El club de la pelea",
    imagen : "https://i.pinimg.com/564x/1c/e4/a4/1ce4a414d4758ee5603843d049b01c86.jpg"
},
{
    nombre : "Seven",
    imagen : "https://i.pinimg.com/564x/89/c4/3d/89c43dc6134a289040d68684ccff81ac.jpg"
},
{
    nombre : "Anatomia de una caida",
    imagen : "https://static.cinepolis.com/resources/mx/movies/posters/414x603/45050-431425-20240311100020.jpg"
}
]

let listaPeliculas = document.getElementById("listapeliculas");
listaPeliculas.innerHTML = "";
for (let pelicula of peliculas){
    console.log(pelicula);
    listaPeliculas.innerHTML += `<div class='col-12 col-md-3 text-center'><p>${pelicula.nombre}</p><img src='${pelicula.imagen}' alt='Imagen de ${pelicula.nombre}' class='img-fluid'></div>`;
}
