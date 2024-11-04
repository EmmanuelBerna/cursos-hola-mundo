const usuario = {
    nombre: 'nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudadanias() {
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        });
    }
};

usuario.mostrarCiudadanias();