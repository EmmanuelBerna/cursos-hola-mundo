function User() {
    this.name = 'Hola Mundo'; 
}

function Product() {
    this.name = 'Producto';
}

function Entidad() {}
Entidad.prototype.save = function() {
    console.log('guardando', this.name);
}
function Entidad() {}
Entidad.prototype.validate = function() {
    console.log('validando', this.name);
}

// User.prototype = Entidad.prototype;
// User.prototype.constructor = User;
// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;
Object.setPrototypeOf(User.prototype, Entidad.prototype);

const user = new User();
console.log(user);