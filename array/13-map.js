const usuarios = [
    {edad: 20, nombre: 'Juan'},
    {edad: 18, nombre: 'Pedro'},
    {edad: 15, nombre: 'Maria'},
    {edad: 19, nombre: 'Luis'},
];

const lista = usuarios.map(u => `<li>${u.nombre}</li>`);
const html = `<ol>${lista.join('')}</ol>`;

console.log(html);

// const mapped = usuarios.map(u => ({
//         ...u,
//         mayor: u.edad > 17,
// }));

// console.log(mapped);