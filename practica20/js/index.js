let resultado = document.getElementById('resultado')

let asignar = (valor)=>{
    resultado.value += valor;

}

function calcular(){
    if (resultado.value !='')
        resultado.value = eval(resultado.value);
    else
    alert('ingrese un valor')
}

function borrar(){
    resultado.value = '';
}

function borrarUnoSolo(){
resultado.value = resultado.value.slice(0,-1);
}