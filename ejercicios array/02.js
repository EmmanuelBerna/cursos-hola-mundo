const miArray = [
    "Hola",
    12,
    "Mundo",
    {},
    {id:15},
    ['lala'],
    false,
    true,

]
 // numeros, strings, objects
function dividePorTipo(arr) {
    return {
        numeros: arr.filter(n => typeof n === 'number'),
        strings: arr.filter(n => typeof n === 'string'),
        objects: arr.filter(n => typeof n === 'object'),
        booleans: arr.filter(n => typeof n === 'boolean'),
    }
}
const nuevoArray = dividePorTipo(miArray);

console.log(nuevoArray);