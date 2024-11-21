function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

let vuela = {
    vuela() {
        console.log('vuela');
    }
};

let nada = {
    nada() {
        console.log('nada');
    }
};

let bano = {
    bano() {
        console.log('va al baño');
    }
};

let camina = {
    camina() {
        console.log('camina');
    }
};

// vuela, nada, camina, va al baño.
function Pato () {
    this.name = 'Patito';
}
Object.assign(Pato.prototype, vuela, nada, camina, bano);

// camina, nada, va al baño.
function Perro () {}
Object.assign(Perro.prototype, camina, nada, bano);

// nada, va al baño.
function Pez () {}
Object .assign(Pez.prototype, nada, bano);

//vuela pero no nada, camina ni va al baño.
function Avion () {}
Object.assign(Avion.prototype, vuela);
