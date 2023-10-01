const contenedorProductos = document.querySelector("#contenedor-productos");
let enlacesDetalles = document.querySelector(".masdetalles-ico");
let productos;

const listaProductos = async () => {
  productos = localStorage.getItem("productos");

  if (productos == null) {
    const response = await fetch("json/productos.json");

    productos = await response.json();

    localStorage.setItem("listado", JSON.stringify(productos));
  }
  if (typeof productos == "string") {
    productos = JSON.parse(productos);
  }
  console.log(productos);

  const listadoProductos = JSON.parse(localStorage.getItem("listado"));

  // Recorro el json para agregar los items a la home

  listadoProductos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "col";


    content.innerHTML = `
         <div class="card h-100 card-productos">
                  <img
                    src="${producto.imagen}"
                    class="card-img-top img--notebook"
                    alt="${producto.titulo}"
                  />
                  <div class="card-body">
                    <h4 class="card-title">${producto.titulo}</h4>
                    <p class="card-text pt-3">${producto.descripcion}
                    </p>
                    <p class="card-text fs-2 pt-3">${producto.precio}
                    </p>
                  </div>
                  <div class="card-footer">
                  <a href="detalles.html" target="_blank" id="enlaces-detalles" 
                    ><small class="text-body-secondary"
                    ><i class="bi bi-zoom-in fw-bold fs-3" id ="masdetalles-ico" data-id="${producto.id}" ></i></small
                  ></a>
                  </div>
           `;

    contenedorProductos.append(content);

    

});
}

listaProductos();


document.addEventListener("click", (event) => {
  if (event.target.tagName == "I") {
    console.log(event.target.dataset.id);
    localStorage.setItem("id", event.target.dataset.id);
    window.location.href = "detalles.html";
  }
});