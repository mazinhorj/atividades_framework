// Responsável pelo consumo da API ViaCEP

$(document).ready(function () {
    // Adiciona um "listener" no campo de CEP que é acionado quando o campo perde o foco
    $('#cep').on('blur', function () {
        
        // Pega o valor do CEP digitado e remove caracteres não numéricos
        const cep = $(this).val().replace(/\D/g, '');

        // Verifica se o campo CEP possui 8 dígitos
        if (cep.length !== 8) {
            return; // Se não tiver, não faz nada
        }
        
        // Exibe um feedback de carregamento para o usuário nos campos de endereço
        $('#rua, #bairro, #cidade, #estado').val('Buscando...');

        // Faz a requisição AJAX para a API ViaCEP usando jQuery
        $.getJSON(`https://viacep.com.br/ws/${cep}/json/`, function (data) {
            if (!("erro" in data)) {
                // Se a API retornou um endereço válido, preenche os campos do formulário
                $('#rua').val(data.logradouro);
                $('#bairro').val(data.bairro);
                $('#cidade').val(data.localidade);
                $('#estado').val(data.uf);
                $('#numero').focus(); // Move o cursor para o campo "Número"
            } else {
                // Se o CEP não for encontrado pela API
                alert('CEP não encontrado.');
                $('#rua, #bairro, #cidade, #estado').val('');
            }
        }).fail(function() {
            // Se ocorrer um erro na comunicação com a API
            alert('Ocorreu um erro ao buscar o CEP. Tente novamente.');
            $('#rua, #bairro, #cidade, #estado').val('');
        });
    });
});