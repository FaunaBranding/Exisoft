const btn2 = document.getElementById('button-contacto');

document.getElementById('form-contacto')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn2.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_8bpt1fj';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn2.value = '¡Correo Enviado!';
    }, (err) => {
      btn2.value = '¡Correo Enviado!';
      alert(JSON.stringify(err));
    });
});