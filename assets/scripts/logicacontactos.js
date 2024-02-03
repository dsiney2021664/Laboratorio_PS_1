function redirigirADetalles(nombre) {
    var nombreCodificado = encodeURIComponent(nombre);

    window.location.href = 'detallesContacto.html?nombre=' + nombreCodificado;
}