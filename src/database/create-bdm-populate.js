import { sqlite3 } from "sqlite3";
sqlite3.verbose()
import {dirname} from 'path';
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + '/bancodedadosmatricula.db';
const bdm = new sqlite3.Database('./bancodedadosmatricula.db');

const MATRICULA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MATRICULA" (
    "ID" INTERGER PRIMARY KEY AUTOINCREMENT,
    "NOME_DO_ALUNO" VARCHAR(255),
    "DATA_DE_NASCIMENTO" DATE,
    "NOME_DO_PAI" VARCHAR(255),
    "NOME_DA_MAE" VARCHAR(255),
    "CPF_ALUNO" VACHAR(14),
    "CARTEIRA_DE_IDENTIDADE" VARCHAR(20),
    "MATRICULA_CERTIDAO_DE_NASCIMENTO_OU_CASAMENTO" VARCHAR(40),
    "ENDERECO" VARCHAR(255),
    "TELEFONE_RESIDENCIAL" VARCHAR(14),
    "CELULAR" VARCHAR(14),
    "TELEFONE_PAI" VARCHAR(14),
    "TELEFONE_MAE" VARCHAR(14),
    "EMAIL_ESTUDANTE" VARCHAR(100),
    "EMAIL_RESPONSAVEL" VARCHAR(100)
);`;

const ADD_USUARIOS_DATA = `
INSERT INTO MATRICULA (ID, NOME_DO_ALUNO, NOME_DO_PAI, NOME_DA_MAE, 
    CPF_ALUNO, CARTEIRA_DE_IDENTIDADE, MATRICULA_CERTIDAO_DE_NASCIMENTO_OU_CASAMENTO,
     ENDERECO, TELEFONE_RESIDENCIAL, CELULAR, TELEFONE_PAI, TELEFONE_MAE, EMAIL_ESTUDANTE, EMAIL_RESPONSAVEL)
VALUES
(1, )
(2, )
(3, )
`

function criarTabelaMatricula(){
    bdm.run(MATRICULA_SCHEMA, (error)=>{
        if(error) 
        console.log("Erro ao criar a tabela de Matrícula!");
    });
}

function popularTabelaMatricula(){
    bdm.run(ADD_USUARIOS_DATA, (error)=>{
        if(error) 
        console.log("Erro ao popular a tabela de Matrícula!");
    }); 
}

bdm.serializa(()=>{
    criarTabelaMatricula();
    popularTabelaMatricula()
});