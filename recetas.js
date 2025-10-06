const recetasPorEdad = {
  grupo1: [
    ["Atragantamiento o asfixia", "Acciones rapidas", "img/recetas/asfixiabebes.jpg", "asfixiabebes.html"],
    ["Paro cardiorespiratorio en bebes (RCP)", "Pequeñas bolitas de arroz...", "img/recetas/parocardiorespiratorio.jpg", "parocardiorespiratorio.html"],
    ["Convulsiones (por fiebre alta o epilepsia)", "Tortillas horneadas...", "img/recetas/convulsiones.jpg", "convulsiones.html"],
    ["Golpes y caídas", "Panqueques saludables...", "img/recetas/golpesycaidas.jpg", "golpesycaidas.html"],
    ["Quemaduras", "Crujientes por fuera...", "img/recetas/quemaduras.jpg", "quemaduras.html"],
    ["Intoxicaciones", "Empanadas horneadas...", "img/recetas/intoxicaciones.jpg", "intoxicaciones.html"]
  ],
  grupo2: [
    ["Heridas y hemorragias", "Un burrito nutritivo...", "img/recetas/heridasyhemorragias.jpg", "heridasyhemorragias.html"],
    ["Fracturas y esguinces", "Una ensalada fresca...", "img/recetas/fracturayesguince.jpg", "fracturayesguince.html"],
    ["Quemaduras (hogar o experimentos escolares)", "Una hamburguesa pequeña...", "img/recetas/quemah.jpg", "quemah.html"],
    ["Asfixia por atragantamiento", "Un wrap suave...", "img/recetas/asfixipa.jpg", "asfixipa.html"],
    ["Desmayos (muy frecuentes en adolescentes)", "Crujientes tiritas...", "img/recetas/desmayos.jpg", "desmayos.html"],
    ["Golpes en la cabeza", "Galletas de avena...", "img/recetas/golpescabeza.jpg", "golpescabeza.html"]
  ],
  grupo3: [
    ["Hemorragias (sangrado abundante)", "Un sándwich integral...", "img/recetas/hemosa.jpg", "hemosa.html"],
    ["Heridas leves (cortes o raspones)", "Un bowl nutritivo...", "img/recetas/heridale.jpg", "heridale.html"],
    ["Quemaduras", "Una pizza casera...", "img/recetas/quemadurasadul.jpg", "quemadurasadul.html"],
    ["Fracturas o esguinces", "Un taco de tortilla...", "img/recetas/esguin.jpg", "esguin.html"],
    ["Paro cardiorrespiratorio", "Fideos con pesto...", "img/recetas/parocar.jpg", "parocar.html"],
    ["Desmayos", "Una mezcla refrescante...", "img/recetas/desma.jpg", "desma.html"]
  ],
  grupo4: [
    ["Caídas y fracturas", "Un sándwich integral...", "img/recetas/caidafrac.jpg", "caidafrac.html"],
    ["Golpes en la cabeza", "Un bowl nutritivo...", "img/recetas/golpesca.jpg", "golpesca.html"],
    ["Dificultad respiratoria", "Una pizza casera...", "img/recetas/difires.jpg", "difires.html"],
    ["Deshidratación", "Un taco de tortilla...", "img/recetas/deshidratacion.jpg", "deshidratacion.html"],
    ["Hipotermia", "Fideos con pesto...", "img/recetas/hipotermia.jpg", "hipotermia.html"],
    ["Confusión o alteración del estado mental", "Una mezcla refrescante...", "img/recetas/confual.jpg", "confual.html"]
  ]
};

document.getElementById("formulario").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let grupo = "";
  if (edad >= 1  && edad <= 9) grupo = "grupo1";
  else if (edad >= 10 && edad <= 19) grupo = "grupo2";
  else if (edad >= 20 && edad <= 59) grupo = "grupo3";
  else if (edad >= 60&& edad <= 95) grupo = "grupo4";

  if (!grupo) {
    resultado.innerHTML = "<p>No hay recetas disponibles para esta edad.</p>";
    return;
  }

  resultado.innerHTML = `<h2>Hola ${nombre}, estas recetas son ideales para niños de ${edad} años:</h2><div class="receta-galeria">`;
  recetasPorEdad[grupo].forEach(([titulo, descripcion, imagen, enlace]) => {
    resultado.innerHTML += `
      <div class="card">
        <img src="${imagen}" alt="${titulo}">
        <div class="card-content">
          <h3>${titulo}</h3>
          <p>${descripcion}</p>
          <a href="${enlace}">Leer consejos ></a>
        </div>
      </div>
    `;
  });
  resultado.innerHTML += "</div>";
});
