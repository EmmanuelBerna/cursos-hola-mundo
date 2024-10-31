const usuarios = [
    {edad: 20, nombre: 'Juan'},
    {edad: 18, nombre: 'Pedro'},
    {edad: 15, nombre: 'Maria'},
    {edad: 19, nombre: 'Luis'},
];

const mayoresDe18 = usuarios.filter(u => u.edad >  17);

console.log(mayoresDe18);