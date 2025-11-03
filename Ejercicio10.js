const normalizacionCalificaciones = (arreglo) => {
    const arregloNormalizado = new Array();
    let maximo = Math.max(...arreglo);
    for (let a of arreglo) {
        arregloNormalizado.push(a/maximo);
    }
    return arregloNormalizado;
}
const miArreglo = [11,12,20,9,14,7,15];
console.log("El arreglo es: "+miArreglo);
console.log("El arreglo normalizado es: ");
console.log(normalizacionCalificaciones(miArreglo));
