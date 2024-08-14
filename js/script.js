document.addEventListener("DOMContentLoaded", function () {
    console.log("created by https://github.com/MarceloHenrique21")
    // Inicializa o EmailJS
    emailjs.init("TnPBahfEveN7UqBji"); // Substitua YOUR_PUBLIC_KEY pela sua chave pública do EmailJS

    // Manipula a cor de fundo do header
    const header = document.querySelector('header');
    const banner = document.querySelector('.banner');
    const bannerHeight = banner ? banner.offsetHeight : 0; // Verifica se o banner existe e obtém a sua altura

    function updateHeader() {
        if (window.scrollY < bannerHeight) {
            header.style.backgroundColor = 'transparent'; // Fundo transparente no topo
        } else {
            header.style.backgroundColor = '#FFFFFF'; // Fundo branco quando rolado para baixo
        }
    }

    window.addEventListener('scroll', updateHeader);

    // Inicializa a cor do cabeçalho
    updateHeader();

    // Manipula a borda
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', function () {
            this.style.borderColor = 'transparent'; // Remove a cor da borda ao focar
        });
        element.addEventListener('blur', function () {
            this.style.borderColor = 'black'; // Restaura a cor da borda ao desfocar
        });
    });

    // Manipula o menu "hamburger"
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu'); // Corrigido para .nav-menu

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('open');
        });
    }

    // Manipula a visibilidade da seção .topicos
    const topicos = document.querySelector('.topicos');

    function checkVisibility() {
        if (topicos) {
            const rect = topicos.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top <= windowHeight && rect.bottom >= 0) {
                topicos.classList.add('visible');
            } else {
                topicos.classList.remove('visible');
            }
        }
    }

    // Verifica a visibilidade inicialmente e ao rolar a página
    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // Manipula o envio do formulário
    const form = document.querySelector('.formulario');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Impede o envio padrão do formulário

            emailjs.sendForm('service_ew0ts4s', 'template_rxwnpv7', form)
                .then((response) => {
                    console.log('Success:', response);
                    alert('Sua mensagem foi enviada com sucesso!');
                    form.reset(); // Limpa o formulário após envio
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
                });
        });
    } else {
        console.error("Formulário não encontrado.");
    }
});
