let usuarios = [
    {id: 1, activo: true},
    {id: 2, activo: false},
    {id: 3, activo: true},
    {id: 4, activo: false},
];

// let todosActivos = usuarios.every(u => {
//     console.log('todos los usuarios activos', u.id);
//     return u.activo;
// });

// console.log(todosActivos);

let algunosActivos = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
});

console.log(algunosActivos);
