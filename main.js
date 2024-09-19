let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');	

let cadenacaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function generar(){

    let numeroDigitado = parseInt(cantidad.value);

    if ( numeroDigitado  < 8){
        alert("La cantidad de caracteres tiene que ser mayor a 8")
    }

    let password = '';

    for (let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenacaracteres [Math.floor(Math.random() * cadenacaracteres.length)];
        password += caracterAleatorio;
    }

    console.log("Password generado: " + password);

    contrasena.value = password;


}










