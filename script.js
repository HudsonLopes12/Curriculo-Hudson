// 1. SELEÇÃO DE ELEMENTOS
// Agora buscamos o botão pela CLASSE que você colocou no HTML
const botaoTema = document.querySelector('.theme-toggle');
const body = document.body;

// 2. CRIANDO A AÇÃO (Ouvinte de Eventos)
botaoTema.addEventListener('click', function () {

    // 3. A LÓGICA PRINCIPAL (Verificando o atributo data-theme)
    // Pega o valor atual do tema (light ou dark)
    const temaAtual = body.getAttribute('data-theme');

    // 4. TROCA O TEMA E O ÍCONE
    if (temaAtual === 'light') {
        // Se for claro, muda para escuro e altera o emoji
        body.setAttribute('data-theme', 'dark');
        botaoTema.textContent = '☀️';
    } else {
        // Se já for escuro, volta para o claro e altera o emoji
        body.setAttribute('data-theme', 'light');
        botaoTema.textContent = '🌙';
    }
});


