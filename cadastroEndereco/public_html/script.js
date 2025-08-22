/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

document.addEventListener('DOMContentLoaded', function() {
    const cepForm = document.getElementById('cepForm');
    const cepInput = document.getElementById('cep');
    const logradouroInput = document.getElementById('logradouro');
    const numeroInput = document.getElementById('numero');
    const complementoInput = document.getElementById('complemento');
    const bairroInput = document.getElementById('bairro');
    const localidadeInput = document.getElementById('localidade');
    const ufInput = document.getElementById('uf');
    const btnSalvar = document.getElementById('btnSalvar');
    const btnLimpar = document.getElementById('btnLimpar');
    
    // Máscara para o CEP (formato: 00000-000)
    cepInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length > 5) {
            value = value.substring(0, 5) + '-' + value.substring(5, 8);
        }
        
        e.target.value = value;
    });
    
    // Auto-consulta quando o CEP está completo
    cepInput.addEventListener('blur', function() {
        if (this.value.length === 9) {
            consultarCEP(this.value.replace('-', ''));
        }
    });
    
    cepForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const cep = cepInput.value.replace(/\D/g, '');
        
        if (cep.length !== 8) {
            alert('CEP deve conter 8 dígitos');
            return;
        }
        
        consultarCEP(cep);
    });
    
    btnSalvar.addEventListener('click', function() {
        if (validarFormulario()) {
            alert('Endereço salvo com sucesso!\n\n' + 
                  `CEP: ${cepInput.value}\n` +
                  `Endereço: ${logradouroInput.value}, ${numeroInput.value}\n` +
                  (complementoInput.value ? `Complemento: ${complementoInput.value}\n` : '') +
                  `Bairro: ${bairroInput.value}\n` +
                  `Cidade: ${localidadeInput.value}\n` +
                  `Estado: ${ufInput.value}`);
        }
    });
    
    btnLimpar.addEventListener('click', limparFormulario);
    
    async function consultarCEP(cep) {
        try {
            // Adiciona classe de loading ao botão
            const submitBtn = cepForm.querySelector('button[type="submit"]');
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            
            // Faz a requisição para a API ViaCEP (alternativa aos Correios)
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
            
            if (!response.ok) {
                throw new Error('Erro na consulta');
            }
            
            const data = await response.json();
            
            if (data.erro) {
                throw new Error('CEP não encontrado');
            }
            
            // Preenche os campos
            logradouroInput.value = data.logradouro || '';
            bairroInput.value = data.bairro || '';
            localidadeInput.value = data.localidade || '';
            ufInput.value = data.uf || '';
            
            // Foca no campo número após a consulta
            numeroInput.focus();
            
        } catch (error) {
            alert(error.message);
            console.error('Erro ao consultar CEP:', error);
        } finally {
            // Remove classe de loading
            const submitBtn = cepForm.querySelector('button[type="submit"]');
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    }
    
    function limparFormulario() {
        cepForm.reset();
        cepInput.focus();
    }
    
    function validarFormulario() {
        const camposObrigatorios = [
            cepInput,
            logradouroInput,
            numeroInput,
            bairroInput,
            localidadeInput,
            ufInput
        ];
        
        let valido = true;
        
        camposObrigatorios.forEach(campo => {
            if (!campo.value.trim()) {
                campo.classList.add('is-invalid');
                valido = false;
            } else {
                campo.classList.remove('is-invalid');
            }
        });
        
        if (!valido) {
            alert('Por favor, preencha todos os campos obrigatórios marcados com *');
        }
        
        return valido;
    }
    
    // Remove a classe de erro quando o usuário começa a digitar
    const campos = document.querySelectorAll('input');
    campos.forEach(campo => {
        campo.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });
});
