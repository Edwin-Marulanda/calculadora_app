
const tiposDeDocumento = [{ "valor": "Tarjeta de identidad", "label": "Tarjeta de identidad" },
{ "valor": "Cedula", "label": "Cédula" },
{ "valor": "Pasaporte", "label": "Pasaporte" },
{"valor": "Cédula de extranjeria","label": "Cédula de extranjeria"},
]

const opcionesActividadFisica=[
{"valor":"1.2","label":"Poco o ningún ejercicio"},
{"valor":"1.375","label":"Ejercicio ligero (1-3 días a la semana)"},
{"valor":"1.55","label":"Ejercicio moderado (3-5 días a la semana)"},
{"valor":"1.725","label":"Ejercicio fuerte (6-7 días a la semana)"},
{"valor":"1.9","label":"Ejercicio muy fuerte (dos veces al día, entrenamientos muy duros)"}
]

let select = document.getElementById("tipoDocumento");
let selectActividad = document.getElementById("actividad");

function tiposDocumento() {
    for (let i = 0; i < tiposDeDocumento.length; i++) {
        let opcTD = tiposDeDocumento[i];
        let element = document.createElement("option");
        element.textContent = opcTD.label;
        element.value = opcTD.valor;
        select.appendChild(element);
    }
}

function actividadFisicaAdd() {
    for (let i = 0; i < opcionesActividadFisica.length; i++) {
        let opcAC = opcionesActividadFisica[i];
        let element = document.createElement("option");
        element.textContent = opcAC.label;
        element.value = opcAC.valor;
        selectActividad.appendChild(element);
    }
}

tiposDocumento();
actividadFisicaAdd();
limpiarCampos();