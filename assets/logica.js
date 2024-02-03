function validarFormulario(){
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    return (correo !== '' && contrasena !== '') ? true : (alert('Complete todos los campos.'), false);
}