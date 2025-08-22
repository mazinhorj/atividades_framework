// Responsável pela validação dos campos do formulário

$(document).ready(function () {
    // Adiciona um "listener" no formulário que é acionado no momento do envio (submit)
    $('#cadastro-form').on('submit', function (event) {
        // Impede o comportamento padrão do formulário (que recarregaria a página)
        event.preventDefault();

        // Limpa classes de erro e mensagens de alerta de envios anteriores
        $('.form-control').removeClass('is-invalid');
        $('#alert-messages').html('');

        let isValid = true; // Flag para controlar o estado da validação
        
        // 1. Validação de campos obrigatórios (aqueles com o atributo 'required')
        $('input[required]').each(function() {
            if ($(this).val().trim() === '') {
                isValid = false;
                $(this).addClass('is-invalid'); // Adiciona a borda vermelha do Bootstrap
            }
        });

        // 2. Validação específica do formato do E-mail
        const email = $('#email').val();
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (email.trim() !== '' && !emailRegex.test(email)) {
            isValid = false;
            $('#email').addClass('is-invalid');
            
            // Adiciona uma mensagem de erro específica para o email
            $('#alert-messages').append('<div class="alert alert-danger">Por favor, insira um endereço de e-mail válido.</div>');
        }
        
        // 3. Exibe uma mensagem de erro geral se algum campo obrigatório estiver vazio
        if (!isValid && $('#alert-messages').children().length === 0) {
             $('#alert-messages').append('<div class="alert alert-danger">Por favor, preencha todos os campos obrigatórios destacados.</div>');
        }

        // 4. Se o formulário for válido, exibe a mensagem de sucesso
        if (isValid) {
            $('#alert-messages').html('<div class="alert alert-success">Cadastro realizado com sucesso!</div>');
            
            // Opcional: Você pode descomentar a linha abaixo para limpar o formulário após o sucesso
            // $('#cadastro-form')[0].reset(); 
        }
    });
});