var inventario = [
  {
    nombre: 'tenedor',
    cantidad: 6
  },
  {
    nombre: 'cuchara',
    cantidad: 4,
  },]

function checkInventario(inventario, item) {
  // La funcion 'checkInventario' recibe como argumento un array de objetos llamado 'inventario' y el nombre de un item llamado 'item'
  // Cada objeto tiene una propiedad 'nombre' y 'cantidad'.
  // La funcion debe devolver la cantidad de items que hay.
  let nombres = inventario.map(x=> x.nombre);

  for(let i = 0; i< nombres.length ; i++){
    if(item === nombres[i]){
      let resultado = inventario.map(x=> x.cantidad);
      return resultado[i]
    }
  }
  for(let i = 0; i< nombres.length ; i++){
    if(item !== nombres[i]){
      return 0
    }
  }
}
  // Si el item no existe la funcion tiene que devolver 0 (cero).
  // checkInventario(inventario, 'tenedor') devuelve => 6