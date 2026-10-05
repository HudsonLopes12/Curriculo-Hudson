// 1. GERENCIAMENTO DO TEMA (Claro/Escuro)
const botaoTema = document.querySelector('.theme-toggle');
const body = document.body;

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

// 2. BOTÃO VOLTAR AO TOPO (Exibe após rolar a página)
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 3. SCROLLSPY (Menu com item ativo conforme a rolagem)
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
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// 4. CONTADOR DE CARACTERES
const mensagemInput = document.getElementById('mensagem');
const charCount = document.getElementById('charCount');

if (mensagemInput && charCount) {
    mensagemInput.addEventListener('input', () => {
        charCount.textContent = mensagemInput.value.length;
    });
}

// 5. ENVIO DO FORMULÁRIO (EXIBIR BOTÃO DE RASCUNHO E AVISO)
const contactForm = document.getElementById('contactForm');
const emailResult = document.getElementById('emailResult');
const mailToLink = document.getElementById('mailToLink');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        const meuEmail = 'hudson.lopes@alunos.ifsuldeminas.edu.br';
        const subject = encodeURIComponent(`[Contato Site] ${assunto} - ${nome}`);
        const body = encodeURIComponent(`Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`);

        // Atualiza o link mailto no botão dinâmico
        mailToLink.href = `mailto:${meuEmail}?subject=${subject}&body=${body}`;

        // Exibe o contêiner com o botão de rascunho e a mensagem verde
        emailResult.style.display = 'block';
    });
}