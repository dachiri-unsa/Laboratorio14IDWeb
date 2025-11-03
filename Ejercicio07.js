const gradosARadianes = (grados) => grados*Math.PI/180;
const radianesAGrados = (radianes) => radianes*180/Math.PI;

let anguloRad = Math.PI/2;
console.log("El angulo es: "+radianesAGrados(anguloRad))
console.log("El seno del angulo es: "+Math.sin(anguloRad))
console.log("El coseno del angulo es: "+Math.cos(anguloRad).toFixed(2))
