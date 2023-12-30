const darkLightMod = document.getElementById("change-mode");
const goUp = document.querySelector('.return-top');
const burgerIcon = document.querySelector('.fa-solid');
const menuIcon = document.querySelector('.menu-icon');
const navMenu = document.querySelector('.navmenu');
const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const hesloFirst = document.querySelector('.heslo');
const heslosecond = document.querySelector('.heslo-check');
const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notHeslo = document.querySelector(".notificationHeslo");
const wrongHeslo = document.querySelector(".notificationWrongHeslo");
const body = document.querySelector('body');
const formular = document.querySelector('form');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        goUp.style.display = 'flex';
    } else {
        goUp.style.display = 'none';
    }
})

goUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
    behavior: 'smooth'
    });
});

menuIcon.addEventListener('click', () => {
    if (burgerIcon.classList[1] === 'fa-bars') {
        burgerIcon.classList.add ('fa-xmark');
        burgerIcon.classList.remove('fa-bars');
        navMenu.style.display = 'block';
    } else if (burgerIcon.classList[1] === 'fa-xmark') {
        burgerIcon.classList.add ('fa-bars');
        burgerIcon.classList.remove('fa-xmark');
        navMenu.style.display = 'none';
    }
})

darkLightMod.addEventListener('click',toggleMode,);

function toggleMode() {
    body.classList.toggle('white-mode'); 
}

formular.addEventListener('submit', (Event)=>{
    Event.preventDefault()
    notName.style.display = fullName.value ==="" ? "block" : "none";
    notEmail.style.display = email.value ==="" ? "block" : "none";
    notHeslo.style.display = hesloFirst.value ===''? 'block' : 'none';
    if (hesloFirst.value === heslosecond.value) {
        wrongHeslo.style.display ='none';
    } else{
        wrongHeslo.style.display ='block';
    }
})