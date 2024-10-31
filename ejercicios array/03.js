const usuarios = [
    {edad: 20, nombre: 'Juan', plan: 'premium'},
    {edad: 18, nombre: 'Pedro', plan: 'free'},
    {edad: 15, nombre: 'Maria', plan: 'free'},
    {edad: 19, nombre: 'Luis', plan: 'gold'},
];

 function getPaidusers(ususarios) {
    return usuarios.filter(u => u.plan !== 'free');
 }

 console.log(getPaidusers(usuarios));