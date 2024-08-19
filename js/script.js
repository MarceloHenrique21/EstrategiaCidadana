document.addEventListener("DOMContentLoaded", function () {
    console.log("created by https://github.com/MarceloHenrique21");

    // Inicializa o EmailJS
    emailjs.init("TnPBahfEveN7UqBji"); // Substitua pela sua chave pública do EmailJS

    const banner = document.querySelector('.banner');
    const bannerHeight = banner ? banner.offsetHeight : 0;
    // Manipula a borda
    document.querySelectorAll('input, textarea').forEach(element => {
        element.addEventListener('focus', function () {
            this.style.borderColor = 'transparent';
        });
        element.addEventListener('blur', function () {
            this.style.borderColor = 'black';
        });
    });


    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
            menuToggle.classList.toggle('open');
        });
    }

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

    checkVisibility();
    window.addEventListener('scroll', checkVisibility);

    // Manipula o envio do formulário
    const form = document.querySelector('.formulario');

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const subject = form.querySelector('#assunto').value;

            // Define o ID do template com base na seleção
            let templateID = '';
            if (subject === 'Duvida') {
                templateID = 'template_rxwnpv7'; // ID do template para dúvidas
                console.log("opcao duvida foi selecionada")
            } else if (subject === 'Ebook') {
                templateID = 'template_ebook'; //ID do template para o ebook
                console.log("opcao ebook foi selecionada")
            } else {
                alert('Por favor, selecione um assunto válido.');
                return;
            }

            emailjs.sendForm('service_ew0ts4s', templateID, form)
                .then((response) => {
                    console.log('Success:', response);
                    console.log("forms enviado!")
                    form.reset(); 
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
