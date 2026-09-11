// ===============================
// MENU MOBILE
// ===============================

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}


// ===============================
// FECHAR MENU AO CLICAR EM UM LINK
// ===============================

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav) {
            nav.classList.remove('active');
        }
    });
});


// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// ===============================
// ANO AUTOMÁTICO NO RODAPÉ
// ===============================

const year = document.querySelector('#year');

if (year) {
    year.textContent = new Date().getFullYear();
}

