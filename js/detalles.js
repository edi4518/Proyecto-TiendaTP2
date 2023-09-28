const contenedor = document.querySelector (".seccion-ppal");
const botonDetalles = document.getElementById("enlaces-detalles");

const listadoProductos = JSON.parse(localStorage.getItem("listado"));



botonDetalles.addEventListener('click', eventoDetalles);
    // listadoProductos.forEach((producto) => {
    //   const contenedorDetalles = document.createElement("div");
    //   contenedorDetalles.className = "card contenedor--card justify-content-start";

    //   contenedorDetalles.innerHTML = ` 
    //   <div id="carouselExampleAutoplaying" class="carousel slide w-50 mx-auto" data-bs-ride="carousel">
    //   <div class="carousel-inner">
    //     <div class="carousel-item active">
    //       <img src="${producto.imagen}" class="d-block w-100 img--detalles" alt="${producto.titulo}">
    //     </div>
    //     <div class="carousel-item">
    //       <img src="${producto.imagen2}" class="d-block w-100 img--detalles" alt="${producto.titulo}">
    //     </div>
    //     <div class="carousel-item">
    //       <img src="${producto.imagen3}" class="d-block w-100 img--detalles" alt="${producto.titulo}">
    //     </div>
    //   </div>
    //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    //     <span class="carousel-control-prev-icon bg-black  opacity-25" aria-hidden="true"></span>
    //     <span class="visually-hidden">Previous</span>
    //   </button>
    //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    //     <span class="carousel-control-next-icon bg-black  opacity-25" aria-hidden="true"></span>
    //     <span class="visually-hidden">Next</span>
    //   </button>
    // </div>
    // <div class="card-body">
    //   <h5 class="card-title titulo--detalles">${producto.titulo}</h5>
    //   <p class="card-text descripcion--detalles">
    //   ${producto.descripcion-detallada}
    //   </p>
    // </div>
    // <ul class="list-group list-group-flush">
    //   <li class="list-group-item list-item">Marca: <span class="marca--detalles">${producto.marca}</span></li>
    //   <li class="list-group-item  list-item">Modelo: <span class="modelo--detalles">${producto.modelo}</span></li>
    //   <li class="list-group-item  list-item">Precio: <span class="precio--detalles">${producto.precio}</span></li>
    //   <li class="list-group-item  list-item"><span class="precio--detalles">${producto.puntuacion}</span></li>
    // </ul>
    // <div class="card-body">
    //   <a href="index.html" class="card-link boton-volver">Regresar</a>
    // </div> `
      
    // contenedor.appendChild(contenedorDetalles);
    // })
  

  const eventoDetalles = (e) =>{
    console.log(e.tarjet);
  }