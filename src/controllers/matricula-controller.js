import Matricula from "../models/Matricula.js";
import MatriculaDAO from "../DAO/MatriculaDAO.js";


const matriculaController = (app, bdm) => {
    const matriculaDAO = new MatriculaDAO(bdm)

    app.get('/matricula', async (req, res) => {
        try {
            const todasMatriculas = await matriculaDAO.pegaTodasMatriculas()
            res.json(todasMatriculas)
        } catch (erro) {
            res.json(erro)
        }
    }
    )

    app.get('/matricula/cpf_aluno/:cpf_aluno', async (req, res) => {
        try {
            const cpf = req.params.cpf_aluno
            const response = await matriculaDAO.pegaUmaMatricula(cpf)
            res.json(response)
        } catch (erro) {
            res.json(erro)
        }
    })

    app.post('/matricula', async (req, res) => {
        const body = req.body
        try {
            const novaMatricula = new Matricula(body.nome_do_aluno, body.data_de_nascimento, body.nome_do_pai, body.nome_da_mae, body.cpf_aluno, body.carteira_de_identidade, body.matricula_certidao_de_nas_ou_cas,
                body.endereco, body.telefone_residencial, body.celular, body.telefone_pai, body.telefone_mae, body.email_estudante, body.email_responsavel)
            const resposta = await matriculaDAO.inserirMatricula(novaMatricula)
            res.status(201)
            res.json({resposta})
        } catch (error) {
            res.json(error.message)
        }
    })

    app.delete('/matricula/cpf_aluno/:cpf_aluno', async (req, res) => {
        const cpf = req.params.cpf_aluno
        try {
            const resposta = await matriculaDAO.delecaoMatricula(cpf)
            res.json(resposta)
        } catch (erro) {
            res.json(erro)
        }
    })

    app.put('/matricula/cpf_aluno/:cpf_aluno', async (req, res) => {
        const cpf = req.params.cpf_aluno
        const body = req.body
        const atualizaMatricula = new Matricula(body.nome_do_aluno, body.data_de_nascimento, body.nome_do_pai, body.nome_da_mae, body.cpf_aluno, body.carteira_de_identidade, body.matricula_certidao_de_nas_ou_cas,
            body.endereco, body.telefone_residencial, body.celular, body.telefone_pai, body.telefone_mae, body.email_estudante, body.email_responsavel)
        try {
            const response = await matriculaDAO.atualizaMatricula(cpf, atualizaMatricula)
            res.json(response)
        } catch (erro) {
            res.json(erro)
        }
    })
}

export default matriculaController