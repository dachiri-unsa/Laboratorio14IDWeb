const numeroAleatorio = (min,max) => {
    return parseInt(Math.random()*(max-min+1)+min)
}
console.log(
    "Numero random entre 4 y 7: "+numeroAleatorio(4,7)
);
