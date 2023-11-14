const btn = document.getElementById('button');

document.getElementById('sumate-form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_zq02njf';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = '¡Correo Enviado!';
    }, (err) => {
      btn.value = '¡Correo Enviado!';
      alert(JSON.stringify(err));
    });
});