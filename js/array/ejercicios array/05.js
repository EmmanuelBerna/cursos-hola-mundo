    const usuarios = [
        { edad: 20, nombre: 'Juan', plan: 'premium'},
        { edad: 25, nombre: 'Pedro', plan: 'free'},
        { edad: 30, nombre: 'Carlos', plan: 'gold'},
        { edad: 35, nombre: 'Luis', plan: 'gold'},
    ];

    //  function obtenerMayor(arr) {
    //     let mayor = arr[0];
    //     for (let usuario of arr) {
    //        if (mayor.edad < usuario.edad) {
    //             mayor = usuario
    //        } 
    //     }
    //     return mayor;
    //  };

    function obtenerMayor(arr) {
        return arr.reduce((acc, el) => {
            return acc.edad > el.edad ? acc : el;
        });
    }

     const mayor = obtenerMayor(usuarios);

     console.log(mayor);