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
    // Si el ancho es inferior a 576px mostrar iconos en botones
    if (widthWindow < 576) {
      btnTrendPrev.innerHTML = "<i class=\"fa-solid fa-angle-left\"></i>";
      btnTrendNext.innerHTML = "<i class=\"fa-solid fa-angle-right\"></i>";
    } else { // si es mayor a 576px mostrar el texto
      btnTrendPrev.innerText = "Anterior";
      btnTrendNext.innerText = "Siguiente";
    }
  });
  // disparar el evento resize cuando cargar el navegador
  window.dispatchEvent(new Event('resize'));

  // Conteneder peliculas aclamadas
  const acclaimedsContainer = document.querySelector("#acclaimedsContainer");
  //  Botón next slice peliculas aclamadas
  const acclaimedBtnNext = document.querySelector("#acclaimedBtnNext");
  //  Botón prev slice peliculas aclamadas
  const acclaimedBtnPrev = document.querySelector("#acclaimedBtnPrev");
  // Evento click botón next - mover slice hacia la izquierda
  acclaimedBtnNext.addEventListener('click', () => {
    acclaimedsContainer.scrollLeft += 400;
  });
  // Evento click botón prev - mover slice hacia la izquierda
  acclaimedBtnPrev.addEventListener('click', () => {
    acclaimedsContainer.scrollLeft -= 400;
  });

  //Scroll aclamadas - detectar inicio/fin para mostrar/ocultar botones next ó prev
  function verifyScrollAcclaimed() {
    // Verificar la posición final del contenedor
    if (acclaimedsContainer.scrollWidth - acclaimedsContainer.scrollLeft === acclaimedsContainer.clientWidth) {
      acclaimedBtnNext.disabled = true;
      acclaimedBtnNext.classList.add('acclaimed_btn-hide');
    } else {
      acclaimedBtnNext.disabled = false;
      acclaimedBtnNext.classList.remove('acclaimed_btn-hide');
    }
    // Verificar la posicion inicial del contenedor
    if (acclaimedsContainer.scrollLeft === 0) {
      acclaimedBtnPrev.disabled = true;
      acclaimedBtnPrev.classList.add('acclaimed_btn-hide');
    } else {
      acclaimedBtnPrev.disabled = false;
      acclaimedBtnPrev.classList.remove('acclaimed_btn-hide');
    }
  };
  // Llamar a función verificar scroll position y escuchar el evento scroll haciendo la verificación
  verifyScrollAcclaimed();
  acclaimedsContainer.addEventListener('scroll', verifyScrollAcclaimed);
  
  /* escuchar evento scroll para que detecte en que sección del index estoy y aplique la animación correspondiente
    según donde este */
  const searchContainer = document.querySelector("#searchContainer"); //contenedor search
  const trendsContainer = document.querySelector('#trends'); // contenedor peliculas - tendencias
  const acclaimedContainer = document.querySelector('#acclaimeds') // contenedor peliculas - aclamadas
// Escuchar evento scroll
  window.addEventListener('scroll', () => {
    const rect = searchContainer.getBoundingClientRect(); // obtener posicion scroll contenedor search
    // Si el contenedor esta parcialmente visible mostrar con animación
    if (rect.top < window.innerHeight) {
      searchContainer.classList.add('anim_slice_up');
      searchContainer.classList.remove('anim_slice_down');
      trendsContainer.classList.add('anim_slice_up');
      trendsContainer.classList.remove('anim_slice_down');
      acclaimedContainer.classList.add('anim_slice_up');
      acclaimedContainer.classList.remove('anim_slice_down');
    } else if (rect.top > window.innerHeight) { // sino volver a ocultar con animación
      searchContainer.classList.remove('anim_slice_up');
      searchContainer.classList.add('anim_slice_down');
      trendsContainer.classList.remove('anim_slice_up');
      trendsContainer.classList.add('anim_slice_down');
      acclaimedContainer.classList.remove('anim_slice_up');
      acclaimedContainer.classList.add('anim_slice_down');
    }
  });
});






