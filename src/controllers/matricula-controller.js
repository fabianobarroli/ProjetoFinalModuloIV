import Matricula from "../models/Matricula.js";
import MatriculaDAO from "../DAO/MatriculaDAO.js";
import bdm from "../database/db-sigint-export.js";

const matriculaController = (app, bdm) =>{
    const matriculaDAO = new MatriculaDAO(bdm)

    app.get('/matricula', async (req, res)=>{
       
            try {
                 const todasMatriculas = await matriculaDAO.pegaTodasMatriculas()
                 res.json(todasMatriculas)   
            } catch (erro) {
                res.json(erro)
            }
        }
    )

   app.get('/matricula/cpf_aluno/:cpf_aluno', async(req, res)=>{
        
        try{
            const cpf = await req.params.cpf_aluno
            matriculaDAO.pegaUmaMatricula(cpf)
            res.json(cpf)
        } catch(erro){
            res.json(erro)
        }
    })

    app.post('/matricula', async (req, res)=>{
        const body = req.body
        try {
            const novaMatricula = await new Matricula(body.nome_do_aluno, body.nome_do_pai, body.nome_da_mae, body.cpf_aluno, body.carteira_de_identidade, body.matricula_certidao_nas_ou_cas,
                body.endereco, body.telefone_residencial, body.celular, body.telefone_pai, body.telefone_mae, body.email_estudante, body.email_responsavel)
                matriculaDAO.inserirMatricula(novaMatricula)
                res.json(resposta)
        } catch (erro) {
            res.json(erro)
        }

    })

 app.delete('/matricula//cpf_aluno/:cpf_aluno', async (req, res)=>{
     try {
         const cpf = await req.params.cpf_aluno
         matriculaDAO.delecaoMatricula(cpf_aluno)
         res.json(resposta)
     } catch (erro) {
         res.json(erro)
     }
 })

 app.put('/matricula/cpf_aluno/:cpf_aluno', async (req, res)=>{
    const body = req.body
    try {
        const novaMatricula = await new Matricula(body.nome_do_aluno, body.nome_do_pai, body.nome_da_mae, body.cpf_aluno, body.carteira_de_identidade, body.matricula_certidao_nas_ou_cas,
            body.endereco, body.telefone_residencial, body.celular, body.telefone_pai, body.telefone_mae, body.email_estudante, body.email_responsavel)
            matriculaDAO.inserirMatricula(novaMatricula)
            res.json(resposta)
    } catch (erro) {
        res.json(erro)
    }

})
}