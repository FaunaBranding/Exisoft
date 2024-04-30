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

function showText() {
  var overlay = document.getElementById('overlay');
  overlay.style.opacity = "1";
}

function hideText() {
  var overlay = document.getElementById('overlay');
  overlay.style.opacity = "0";
}

function observabilidad() {
  window.location.href = './pages/novedades/observabilidad.html';
}

function eficiencia() {
  window.location.href = './pages/novedades/eficiencia.html';
}

function inteligencia() {
  window.location.href = './pages/novedades/inteligencia.html';
}

function sistemas() {
  window.location.href = './pages/novedades/sistemas.html';
}

function integracionHome() {
  window.location.href = './pages/novedades/integracion.html';
}

function openbanking() {
  window.location.href = './pages/novedades/openbanking.html';
}

function devops() {
  window.location.href = './pages/novedades/devops.html';
}

function nov8() {
  window.location.href = './novedades/observabilidad.html';
}

function nov7() {
  window.location.href = './novedades/eficiencia.html';
}

function nov0() {
  window.location.href = './novedades/inteligencia.html';
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

function inteligenciaNov() {
  window.location.href = './inteligencia.html';
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

function casosPampa () {
  window.location.href = './casos/pampa.html';
}

function casosSancor () {
  window.location.href = './casos/sancor.html';
}

function sancor () {
  window.location.href = './sancor.html';
}

function pampa () {
  window.location.href = './pampa.html';
}

function modernizacion () {
  window.location.href = './pages/servicios/modernizacion.html'
}

function integracion () {
  window.location.href = './pages/servicios/integracion.html'
}

function automatizacion () {
  window.location.href = './pages/servicios/automatizacion.html'
}

function toggleTexto(element) {
  var texto = element.nextElementSibling;
  if (texto.style.display === "none" || texto.style.display === "") {
    texto.style.display = "block";
  } else {
    texto.style.display = "none";
  }
}