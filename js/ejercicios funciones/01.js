const obj = {
    nombre: 'Abraham',
};

function Extender() {
    this.login = () => {
        console.log("Iniciando sesion", this.nombre);
    }
    this.logout = () => {
        console.log("Cerrando sesion", this.nombre);
    }
}

Extender.call(obj);

console.log(obj);
obj.login();
obj.logout();
