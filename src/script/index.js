//const data = require("./datos");

const data = {
  categorias: [
    {
      id: 0,
      nombre: "Novela Histórica",
      imagen: "./img/novela_historica_large.png",
      enlace: "./categoria.html?categoria=0",
    },
    {
      id: 1,
      nombre: "Policiaca",
      imagen: "./img/novela_negra_large.png",
      enlace: "./categoria.html?categoria=1",
    },
    {
      id: 2,
      nombre: "Clásicos",
      imagen: "./img/ciencia_ficcion_large.png",
      enlace: "./categoria.html?categoria=2",
    },
    {
      id: 3,
      nombre: "Poesía",
      imagen: "./img/fantasia_large.png",
      enlace: "./categoria.html?categoria=3",
    },
  ],
  libros: [
    {
      categoria: 1,
      titulo: "El Código Da Vinci",
      autor: "Dan Brown",
      imagenPequeña: "",
      imagenGrande: "",
      resumen: "",
    },
    {
      categoria: 1,
      titulo: "",
      autor: "",
      imagenPequeña: "",
      imagenGrande: "",
      resumen: "",
    },
  ],
};
window.onload = function () {
  const categorias = document.getElementById("container");
  data.categorias.forEach((dato) => {
    const div = document.createElement("div");
    const enlaceCategoria = document.createElement("a");
    const imagen = document.createElement("img");
    imagen.className = "img-categoria";
    imagen.src = dato.imagen;
    enlaceCategoria.href = dato.enlace;
    enlaceCategoria.appendChild(imagen);

    div.appendChild(enlaceCategoria);
    div.className = "categoria";
    categorias.appendChild(div);
  });
};
