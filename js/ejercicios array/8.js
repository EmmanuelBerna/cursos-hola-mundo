const usuarios = [
    {edad: 20, nombre: 'Juan', plan: 'premium'},
    {edad: 18, nombre: 'Pedro', plan: 'free'},
    {edad: 15, nombre: 'Maria', plan: 'free'},
    {edad: 19, nombre: 'Luis', plan: 'gold'},
];

const pagos = usuarios.filter(u => u.plan !== 'free');

pagos.sort((a, b) => {
    if (a.edad > b.edad) return -1;
    if (a.edad < b.edad) return 1;
    return 0
})

const lista = pagos.map(u => `<li>${u.nombre}</li>`);

const html = `
<ul>
    ${lista.join(`
    `)}
</ul>
`
console.log(html);