//Se inicializa el constructor
class Productos {
    constructor(id, nombre, precio, cantidad){

    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
    

}
}
//Array de objetos del constructor
const productos = [
    new Productos(1, "Shampoo Rosa", "$250", 24),
    new Productos(2, "Shampoo Amarillo", "$250", 12),
    new Productos(3, "Shampoo Naranja", "$250", 36),
    new Productos(4, "Acondicionador Rosa", "$300", 30),
    new Productos(5, "Acondicionador Amarillo", "$300", 10),
    new Productos(6, "Acondicionador Naranja", "$300", 15),
    
];
//Contenedor de productos a mostrar en front

function mostrarProductos() {
  let productosContainer = document.getElementById('productosContainer');
  productosContainer.innerHTML = '';

  productos.forEach(function(producto) {
    let divProducto = document.createElement('div');
    divProducto.classList.add('producto');
    divProducto.innerHTML = `
      <h3>ID: #${producto.id}</h3>
      <h1>Nombre: ${producto.nombre}</h1>
      <p>Precio: ${producto.precio}</p>
      <p>Cantidad: ${producto.cantidad}</p>
      <input type="number" id="cantidad-${producto.id}" placeholder="Cantidad">
      <button onclick="realizarPedido(${producto.id})">Pedido</button>
    `;

  
    productosContainer.appendChild(divProducto);
  });
}

//Condicional de los pedidos a realizar, en base al stock y la cantidad solicitada
function realizarPedido(id) {
  let cantidadInput = document.getElementById(`cantidad-${id}`);
  let cantidad = parseInt(cantidadInput.value);

  if (isNaN(cantidad) || cantidad <= 0) {
    alert('Ingrese una cantidad válida.');
    return;
  }

  let producto = productos.find(function(item) {
    return item.id === id;
  });

  if (!producto) {
    alert('Producto no encontrado.');
    return;
  }

  if (producto.cantidad < cantidad) {
    alert('No hay suficiente stock del producto.');
    return;
  }

  producto.cantidad -= cantidad;
  alert('Pedido realizado. Stock actual: ' + producto.cantidad);
  mostrarProductos();
}

// Se llama a la funcion inicial
mostrarProductos();

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



