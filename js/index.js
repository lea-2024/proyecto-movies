const btnMenuOpen = document.querySelector("#btnMenuOpen"); // referencia Botón abrir menú nav
const btnMenuClose = document.querySelector("#btnMenuClose"); // referencia Botón cerrar menú nav
const headerListLinks = document.querySelector("#headerListLinks"); // referencia menú links nav
const navLinks = document.querySelectorAll(".header_items"); // referencia items links del nav

// abrir menu de navegación responsive
btnMenuOpen.addEventListener('click', () => {
  headerListLinks.classList.remove('hide_links-animation');
  headerListLinks.classList.add('show_links');
  headerListLinks.classList.add('show_links-animation');
  btnMenuOpen.classList.remove('btn_menu-active');
  btnMenuClose.classList.add('btn_menu-active');
});

// cerrar menu de navegación responsive
btnMenuClose.addEventListener('click', () => {
  headerListLinks.classList.add('hide_links-animation');
  setTimeout(() => {
    headerListLinks.classList.remove('show_links');
  }, 500);
  btnMenuOpen.classList.add('btn_menu-active');
  btnMenuClose.classList.remove('btn_menu-active');
});

// Cerrar menú de navegación responsive cuando se hace click en un link
for (let link of navLinks) {
  link.addEventListener('click', () => {
    headerListLinks.classList.add('hide_links-animation');
    setTimeout(() => {
      headerListLinks.classList.remove('show_links');
    }, 500);
    btnMenuOpen.classList.add('btn_menu-active');
    btnMenuClose.classList.remove('btn_menu-active');
  });
}

// acceder al botón tendencias anterior
const btnTrendPrev = document.querySelector("#btnTrendPrev");
// acceder al botón tendencias siguiente
const btnTrendNext = document.querySelector("#btnTrendNext");

// Escuchar evento resize al cargar la pagina
document.addEventListener('DOMContentLoaded', () => {
// Escuchar el evento resize para cambiar contenido de botón anterior/siguiente en index tendencias
  window.addEventListener('resize', () => {
    const widthWindow = window.innerWidth; // obtener el ancho de la ventana
    if (widthWindow < 576) {
      btnTrendPrev.innerHTML = "<i class=\"fa-solid fa-angle-left\"></i>";
      btnTrendNext.innerHTML = "<i class=\"fa-solid fa-angle-right\"></i>";
    } else {
      btnTrendPrev.innerText = "Anterior";
      btnTrendNext.innerText = "Siguiente";
    }
  });
  window.dispatchEvent(new Event('resize'));
});





