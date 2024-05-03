const usuarios = [
    { nombre: 'Alice', edad: 25 },
    { nombre: 'Bob', edad: 30 },
    { nombre: 'Carol', edad: 22 }
  ];
  const nombres = usuarios.map(usuario => usuario.nombre);
  console.log(nombres);  // ['Alice', 'Bob', 'Carol']
  