document.getElementById('edit-button').addEventListener('click' , function (){
    var newUsername = prompt('Ingrese el nuevo nombre de usuario:');
    if(newUsername !== null) {
        document.getElementById('username').textContent = newUsername;
    }
});