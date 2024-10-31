const usuarios = [
    {edad: 20, nombre: 'Juan', plan: 'premium'},
    {edad: 18, nombre: 'Pedro', plan: 'free'},
    {edad: 15, nombre: 'Maria', plan: 'premium'},
    {edad: 19, nombre: 'Luis', plan: 'gold'},
];

// function cuantosMayores(usuarios){
//     return usuarios.filter(u => u.edad > 17).length;
// };

//  function cuantosPremu(usuarios){
//     return usuarios.filter(u => u.plan === 'premium').length;
// };

function cuantosMayores(usuarios){
   return usuarios.reduce(( acum, u) => u.edad > 17 ? acum + 1 : acum, 0);
};

function cuantosPremium(usuarios) {
    return usuarios.reduce((acum, u) => u.plan === 'premium' ? acum + 1 : acum, 0)
};
console.log(cuantosPremium(usuarios),);
console.log(cuantosMayores(usuarios));
