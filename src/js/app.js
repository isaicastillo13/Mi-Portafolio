const overlay = document.getElementById("overlay");
const proyectos = document.getElementById("enlaceProyecto");
const habilidades = document.getElementById("enlaceHabilidades");
const contacto = document.getElementById("enlaceContacto");

proyectos.addEventListener('click', function(evento) {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"
  
});

habilidades.addEventListener('click', function(evento) {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"
});

contacto.addEventListener('click', function(evento) {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"
});



function abrirMenu() {
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"
}

function cerrarMenu() {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"
}

const emailInput = document.getElementById('emailInput');

    // Agregar un detector de eventos para el clic en el campo de entrada
    emailInput.addEventListener('click', function() {
      // Obtener el valor del campo de entrada
      const correoElectronico = emailInput.value;

      // Verificar si se ingresó un correo electrónico
      if (correoElectronico) {
        // Crear el enlace mailto con el correo electrónico ingresado
        const mailtoLink = `mailto:${correoElectronico}`;

        // Abrir el cliente de correo electrónico predeterminado
        window.open(mailtoLink);
      }
    });