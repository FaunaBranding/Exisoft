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
    nav.classList.add("navbar-width");
    title.classList.add("hidden");
    overflow.classList.add("overflow");
    nombre.classList.add("z-index");
    nombre2.classList.add("z-index");
    nombre3.classList.add("z-index");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    nav.classList.remove("navbar-width");
    title.classList.remove("hidden");
    overflow.classList.remove("overflow");
    nombre.classList.remove("z-index");
    nombre2.classList.remove("z-index");
    nombre3.classList.remove("z-index");
})

const content1 = document.querySelector('.casos-home-pampa');
const content2 = document.querySelector('.casos-home-sancor');

setInterval(function() {
    if (content1.style.display === "none") {
        content1.style.display = "block";
        content2.style.display = "none";
    } else {
        content1.style.display = "none";
        content2.style.display = "block";
    }
}, 3000);

  function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const uploadedFileLink = document.getElementById('uploadedFileLink');
    const file = fileInput.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
        const fileURL = e.target.result;
        const fileName = file.name;
        const link = document.createElement('a');
        link.href = fileURL;
        link.innerText = fileName;
        uploadedFileLink.appendChild(link);
    }

    fileReader.readAsDataURL(file);
}

function showText() {
  var overlay = document.getElementById('overlay');
  overlay.style.opacity = "1";
}

function hideText() {
  var overlay = document.getElementById('overlay');
  overlay.style.opacity = "0";
}

const btn = document.getElementById('button');

document.getElementById('sumate-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_pateon4';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '¡Correo Enviado!';
    }, (err) => {
      btn.value = '¡Correo Enviado!';
      alert(JSON.stringify(err));
    });
});

document.getElementById("pampa").addEventListener("click", function () {
    window.open("./casos/pampa.html");
});

document.getElementById("sancor").addEventListener("click", function () {
    window.open("./casos/sancor.html");
});

function teisa() {
  window.location.href = './pages/novedades/modernizacion1.html';
}

function teisanov() {
  window.location.href = './novedades/modernizacion1.html';
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