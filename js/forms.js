document.addEventListener("DOMContentLoaded", function () {
    console.log("created by https://github.com/MarceloHenrique21")
    // Inicializa o EmailJS
    emailjs.init("TnPBahfEveN7UqBji"); // Substitua YOUR_PUBLIC_KEY pela sua chave pública do EmailJS

    // Manipula o envio do formulário
    const form = document.querySelector('.partnership-form');

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

