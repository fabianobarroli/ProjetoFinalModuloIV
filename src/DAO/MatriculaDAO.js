class MatriculaDAO {
    constructor(bdm) {
        this.bdm = bdm
    }
    pegaTodasMatriculas = () => {
        return new Promise((resolve, reject) => {
            this.bdm.all('SELECT * FROM MATRICULA', (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message
                    })
                } else {
                    resolve({
                        "matricula": rows
                    })
                }
            })
        })
    }


    pegaUmaMatricula = (cpf_aluno) => {
        return new Promise((resolve, reject) => {
            this.bdm.all('SELECT * FROM MATRICULA WHERE CPF_ALUNO = ?', cpf_aluno, (error, rows) => {
                if (error) {
                    reject({
                        "mensagem": error.message
                    })
                } else {
                    resolve({
                        "matricula": rows
                    })
                }
            })
        })
    }

    inserirMatricula = (novaMatricula) => {
        return new Promise((resolve, reject) => {
            this.bdm.all(`INSERT INTO MATRICULA (NOME_DO_ALUNO,
                 DATA_DE_NASCIMENTO, 
                 NOME_DO_PAI, 
                 NOME_DA_MAE, 
                 CPF_ALUNO,
                 CARTEIRA_DE_IDENTIDADE, 
                 MATRICULA_CERTIDAO_DE_NAS_OU_CAS, 
                 ENDERECO, 
                 TELEFONE_RESIDENCIAL,
                 CELULAR, 
                 TELEFONE_PAI,
                 TELEFONE_MAE, 
                 EMAIL_ESTUDANTE,
                 EMAIL_RESPONSAVEL) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                novaMatricula.nome_do_aluno, novaMatricula.data_de_nascimento, novaMatricula.nome_do_pai, novaMatricula.nome_da_mae, novaMatricula.cpf_aluno, novaMatricula.carteira_de_identidade, novaMatricula.matricula_certidao_nas_ou_cas,
                novaMatricula.endereco, novaMatricula.telefone_residencial, novaMatricula.celular, novaMatricula.telefone_pai, novaMatricula.telefone_mae, novaMatricula.email_estudante, novaMatricula.email_responsavel,
                (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message
                        })
                    } else {
                        resolve({
                            "mensagem": `Matricula ${novaMatricula.nome_do_aluno} cadastrado com sucesso`,
                            "matricula": novaMatricula
                        })
                    }
                })
        })
    }

    delecaoMatricula = (cpf_aluno) => {
        return new Promise((resolve, reject) => {
            this.bdm.run('DELETE FROM MATRICULA WHERE CPF_ALUNO = ?', cpf_aluno, (error) => {
                if (error) {
                    reject({
                        "mensagem": error.message
                    })
                } else {
                    resolve({
                        "matricula": `Matricula do CPF ${cpf_aluno} excluida com sucesso`
                    })
                }
            })
        })
    }

    atualizaMatricula = (cpf_aluno, novaMatricula) => {
        return new Promise((resolve, reject) => {
            this.bdm.run(`UPDATE MATRICULA SET (NOME_DO_ALUNO,
                DATA_DE_NASCIMENTO, 
                NOME_DO_PAI, 
                NOME_DA_MAE, 
                CPF_ALUNO,
                CARTEIRA_DE_IDENTIDADE, 
                MATRICULA_CERTIDAO_DE_NAS_OU_CAS, 
                ENDERECO, 
                TELEFONE_RESIDENCIAL,
                CELULAR, 
                TELEFONE_PAI,
                TELEFONE_MAE, 
                EMAIL_ESTUDANTE,
                EMAIL_RESPONSAVEL) = (?,?,?,?,?,?,?,?,?,?,?,?,?,?) WHERE CPF_ALUNO = ?`,
                novaMatricula.nome_do_aluno, novaMatricula.data_de_nascimento, novaMatricula.nome_do_pai, novaMatricula.nome_da_mae, novaMatricula.cpf_aluno, novaMatricula.carteira_de_identidade, novaMatricula.matricula_certidao_nas_ou_cas,
                novaMatricula.endereco, novaMatricula.telefone_residencial, novaMatricula.celular, novaMatricula.telefone_pai, novaMatricula.telefone_mae, novaMatricula.email_estudante, novaMatricula.email_responsavel, cpf_aluno, (error) => {
                    if (error) {
                        reject({
                            "mensagem": error.message
                        })
                    } else {
                        resolve({
                            "matricula": `Matricula do CPF ${cpf_aluno} atualizada com sucesso`
                        })
                    }
                })
        })
    }
}

export default MatriculaDAO