function agregarTarea() {
    var entradaTarea = document.getElementById("tarea");
    var entradaPrioridad = document.getElementById("prioridad");
    var textoTarea = entradaTarea.value.trim();
    var prioridad = entradaPrioridad.value;

    if (textoTarea !== "") {
        var listaTareas = document.getElementById("listaTareas");

        var elementoLista = document.createElement("li");
        elementoLista.className = "list-group-item d-flex justify-content-between align-items-center";
        elementoLista.innerHTML = textoTarea +
            '<span class="badge badge-warning badge-pill">' + prioridad + '</span>';

        listaTareas.appendChild(elementoLista);
        entradaTarea.value = "";
        entradaPrioridad.value = "alta"; 
        ordenarTareas();
    }
}

function editarTarea() {
    var tareaSeleccionada = document.querySelector(".list-group-item.active");
    
    if (tareaSeleccionada) {
        var textoTarea = prompt("Editar tarea:", tareaSeleccionada.firstChild.nodeValue.trim());

        if (textoTarea !== null) {
            tareaSeleccionada.firstChild.nodeValue = textoTarea.trim();

            ordenarTareas();
        }
    } else {
    }
}

function eliminarTarea() {
    var tareaSeleccionada = document.querySelector(".list-group-item.active");

    if (tareaSeleccionada) {
        var listaTareas = document.getElementById("listaTareas");
        listaTareas.removeChild(tareaSeleccionada);

        tareaSeleccionada.classList.remove("active");

        ordenarTareas();
    } else {

    }
}

function ordenarTareas() {
    var listaTareas = document.getElementById("listaTareas");
    var elementos = Array.from(listaTareas.getElementsByTagName("li"));

    elementos.sort(function (a, b) {
        var prioridadA = a.querySelector('.badge-warning').textContent;
        var prioridadB = b.querySelector('.badge-warning').textContent;

        if (prioridadA === "alta" && prioridadB !== "alta") return -1;
        if (prioridadB === "alta" && prioridadA !== "alta") return 1;
        if (prioridadA === "media" && prioridadB !== "media") return -1;
        if (prioridadB === "media" && prioridadA !== "media") return 1;

        return 0;
    });

    listaTareas.innerHTML = "";
    elementos.forEach(function (elemento) {
        listaTareas.appendChild(elemento);
    });
}

function seleccionarTarea(evento) {
    var tareaSeleccionada = document.querySelector(".list-group-item.active");
    if (tareaSeleccionada) {
        tareaSeleccionada.classList.remove("active");
    }

    var tareaClickeada = evento.target.closest("li");
    if (tareaClickeada) {
        tareaClickeada.classList.add("active");
    }
}

function mostrarFormularioEdicion() {
    var tareaSeleccionada = document.querySelector(".list-group-item.active");

    if (tareaSeleccionada) {
        var textoTarea = tareaSeleccionada.firstChild.nodeValue.trim();
        var prioridad = tareaSeleccionada.querySelector('.badge-warning').textContent;

        var entradaTareaEditada = document.getElementById("tareaEditada");
        var entradaPrioridadEditada = document.getElementById("prioridadEditada");

        entradaTareaEditada.value = textoTarea;
        entradaPrioridadEditada.value = prioridad;

        document.getElementById("formularioTarea").style.display = "none";
        document.getElementById("formularioEdicion").style.display = "block";
    } else {

    }
}

function confirmarEdicionTarea() {
    var entradaTareaEditada = document.getElementById("tareaEditada");
    var entradaPrioridadEditada = document.getElementById("prioridadEditada");
    var tareaSeleccionada = document.querySelector(".list-group-item.active");

    if (tareaSeleccionada) {
        tareaSeleccionada.firstChild.nodeValue = entradaTareaEditada.value.trim();
        tareaSeleccionada.querySelector('.badge-warning').textContent = entradaPrioridadEditada.value;

        document.getElementById("formularioTarea").style.display = "block";
        document.getElementById("formularioEdicion").style.display = "none";

        tareaSeleccionada.classList.remove("active");

        ordenarTareas();
    }
}