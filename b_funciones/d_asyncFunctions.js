//Simplifican el manejo de promesas mediante await.
//El uso de await solo es válido dentro de funciones asíncronas.


async function obtenerDatos() {
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos/10');
    const datos = await respuesta.json();
    return datos;
}
obtenerDatos().then(data => console.log(data));
