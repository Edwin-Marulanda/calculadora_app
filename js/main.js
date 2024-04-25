const formulario = document.getElementById('formulario-calculadora')
const resultado = document.getElementById('resultado');
const textoBienvenida = document.getElementById('text-bienvenida');
const textoResultado = document.getElementById('text-resultado');
const resultadoGp= document.getElementById('resultadoGp');
const resultadoG= document.getElementById('resultadoG');
const valoresTMB = { "xPeso": 10, "xAltura": 6.25, "xEdad": 5 }

 
//variables
let genero = false;
let nombre = "";
let tipoDocumento = "";
let numDocumento = "";
let edad = "";
let peso = "";
let altura = "";
let actividadFisica = ""


formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    textoResultado.style="display:none";
    asignarValoresAVariables();
    calcularCalorias();

})

function asignarValoresAVariables() {
    genero = document.getElementById('genero').checked;
    nombre = document.getElementById('nombre').value;
    tipoDocumento = document.getElementById('tipoDocumento').value;
    numDocumento = document.getElementById('numeroDoc').value;
    edad = document.getElementById('edad').value;
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;
    actividadFisica = document.getElementById('actividad').value;
}

function calcularCalorias() {
    if (genero) {
        calcularParaMasculino();
    } else {
        calcularParaFemenino();
    }
    limpiarCampos()
}

function calcularParaMasculino() {
    //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
    let numCalorias = actividadFisica *(valoresTMB.xPeso*peso)+(valoresTMB.xAltura*altura)-(valoresTMB.xEdad*edad)+5;
    mostrarResultado(numCalorias);

}

function calcularParaFemenino() {
    //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
    let numCalorias = actividadFisica *(valoresTMB.xPeso*peso)+(valoresTMB.xAltura*altura)-(valoresTMB.xEdad*edad)-161;
    mostrarResultado(numCalorias);
}

function mostrarResultado(numCalorias) {
    textoBienvenida.style = "display: none !important"
    textoResultado.style = "display: grid !important"
    resultadoGp.innerHTML = "Grupo poblacional: " + grupoPoblacional();
    if(genero){
        resultadoG.innerHTML = "Genero: Masculino";
    }else{
        resultadoG.innerHTML = "Genero: Femenino";
    }
    resultado.innerHTML = `El paciente ${nombre} identificado con ${tipoDocumento} NO. ${numDocumento}, requiere un total de ${numCalorias} kcal para el sostenimiento de su TBM`

}

function limpiarCampos(){
    document.getElementById('genero').checked=false;
    document.getElementById('nombre').value= "";
    document.getElementById('tipoDocumento').value = "";
    document.getElementById('numeroDoc').value = 0;
    document.getElementById('edad').value = 0;
    document.getElementById('peso').value = 0;
    document.getElementById('altura').value = 0;
    document.getElementById('actividad').value = "";
}

function grupoPoblacional(){
    return edad>=15 && edad<=29?"Joven":edad>=30&&edad<=59?"Adulto":"Adulto mayor";
}

// Animaciones
function aparecerResultado() {
    resultado.style.top = '100vh';
    resultado.style.display = 'block';

    let distancia = 100;
    let resta = 0.3;
    let id = setInterval(() => {
        resta *= 1.1;
        resultado.style.top = `${distancia - resta}vh`;
        if (resta > 100) {
            clearInterval(id);
        }
    }, 10)
}

function desvanecerResultado() {
    let distancia = 1;

    let id = setInterval(() => {
        distancia *= 2;
        resultado.style.top = `${distancia}vh`;
        if (distancia > 100) {
            clearInterval(id);
            resultado.style.display = 'none';
            resultado.style.top = 0;
        }
    }, 10)
}
