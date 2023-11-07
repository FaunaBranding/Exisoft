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

$(document).ready(function() {
  const content1 = $('.casos-home-pampa');
  const content2 = $('.casos-home-sancor');

  content1.hide();

  setInterval(function() {
    if (content1.css('display') === 'none') {
      content2.fadeOut(800, function() {
        content1.fadeIn(800);
      });
    } else {
      content1.fadeOut(800, function() {
        content2.fadeIn(800);
      });
    }
  }, 4000);
});

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

function sistemas() {
  window.location.href = './pages/novedades/sistemas.html';
}

function integracion() {
  window.location.href = './pages/novedades/integracion.html';
}

function openbanking() {
  window.location.href = './pages/novedades/openbanking.html';
}

function devops() {
  window.location.href = './pages/novedades/devops.html';
}

function nov1() {
  window.location.href = './novedades/integracion.html';
}

function nov2() {
  window.location.href = './novedades/sistemas.html';
}

function nov3() {
  window.location.href = './novedades/openbanking.html';
}

function nov4() {
  window.location.href = './novedades/devops.html';
}

function nov5() {
  window.location.href = './novedades/metodo.html';
}

function nov6() {
  window.location.href = './novedades/hiperautomatizacion.html';
}

function integracionNov() {
  window.location.href = './integracion.html';
}

function sistemasNov() {
  window.location.href = './sistemas.html';
}

function openbankingNov() {
  window.location.href = './openbanking.html';
}

function devopsNov() {
  window.location.href = './devops.html';
}

function metodoNov() {
  window.location.href = './metodo.html';
}

function hiperautomatizacionNov() {
  window.location.href = './hiperautomatizacion.html';
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