const distanciaPuntos = (x1,y1,x2,y2) => Math.hypot((x1-x2),(y1-y2));
const distanciaOrigen = (x1,y1) => Math.hypot(x1,y1);

let puntoX1 = 4;
let puntoY1 = 3;
let puntoX2 = 12;
let puntoY2 = 5;
console.log(
    "La distacia entre los puntos es: "+
    distanciaPuntos(puntoX1,puntoY1,puntoX2,puntoY2)+
    "\nY la suma de sus distancias al origen es: "+
    (distanciaOrigen(puntoX1,puntoY1)+distanciaOrigen(puntoX2,puntoY2))
)
