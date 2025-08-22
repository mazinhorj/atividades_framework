package br.com.cadastrousuario.controller;

import br.com.cadastrousuario.model.Usuario;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class CadastroController {

    
    @RequestMapping(value = "/index.htm", method = RequestMethod.GET)
    public String exibirIndex() {
        // Apenas retorna o nome da página JSP que será exibida
        return "index";
    }

    /**
     * Método para exibir o formulário de cadastro (GET). Mapeado para a URL
     * /cadastro.htm.
     *
     * @param model
     * @return
     */
    @RequestMapping(value = "/cadastro.htm", method = RequestMethod.GET)
    public String exibirFormulario(Model model) {
        // Cria um novo objeto Usuario para vincular ao formulário
        Usuario usuario = new Usuario();

        // Adiciona o objeto ao model para que a view (JSP) possa acessá-lo
        model.addAttribute("usuarioForm", usuario);

        // Retorna o nome da página JSP que será exibida
        return "cadastro";
    }

    /**
     * Método para processar o envio do formulário (POST). Mapeado para a URL
     * /cadastro.htm.
     *
     * @param usuario
     * @return
     */
    @RequestMapping(value = "/cadastro.htm", method = RequestMethod.POST)
    public String processarFormulario(@ModelAttribute("usuarioForm") Usuario usuario) {

        // Aqui você faria a lógica de negócio, como salvar o usuário no banco de dados.
        // Por enquanto, vamos apenas imprimir os dados no console para verificar.
        System.out.println("---- DADOS DO USUÁRIO CADASTRADO ----");
        System.out.println("Nome: " + usuario.getNome());
        System.out.println("Sobrenome: " + usuario.getSobrenome());
        System.out.println("Email: " + usuario.getEmail());
        System.out.println("CEP: " + usuario.getCep());
        System.out.println("Cidade: " + usuario.getCidade());
        System.out.println("-------------------------------------");

        // Redireciona para uma página de sucesso
        return "sucesso";
    }
}
