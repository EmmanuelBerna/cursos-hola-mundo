const usuarios = [
    {edad: 20, nombre: 'Juan', plan: 'premium'},
    {edad: 18, nombre: 'Pedro', plan: 'free'},
    {edad: 15, nombre: 'Maria', plan: 'free'},
    {edad: 19, nombre: 'Luis', plan: 'gold'},
];

const users = [
    {age: 18, name: 'Pao', membership: 'free'},
    {age: 14, name: 'Mia', membership: 'free'},
    {age: 29, name: 'Michel', membership: 'gold'},
];

//unificar las estrudturas de usuarios y users
// fusionar los array
// ordenar por edad
// crear plantilla html

const usersEspanol = users.map(u => ({
    edad: u.age,
    nombre: u.name,
    plan: u.membership
}));

const todos = [...usuarios, ...usersEspanol];

todos.sort((a, b) => {
    if (a.edad > b.edad) return -1;
    if (a.edad < b.edad) return 1;
    return 0
})

const lista = todos.map(u =>
    `<li>nombre:${u.nombre}  edad:${u.edad}</li>`)

const html = `
<ul>
        ${lista.join(`
        `)}
</ul>
`
console.log(html);