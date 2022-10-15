//menu icon
const menuIcon = document.getElementById('menu-icon');
//menu desplegable
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', menuDesplegable);

function menuDesplegable() {
    menu.classList.toggle('menu-activo');
}

//menu off
const menu_off = () => {
    menu.classList.remove('menu-activo')
}

//animacion btn home
const homeBtn = document.getElementById('home-btn');
const homeBtn2 = document.getElementById('home-btn2');

window.addEventListener('load', animacionBtn)
window.addEventListener('load', animacionBtn2)

function animacionBtn() {
    homeBtn.classList.add('animacion-btn');
}
function animacionBtn2() {
    homeBtn2.classList.add('animacion-btn');
}


//animacion home
const animacion_home = document.getElementById('animacion-home');
window.addEventListener('load', animacionHome);
function animacionHome() {
    animacion_home.classList.add('home-animacion');
}

//animacion nosotros-img
const nosotros_img1 = document.getElementById('nosotros-img1');
const nosotros_img2 = document.getElementById('nosotros-img2');

const cargarImgNosotros = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImgNosotros, {
    root: null,
    rootMargin: '0px',
    threshold: 0.4,
});

observador.observe(nosotros_img1)
observador.observe(nosotros_img2)


//animacion servicios-img
const servicios_img1 = document.getElementById('servicios-img1');
const servicios_img2 = document.getElementById('servicios-img2');
const servicios_img3 = document.getElementById('servicios-img3');
const servicios_img4 = document.getElementById('servicios-img4');
const servicios_img5 = document.getElementById('servicios-img5');

const cargarImgServicios = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visibleImg');
        }
    });
}

const observador2 = new IntersectionObserver(cargarImgServicios, {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
});


observador2.observe(servicios_img1)
observador2.observe(servicios_img2)
observador2.observe(servicios_img3)
observador2.observe(servicios_img4)
observador2.observe(servicios_img5)

//animacion contacto
const animacion_contacto = document.getElementById('animacion-contacto');

const cargarAnimacionContacto = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('animacion-contacto');
        }
    });
}

const observador3 = new IntersectionObserver(cargarAnimacionContacto, {
    root: null,
    rootMargin: '0px',
    threshold: 0.25,
});

observador3.observe(animacion_contacto)