function paraAbsoluto(arr) {
    return arr.map(n => Math.abs(n));
}

const ns = [-2, 3, 5, -15];

const absoliutos =  paraAbsoluto(ns);

console.log(absoliutos);