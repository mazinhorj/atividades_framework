# Projetos de Aula Prática: Frameworks para Desenvolvimento de Software
## Por Osmar Menezes da Silva
### UNOPAR/Anhanguera - 2025.2

Este repositório contém os projetos desenvolvidos durante as aulas práticas da disciplina "Framework para Desenvolvimento de Software", com base no roteiro de atividades fornecido. Os projetos abordam desde a configuração do ambiente até a criação de aplicações web com diferentes tecnologias.

## Projetos Inclusos

1.  *atividade01* (Atividade 1):* Simples configuração e criação de uma aplicação web Java utilizando o *Spring Web MVC*.

2.  *cadastroEndereco* (Atividade 2):* Projeto composto de um formulário para consumo de API de endereço oferecida pela ViaCEP. A proposta consiste em digitar o CEP e partir disso, os demais campos serem preenchidos comas informações de rua, bairro, cidade e estado..

3.  *cadastroUsuario (Atividade 3):* Uma aplicação web Java utilizando o *Spring Web MVC* para criar um formulário de cadastro de usuário completo. O projeto é executado em um servidor Apache Tomcat e utiliza JSP para a camada de visão e Bootstrap 5 para estilização.

4.  *cadastroUsuarioV2 (Atividade 4):* Uma aplicação puramente front-end que implementa um formulário de cadastro com funcionalidades avançadas. Utiliza *HTML5, Bootstrap 5, jQuery* e JavaScript para consumir a API da ViaCEP e realizar validações de campo em tempo real.

## Requisitos do Ambiente

Para executar todos os projetos deste repositório, você precisará do seguinte software:

-   *JDK 11* (Java Development Kit)
-   *JDK 24* (Java Development Kit)
-   *Apache Tomcat 9.0*
-   *Apache NetBeans IDE* (versão 12 ou superior recomendada)

## Guia de Configuração do Ambiente

Siga estes passos para configurar seu ambiente de desenvolvimento do zero.

### 1. Instalação do JDK (Java Development Kit)

É *essencial* utilizar o *JDK 11* na a atividade 3 para garantir a compatibilidade com a versão do Spring Framework utilizada no projeto cadastroUsuario. Versões mais recentes do JDK (como 17 ou 24) causarão um erro de *Unsupported class file major version* devido à incompatibilidade com as bibliotecas do Spring 4.x.

-   *Instalação:* Siga o instalador e, como boa prática, configure a variável de ambiente JAVA_HOME para apontar para o diretório de instalação do JDK.

### 2. Instalação do Apache Tomcat

O projeto Spring MVC foi desenvolvido e testado com o *Tomcat 9*. O roteiro original sugeria a versão 8.x, que não está mais facilmente disponível, e a versão 11 pode apresentar instabilidades com as dependências do projeto.

-   *Download:* Baixe o *Tomcat 9* na versão "64-bit Windows zip" em: [https://tomcat.apache.org/download-90.cgi](https://tomcat.apache.org/download-90.cgi)
-   *Instalação:* Descompacte o arquivo .zip em um local de fácil acesso e sem espaços no caminho, como C:\apache-tomcat-9.

### 3. Instalação e Configuração do NetBeans

-   *Download:* Baixe a versão mais recente do Apache NetBeans em: [https://netbeans.apache.org/download/](https://netbeans.apache.org/download/)


#### Integrando o Tomcat ao NetBeans

Após instalar o NetBeans, você precisa registrar seu servidor Tomcat:

1.  Abra o NetBeans.
2.  Vá para a aba *"Serviços"* (Services).
3.  Clique com o botão direito em *"Servidores"* (Servers) e selecione *"Adicionar Servidor..."* (Add Server...).
4.  Escolha *"Apache Tomcat or TomEE"* e clique em "Próximo".
5.  No campo "Localização do Servidor" (Server Location), clique em "Procurar..." (Browse...) e navegue até a pasta onde você descompactou o Tomcat (ex: C:\apache-tomcat-9).
6.  Deixe um nome de usuário e senha (opcional, mas recomendado) e clique em "Finalizar".

## Como Executar os Projetos


1.  No NetBeans, vá em *Arquivo > Abrir Projeto...* e selecione a pasta correspondente.
2.  Clique com o botão direito no projeto e vá em *"Propriedades"*.
3.  Na categoria *"Executar"* (Run), certifique-se de que o "Servidor" (Server) está definido para o *Apache Tomcat 9* que você acabou de configurar.
4.  Clique com o botão direito no projeto e selecione *"Limpar e Construir"*.
5.  Para executar, clique no botão de "Play" (Executar Projeto) ou pressione *F6*. O NetBeans iniciará o Tomcat e abrirá a aplicação no seu navegador.


### OBS. Projeto 4: cadastroUsuarioV2 (HTML/JavaScript)

Este projeto *não precisa do Tomcat*. O NetBeans utiliza um servidor web leve embutido para projetos front-end.

1.  No NetBeans, vá em *Arquivo > Abrir Projeto...* e selecione a pasta cadastroUsuarioV2.
2.  Defina-o como projeto principal (clique direito > "Definir como Projeto Principal").
3.  Para executar, simplesmente clique no botão de "Play" (Executar Projeto) ou pressione *F6*. O NetBeans abrirá a página index.html no seu navegador.

## Observações Importantes

-   *Extensão do NetBeans para Chrome:* A extensão "NetBeans Connector", sugerida em um dos roteiros, não está mais disponível na Chrome Web Store. A execução dos projetos, no entanto, funciona perfeitamente sem ela.
-   *Compatibilidade é a Chave:* A escolha do *JDK 11* e do *Tomcat 9* foi crucial para o sucesso da execução dos projetos, contornando problemas de compatibilidade entre versões de software que são muito comuns no desenvolvimento de sistemas.
