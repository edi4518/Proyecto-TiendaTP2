const contenedor = document.querySelector (".seccion-ppal");

const listadoProductos = JSON.parse(localStorage.getItem("listado"));

let productoId = localStorage.getItem("id");


const filtrado = listadoProductos.find(producto => {
    return producto.id === productoId;
    
});

if(filtrado){

    const contenedorDetalles = document.createElement("div");
      contenedorDetalles.className = "card contenedor--card justify-content-start";

      contenedorDetalles.innerHTML = ` 
      <div id="carouselExampleAutoplaying" class="carousel slide mx-auto" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="${filtrado.imagen}" class="d-block w-100 img--detalles" alt="${filtrado.titulo}">
        </div>
        <div class="carousel-item">
          <img src="${filtrado.imagen2}" class="d-block w-100 img--detalles" alt="${filtrado.titulo}">
        </div>
        <div class="carousel-item">
          <img src="${filtrado.imagen3}" class="d-block w-100 img--detalles" alt="${filtrado.titulo}">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bg-black  opacity-25" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon bg-black  opacity-25" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <div class="card-body">
      <h5 class="card-title titulo--detalles">${filtrado.titulo}</h5>
      <p class="card-text descripcion--detalles">
      ${filtrado.detalles}
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item list-item">Marca: <span class="marca--detalles">${filtrado.marca}</span></li>
      <li class="list-group-item  list-item">Modelo: <span class="modelo--detalles">${filtrado.modelo}</span></li>
      <li class="list-group-item  list-item">Precio: <span class="precio--detalles">${filtrado.precio}</span></li>
      <li class="list-group-item  list-item"><span id ="puntuacion" class="punutacion">${convertirCalificacion(filtrado.puntuacion)}</span></li>
    </ul>
    <div class="card-body">
      <a href="index.html" class="card-link boton-volver">Regresar</a>
    </div> `
      
    contenedor.appendChild(contenedorDetalles);


}
else{
    alert("Producto inexistente");
}


function convertirCalificacion(puntuación) {
    const positivo = puntuación.length;

    console.log(positivo);
    
    console.log(filtrado.puntuacion);
    const negativo = 5 - positivo;


    console.log(negativo);

    const calificacion = '<span class="punio-positivo">👍</span>'.repeat(positivo) +
        '<span class="punio-cerrado">👊</span>'.repeat(negativo);

    return `<p class="puntuacion-estrellas">${calificacion}</p>`;
}
