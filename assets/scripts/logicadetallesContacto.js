const params = new URLSearchParams(window.location.search);
const nombreContacto = params.get('nombre');

document.getElementById('detalleContacto').innerHTML = obtenerDetallesContacto(nombreContacto);

function obtenerDetallesContacto(nombre) {
    switch (nombre) {
        case 'Diego Sebastian Siney Garcia':
            return `<div class="list-group"> <br>
            <li class="list-group-item"><strong>Nombre:</strong> ${nombre}</li>
            <li class="list-group-item"><strong>Correo:</strong> diegosiney@gmail.com</li>
            <li class="list-group-item"><strong>Teléfono:</strong> 8822-0983</li> 
            <li class="list-group-item"><strong>Apodo:</strong> Siney</li> 
            <li class="list-group-item"><strong>Edad:</strong> 17</li> <br>
                </div>`;


        case 'Angel Kaled Rodriguez Soc':
            return `<div class="list-group"> <br>
            <li class="list-group-item"><strong>Nombre:</strong> ${nombre}</li>
            <li class="list-group-item"><strong>Correo:</strong> kaledrodriguez@gmail.com</li>
            <li class="list-group-item"><strong>Teléfono:</strong> 2626-9132</li>
            <li class="list-group-item"><strong>Apodo:</strong> Kaled</li> 
            <li class="list-group-item"><strong>Edad:</strong> 16</li> <br>
            </div>`;

        case 'Anderson Uriel Sanchez Rogel':
            return `<div class="list-group"> <br>
            <li class="list-group-item"><strong>Nombre:</strong> ${nombre}</li>
            <li class="list-group-item"><strong>Correo:</strong> urielsanchez@gmail.com</li>
            <li class="list-group-item"><strong>Teléfono:</strong> 0021-8282</li>
            <li class="list-group-item"><strong>Apodo:</strong> Uriel</li> 
            <li class="list-group-item"><strong>Edad:</strong> 19</li> <br>
            </div>`;

        case 'María Jimena Juarez Lopez':
            return `<div class="list-group"> <br>
            <li class="list-group-item"><strong>Nombre:</strong> ${nombre}</li>
            <li class="list-group-item"><strong>Correo:</strong> mariajuarez@gmail.com</li>
            <li class="list-group-item"><strong>Teléfono:</strong> 9272-0113</li>
            <li class="list-group-item"><strong>Apodo:</strong> Juarez</li> 
            <li class="list-group-item"><strong>Edad:</strong> 22</li> <br>
            </div>`;

        case 'Angela Camila Gonzalez Sanchez':
            return `<div class="list-group"> <br>
            <li class="list-group-item"><strong>Nombre:</strong> ${nombre}</li>
            <li class="list-group-item"><strong>Correo:</strong> angelagonzales@gmail.com</li>
            <li class="list-group-item"><strong>Teléfono:</strong> 1772-5621</li>
            <li class="list-group-item"><strong>Apodo:</strong> Angela</li> 
            <li class="list-group-item"><strong>Edad:</strong> 25</li> <br>
            </div>`;

        default:
            return `<p>No se encontraron detalles para este contacto</p>`;

    }
}