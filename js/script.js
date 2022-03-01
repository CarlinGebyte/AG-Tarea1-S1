let planetNames = Array("Tierra", 'Marte');
let distance = [5, 3, '67'];
const size = [];

console.log(planetNames);
console.log(distance);
console.log(size);

for(let index = 0 ; index < planetNames.length ; index++){
    console.log(planetNames[index]);
}

for (const key in planetNames) {
    if (Object.hasOwnProperty.call(planetNames, key)) {
        const element = planetNames[key];
        console.log(element);
    }
}

for (const key in planetNames) {
    const element = planetNames[key];
    console.log(element);
}

for (const planet of planetNames) {
    console.log(planet);
}

for (const key in distance) {
    const element = distance[key];
    if (distance[key] === '5') {
        console.log('Se encontró la distancia');   
    } else {
        console.log('No se encontró la distancia')
    }
}