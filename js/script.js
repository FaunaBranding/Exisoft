const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const title = document.querySelector("#title-home");
const overflow = document.querySelector("#overflow");
const nombre = document.querySelector("#nombre-equipo");
const nombre2 = document.querySelector("#nombre-equipo2");
const nombre3 = document.querySelector("#nombre-equipo3");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    title.classList.add("hidden");
    overflow.classList.add("overflow");
    nombre.classList.add("z-index");
    nombre2.classList.add("z-index");
    nombre3.classList.add("z-index");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    title.classList.remove("hidden");
    overflow.classList.remove("overflow");
    nombre.classList.remove("z-index");
    nombre2.classList.remove("z-index");
    nombre3.classList.remove("z-index");
})

document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const slides = Array.from(slider.children);
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, ind) => {
        if (ind === index) {
          slide.classList.remove('inactive-left', 'inactive-right');
        } else if (ind < index) {
          slide.classList.remove('inactive-right');
          slide.classList.add('inactive-left');
        } else {
          slide.classList.remove('inactive-left');
          slide.classList.add('inactive-right');
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 5000);
  });

document.addEventListener('DOMContentLoaded', function () {
    const inputFile = document.getElementById('archivoInput');
    const sumateArchivoBtn = document.getElementById('sumateArchivoBtn');
    const sumateForm = document.getElementById('sumateForm');
    const nombreArchivoP = document.getElementById('nombreArchivo');

    sumateArchivoBtn.addEventListener('click', function () {
        inputFile.click();
    });

    inputFile.addEventListener('change', function () {
        if (inputFile.value) {
            nombreArchivoP.textContent = `Archivo seleccionado: ${inputFile.value.split('\\').pop()}`;
        } else {
            nombreArchivoP.textContent = '';
        }
    });

    sumateForm.addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
    });
});

document.getElementById("pampa").addEventListener("click", function () {
    window.open("./casos/pampa.html");
});

document.getElementById("sancor").addEventListener("click", function () {
    window.open("./casos/sancor.html");
});

function teisa() {
  window.location.href = './pages/novedades/teisa.html';
}

function teisanov() {
  window.location.href = './novedades/teisa.html';
}

function toggleTexto(element) {
  var texto = element.parentElement.parentElement.querySelector('.texto');
  if (texto.style.display === "none") {
      texto.style.display = "block";
      element.innerText = "▲";
  } else {
      texto.style.display = "none";
      element.innerText = "▼";
  }
}