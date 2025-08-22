<%-- 
    Document   : cadastro
    Created on : 22 de ago. de 2025, 12:11:13
    Author     : Osmar
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Formulário de Cadastro</title>
        
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
              rel="stylesheet" 
              integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
              crossorigin="anonymous">
    </head>
    <body class="bg-light">

        <div class="container">
            <main>
                <div class="py-5 text-center">
                    <h2>Formulário de Cadastro</h2>
                    <p class="lead">Preencha os campos abaixo para se cadastrar em nossa plataforma.</p>
                </div>

                <div class="row g-5">
                    <div class="col-md-8 col-lg-8 mx-auto">
                        <h4 class="mb-3">Dados Pessoais</h4>
                        
                        <form:form method="post" action="cadastro.htm" modelAttribute="usuarioForm">
                            <div class="row g-3">
                                
                                <div class="col-sm-6">
                                    <label for="nome" class="form-label">Nome</label>
                                    <form:input path="nome" id="nome" cssClass="form-control" required="true"/>
                                </div>

                                <div class="col-sm-6">
                                    <label for="sobrenome" class="form-label">Sobrenome</label>
                                    <form:input path="sobrenome" id="sobrenome" cssClass="form-control" required="true"/>
                                </div>

                                <div class="col-12">
                                    <label for="email" class="form-label">Email</label>
                                    <form:input type="email" path="email" id="email" cssClass="form-control" placeholder="voce@exemplo.com" required="true"/>
                                </div>

                                <div class="col-12">
                                    <label for="senha" class="form-label">Senha</label>
                                    <form:password path="senha" id="senha" cssClass="form-control" required="true"/>
                                </div>
                            </div>

                            <hr class="my-4">

                            <h4 class="mb-3">Endereço</h4>

                            <div class="row g-3">
                                <div class="col-sm-4">
                                    <label for="cep" class="form-label">CEP</label>
                                    <form:input path="cep" id="cep" cssClass="form-control" required="true"/>
                                </div>
                                <div class="col-12">
                                    <label for="rua" class="form-label">Rua</label>
                                    <form:input path="rua" id="rua" cssClass="form-control" required="true"/>
                                </div>

                                <div class="col-sm-3">
                                    <label for="numero" class="form-label">Número</label>
                                    <form:input path="numero" id="numero" cssClass="form-control" required="true"/>
                                </div>
                                
                                <div class="col-sm-9">
                                    <label for="complemento" class="form-label">Complemento <span class="text-muted">(Opcional)</span></label>
                                    <form:input path="complemento" id="complemento" cssClass="form-control"/>
                                </div>

                                <div class="col-md-5">
                                    <label for="bairro" class="form-label">Bairro</label>
                                    <form:input path="bairro" id="bairro" cssClass="form-control" required="true"/>
                                </div>

                                <div class="col-md-4">
                                    <label for="cidade" class="form-label">Cidade</label>
                                    <form:input path="cidade" id="cidade" cssClass="form-control" required="true"/>
                                </div>

                                <div class="col-md-3">
                                    <label for="estado" class="form-label">Estado</label>
                                    <form:input path="estado" id="estado" cssClass="form-control" required="true"/>
                                </div>
                            </div>
                            
                            <hr class="my-4">

                            <button class="w-100 btn btn-primary btn-lg" type="submit">Cadastrar</button>
                        </form:form>
                    </div>
                </div>
            </main>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
                crossorigin="anonymous"></script>
    </body>
</html>