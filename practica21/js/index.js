let formularioAgregar = document.getElementById("formularioAgregar");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");
let videoURL = document.getElementById("videoURL");
let fotoURL = document.getElementById("fotoURL");
let btnGuardar = document.getElementById("btnGuardar");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");
let videoURLEditar = document.getElementById("videoURLEditar");
let fotoURLEditar = document.getElementById("fotoURLEditar");
let btnGuardarEditar = document.getElementById("btnGuardarEditar");

let listaTareas = document.getElementById("listaTareas");
let tareas = [
    { nombre: "Hugo", fecha: "2019-10-10", descripcion: "Hacer tarea de matemáticas", videoURL: "https://www.youtube.com/watch?v=FlsYCYbmJGU", fotoURL: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/164EE/production/_109347319_gettyimages-611195980.jpg" },
    { nombre: "Paco", fecha: "2019-10-10", descripcion: "Hacer tarea de español", videoURL: "https://www.youtube.com/watch?v=9uNstWl6NS8", fotoURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRffRJIjolzPNiTrrsB_v37kLeZOJLoINteBE43x9XcXQ&s" }
];

formularioAgregar.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal('nuevoModal');
    mostrarTareas();
    formularioAgregar.reset();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    guardarCambios();
    cerrarModal('editarModal');
    mostrarTareas();
    formularioEditar.reset();
});

let editarTarea = (indice) => {
    let tarea = tareas[indice];
    nombreEditar.value = tarea.nombre;
    fechaEditar.value = tarea.fecha;
    descripcionEditar.value = tarea.descripcion;
    videoURLEditar.value = tarea.videoURL;
    fotoURLEditar.value = tarea.fotoURL;

    btnGuardarEditar.dataset.indice = indice;
}

let guardarCambios = () => {
    let indice = btnGuardarEditar.dataset.indice;
    tareas[indice].nombre = nombreEditar.value;
    tareas[indice].fecha = fechaEditar.value;
    tareas[indice].descripcion = descripcionEditar.value;
    tareas[indice].videoURL = videoURLEditar.value;
    tareas[indice].fotoURL = fotoURLEditar.value;
    btnGuardarEditar.removeAttribute("data-indice");
}

let borrarTarea = (boton, indice) => {
    if (confirm("¿Estás seguro de borrarlo?")) {
        if (confirm("¿Completamente seguro?")) {
            boton.parentElement.parentElement.remove();
            tareas.splice(indice, 1);
        } else {
            alert("No te preocupes, no se borró");
        }
    }
}

let cerrarModal = (modalId) => {
    let modalElement = document.getElementById(modalId);
    let modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
}

let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value,
        videoURL: videoURL.value,
        fotoURL: fotoURL.value
    });
}

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class="row">
            <div class="col-12 border-bottom pb-3">
                <div class="row">
                    <div class="col-3">
                        <strong>${tarea.nombre}</strong>
                    </div>
                    <div class="col-2">
                        <strong>${tarea.fecha}</strong>
                    </div>
                    <div class="col-3">
                        <strong>${tarea.descripcion}</strong>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-4">
                        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/${getYouTubeVideoId(tarea.videoURL)}" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div class="col-4">
                        <img src="${tarea.fotoURL}" alt="Foto de la tarea" style="max-width: 100%;">
                    </div>
                    <div class="col-4 text-center">
                        <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#editarModal" onClick="editarTarea(${indice})"><i class="bi bi-pen-fill"></i>Editar</button>
                        <button class="btn btn-outline-danger" onClick="borrarTarea(this, ${indice})"><i class="bi bi-trash3-fill"></i>Borrar</button>
                    </div>
                </div>
            </div>
        </div>`;
    });
}


// Función para extraer el ID del video de YouTube desde la URL
function getYouTubeVideoId(url) {
    // Expresión regular para obtener el ID del video de la URL de YouTube
    var regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[1].length == 11) {
        return match[1];
    } else {
        // Manejar URLs no válidas de YouTube
        return 'error';
    }
}

mostrarTareas();
