const generarContraseña = () => {
    let contraseña = "";
    let numero;
    for (let i = 1 ; i <= 6 ; i++) {
        numero = parseInt(Math.random()*6+1)
        contraseña += numero;
    }
    return contraseña;
}
console.log(
    "La contraseña generada es: "+generarContraseña()
);
