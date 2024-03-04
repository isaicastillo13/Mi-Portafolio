var overlay = document.getElementById("overlay");

function abrirMenu() {
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"
}

function cerrarMenu() {
  overlay.style.display = "none";
  document.body.style.overflow = "auto"
}
