<h1 aling="center">Projeto de Final do Módulo IV</h1>

## Descrição do Projeto

Projeto Educacional do  curso de Web Dev FullStack da [Resilia Educação](https://www.resilia.com.br/), referente ao final do Módulo IV.

Link do repositório no [Heroku](https://projeto-modulo-iv-fabiano-resi.herokuapp.com/).

Este projeto foi realizado utilizando o [Node.js](https://nodejs.org/en/) e com o framework [Express](https://expressjs.com/)

## Objetivo 

Este projeto teve como objetivo principal criar uma API REST de uma Escola, em que será possível aplicar as operações CRUD na entidade `Matrícula`.

## Pré-Requisitos

* Node.js v.16.14.0 LTS
* NPM v.8.3.1

## Pacotes Utilizados

* [Express](https://www.npmjs.com/package/express) v.4.17.3
* [Nodemon](https://www.npmjs.com/package/nodemon) v.2.0.15
* [SQLite3](https://www.npmjs.com/package/sqlite3) v.5.0.0
* [CORS](https://www.npmjs.com/package/cors) v2.8.5

## Instalando a Aplicação

No terminal/PowerShell rode os comandos abaixo:

Clonando o repositório:

```
git@github.com:fabianobarroli/ProjetoFinalModuloIV.git
```

Entando na pasta:

```
cd ProjetoFinalModuloIV
```

Instalando os pacotes:

```
npm i express

npm i nodemon --save-dev

npm i sqlite3@5.0.0

npm i cors

```

Criando o banco de dados:

```
npm run database
```

Iniciando o servidor:

```
npm start
```

Iniciando o servidor com Nodemon:

```
npm run dev
```

---

## Rotas Implementadas

* **GET /matricula**

Schema resposta

```
{
    "matricula": [
        {
			"nome_do_aluno": <String>,
			"data_de_nascimento":<String>,
			"nome_do_pai": <String>,
			"nome_da_mae": <String>,
			"cpf_aluno": <String>,
			"carteira_de_identidade": <String>,
			"matricula_certidao_de_nas_ou_cas": <String>,
			"endereco": <String>,
			"telefone_residencial": <String>,
			"celular": <String>,
			"telefone_pai": <String>,
			"telefone_mae": <String>,
			"email_estudante": <String>,
			"email_responsavel": <String>
		}
    ]
}
```
* **GET /matricula/cpf_aluno/{cpf_aluno}**
```
Schema resposta

{
    "matricula": [
        {
			"nome_do_aluno": <String>,
			"data_de_nascimento":<String>,
			"nome_do_pai": <String>,
			"nome_da_mae": <String>,
			"cpf_aluno": <String>,
			"carteira_de_identidade": <String>,
			"matricula_certidao_de_nas_ou_cas": <String>,
			"endereco": <String>,
			"telefone_residencial": <String>,
			"celular": <String>,
			"telefone_pai": <String>,
			"telefone_mae": <String>,
			"email_estudante": <String>,
			"email_responsavel": <String>
		}
    ]
}
```
* **POST /matricula**

Schema da requisição:

{
    "matricula": [
        {
			"nome_do_aluno": <String>,
			"data_de_nascimento":<String>,
			"nome_do_pai": <String>,
			"nome_da_mae": <String>,
			"cpf_aluno": <String>,
			"carteira_de_identidade": <String>,
			"matricula_certidao_de_nas_ou_cas": <String>,
			"endereco": <String>,
			"telefone_residencial": <String>,
			"celular": <String>,
			"telefone_pai": <String>,
			"telefone_mae": <String>,
			"email_estudante": <String>,
			"email_responsavel": <String>
		}
    ]
}
```

Schema da respota:
{
    "mensagem": <String>,
    "matricula": 
        {
            "nome_do_aluno": <String>,
			"data_de_nascimento":<String>,
			"nome_do_pai": <String>,
			"nome_da_mae": <String>,
			"cpf_aluno": <String>,
			"carteira_de_identidade": <String>,
			"matricula_certidao_de_nas_ou_cas": <String>,
			"endereco": <String>,
			"telefone_residencial": <String>,
			"celular": <String>,
			"telefone_pai": <String>,
			"telefone_mae": <String>,
			"email_estudante": <String>,
			"email_responsavel": <String>
		}
    ]
}
```

* **PUT /matricula/cpf_aluno/{cpf_aluno}**

Schema da requisição:

{
    "matricula": [
        {
			"nome_do_aluno": <String>,
			"data_de_nascimento":<String>,
			"nome_do_pai": <String>,
			"nome_da_mae": <String>,
			"cpf_aluno": <String>,
			"carteira_de_identidade": <String>,
			"matricula_certidao_de_nas_ou_cas": <String>,
			"endereco": <String>,
			"telefone_residencial": <String>,
			"celular": <String>,
			"telefone_pai": <String>,
			"telefone_mae": <String>,
			"email_estudante": <String>,
			"email_responsavel": <String>
		}
    ]
}
```

Schema da respota:
{
    "mensagem": <String>,
    "matricula": 
        {
            "nome_do_aluno": <String>,
			"data_de_nascimento":<String>,
			"nome_do_pai": <String>,
			"nome_da_mae": <String>,
			"cpf_aluno": <String>,
			"carteira_de_identidade": <String>,
			"matricula_certidao_de_nas_ou_cas": <String>,
			"endereco": <String>,
			"telefone_residencial": <String>,
			"celular": <String>,
			"telefone_pai": <String>,
			"telefone_mae": <String>,
			"email_estudante": <String>,
			"email_responsavel": <String>
		}
    ]
}
```

* **DELETE /matricula/cpf_aluno/{cpf_aluno}**

Schema da respota:
{
    "mensagem": <String>,
    
}
```

## Autor

Este projeto foi desenvolvido pelo estudante 

Fabiano Barros de Oliviera

Contatos

https://www.linkedin.com/in/fabiano-barros-de-oliveira-3aa12b82/