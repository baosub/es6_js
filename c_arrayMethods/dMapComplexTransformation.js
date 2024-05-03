const productos = [
    { nombre: 'Camisa', precio: 20 },
    { nombre: 'Pantalones', precio: 40 }
];

const productosConIVA = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio * 1.21  // Asumiendo un IVA del 21%
    };
});

console.log(productosConIVA);
// [{ nombre: 'Camisa', precio: 24.2 }, { nombre: 'Pantalones', precio: 48.4 }]
