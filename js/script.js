// const contenedorProductos = document.querySelector("#contenedor-productos");

let productos;

fetch("js/productos.json")
.then((response) => response.json())
.then((json) => {
  localStorage.setItem("listado", JSON.stringify(json));
  });
// Ahora lo obtengo con el getItem
const listadoProductos = JSON.parse(localStorage.getItem("listado"));
// creo una cosntante para la ul en dnd voy a agregar los elementos
const contenedorProductos = document.querySelector("#contenedor-productos");


listadoProductos.forEach((producto) => {
    let content = document.createElement("div");
     // creo items respetando los nombres de bootstrap
     content.className = "col";
     content.innerHTML = `
     <div class="card h-100">
              <img
                src="${producto.imagen}"
                class="card-img-top img--notebook"
                alt="${producto.titulo}"
              />
              <div class="card-body">
                <h4 class="card-title">${producto.titulo}</h4>
                <p class="card-text pt-3">${producto.descripcion}
                </p>
              </div>
              <div class="card-footer">
                <a href="detalles.html" target="_blank" 
                  ><small class="text-body-secondary"
                    ><i class="bi bi-zoom-in fw-bold fs-3"></i></small
                ></a>
              </div>
       `;
       
       contenedorProductos.append(content);
     });

// const listaProductos = async () => {
//   contenedorProductos.innerHTML = "";
    
//   productos = localStorage.getItem("productos");

//   if(productos == null){

//   const response = await fetch("js/productos.json");
  
//   productos = await response.json();

//   localStorage.setItem("productos", JSON.stringify(productos));

// }
//  if(typeof productos == "string"){
//     productos = JSON.parse(productos);
// }
//     console.log(productos);
    
// }

// listaProductos();

// listaProductos.forEach((producto) => {
//     let content = document.createElement("div");
//      // creo items respetando los nombres de bootstrap
//      content.className = "col";
//      content.innerHTML = `
//      <div class="card h-100">
//               <img
//                 src="${producto.imagen}"
//                 class="card-img-top img--notebook"
//                 alt="${producto.titulo}"
//               />
//               <div class="card-body">
//                 <h4 class="card-title">Lenovo IdeaPad 3i</h4>
//                 <p class="card-text pt-3">${producto.descripcion}
//                 </p>
//               </div>
//               <div class="card-footer">
//                 <a href="detalles.html" target="_blank" 
//                   ><small class="text-body-secondary"
//                     ><i class="bi bi-zoom-in fw-bold fs-3"></i></small
//                 ></a>
//               </div>
//        `;
       
//        contenedorProductos.append(content);
//      });
  