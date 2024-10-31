const usuarios = [
    { id: 1, nombre: 'Abraham' },
    { id: 3, nombre: 'Bernabe' },
    { id: 2, nombre: 'Sanchez' },
];

// find solo devuelve la primer coasa que encuentra
//esto es un predicate
const resultado = usuarios.find(function (usuario) {
    return usuario.id === 1; 
});

//metodo con arrow function
const resultado2 = usuarios.find(usuario =>
     usuario.id === 1);

// con findindex devuelve el indice
const indice = usuarios.findIndex(usuario =>
    usuario.id === 1);

console.log(resultado);
console.log(indice);
console.log(resultado2);