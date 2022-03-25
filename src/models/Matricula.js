class Matricula {

    constructor(nome_do_aluno, data_de_nascimento, nome_do_pai, nome_da_mae, cpf_aluno, carteira_de_identidade, matricula_certidao_nas_ou_cas, endereco, telefone_residencial, celular, telefone_pai, telefone_mae, email_estudante, email_responsavel) {
        this.nome_do_aluno = nome_do_aluno
        this.data_de_nascimento = data_de_nascimento
        this.nome_do_pai = nome_do_pai
        this.nome_da_mae = nome_da_mae
        this.cpf_aluno = this._validaCpf(cpf_aluno)
        this.carteira_de_identidade = carteira_de_identidade
        this.matricula_certidao_nas_ou_cas = this._validaCertidao(matricula_certidao_nas_ou_cas)
        this.endereco = endereco
        this.telefone_residencial = this._validaTelefoneResidencial(telefone_residencial)
        this.celular = this._validaCelular(celular)
        this.telefone_pai = this._validaTelefonePai(telefone_pai)
        this.telefone_mae = this._validaTelefoneMae(telefone_mae)
        this.email_estudante = this._validaEmailEstudante(email_estudante)
        this.email_responsavel = this._validaEmailResponsavel(email_responsavel)
    }

    _validaCpf = (cpf_aluno) => {
        if (cpf_aluno.length === 14) {
            return cpf_aluno
        } else {
            throw new Error("O CPF deve ser no seguinte formato 111.111.111-11 números, gentileza digitar com pontos e o traço!")
        }
    }

    _validaCertidao = (matricula_certidao_nas_ou_cas) => {
        if (matricula_certidao_nas_ou_cas.length === 32) {
            return matricula_certidao_nas_ou_cas
        } else {
            throw new Error("A matrícula contém 32 números, gentiliza verificar a certidão!")
        }
    }

    _validaTelefoneResidencial = (telefone_residencial) => {
        if (telefone_residencial.length >= 10) {
            return telefone_residencial
        } else {
            throw new Error("O telefone deve contar o DDD com 2 números!")
        }
    }

    _validaCelular = (celular) => {
        if (celular.length >= 11) {
            return celular
        } else {
            throw new Error("O telefone deve contar o DDD com 2 números!")
        }
    }

    _validaTelefonePai = (telefone_pai) => {
        if (telefone_pai.length >= 11) {
            return telefone_pai
        } else {
            throw new Error("O telefone deve contar o DDD com 2 números!")
        }
    }
    _validaTelefoneMae = (telefone_mae) => {
        if (telefone_mae.length >= 11) {
            return telefone_mae
        } else {
            throw new Error("O telefone deve contar o DDD com 2 números!")
        }
    }

    _validaEmailEstudante = (email_estudante) => {
        if (email_estudante.includes('@')) {
            return email_estudante
        } else {
            throw new Error("O deve conter @ !")
        }
    }

    _validaEmailResponsavel = (email_responsavel) => {
        if (email_responsavel.includes('@')) {
            return email_responsavel
        } else {
            throw new Error("O deve conter @ !")
        }
    }
}

export default Matricula