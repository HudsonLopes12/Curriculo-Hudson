// 1. GERENCIAMENTO DE TEMA (Com Persistência Local)
const botaoTema = document.querySelector('.theme-toggle');
const body = document.body;

// Carrega tema salvo anteriormente
const temaSalvo = localStorage.getItem('tema');
if (temaSalvo) {
    body.setAttribute('data-theme', temaSalvo);
    botaoTema.textContent = temaSalvo === 'dark' ? '☀️' : '🌙';
}

botaoTema.addEventListener('click', () => {
    const temaAtual = body.getAttribute('data-theme');
    const novoTema = temaAtual === 'light' ? 'dark' : 'light';
    
    body.setAttribute('data-theme', novoTema);
    botaoTema.textContent = novoTema === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('tema', novoTema);
});

// 2. SCROLLSPY (Ativa o item do menu correspondente à seção visível)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === currentSection) {
            link.classList.add('active');
        }
    });
});