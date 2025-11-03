const numeroAleatorio = (min,max) => parseInt(Math.random()*(max-min+1)+min);

let dado1 = numeroAleatorio(1,6);
let dado2 = numeroAleatorio(1,6);
let suma = dado1 + dado2;
console.log(
    `El primer dado dio: ${dado1}
El segundo dado dio: ${dado2}
La sumatoria es: ${suma}`
);
