import sqlite3 from "sqlite3";
sqlite3.verbose()
import {dirname} from 'path';
import { fileURLToPath } from "url";
const filePath = dirname(fileURLToPath(import.meta.url)) + '/bancoDeDadosMatricula.db';
const bdm = new sqlite3.Database(filePath);

const MATRICULA_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MATRICULA" (
    "ID" INTERGER PRIMARY KEY AUTOINCREMENT,
    "NOME_DO_ALUNO" VARCHAR(255),
    "DATA_DE_NASCIMENTO" DATE,
    "NOME_DO_PAI" VARCHAR(255),
    "NOME_DA_MAE" VARCHAR(255),
    "CPF_ALUNO" VACHAR(14),
    "CARTEIRA_DE_IDENTIDADE" VARCHAR(20),
    "MATRICULA_CERTIDAO_DE_NAS_OU_CAS" VARCHAR(32),
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
    CPF_ALUNO, CARTEIRA_DE_IDENTIDADE, MATRICULA_CERTIDAO_DE_NAS_OU_CAS,
     ENDERECO, TELEFONE_RESIDENCIAL, CELULAR, TELEFONE_PAI, TELEFONE_MAE, EMAIL_ESTUDANTE, EMAIL_RESPONSAVEL)
VALUES
(1,'Pedro de Alcântara', 'Pedro de Alcântara Bragança', 'Maria Leopoldina da Áustria', '111.222.333-99', '123456789', '21912601552017135680035247553542',
'Palácio Imperial de São Cristóvão, Rio de Janeiro, RJ - Brasil', '2134915708', '31999992121', '21988774455', '21988774456', 'pedrinho@imperiodobrasil.br', 'pedroi@imperiodobrasil.br'),
(2, 'João Carlos', 'Pedro de Alcântara Bragança', 'Maria Leopoldina da Áustria', '111.111.333-99', '11155588', '1820260155201313861950151452021',
'Palácio Imperial de São Cristóvão, Rio de Janeiro, RJ - Brasil', '2134915708', '31999991121', '21988774455', '21988774456', 'joaocarlos@imperiodobrasil.br', 'pedroi@imperiodobrasil.br'),
(3, 'Januária do Brasil', 'Pedro de Alcântara Bragança', 'Maria Leopoldina da Áustria', '555.111.333-99', '17155588', '11819501552010147896924636797131',
'Palácio Imperial de São Cristóvão, Rio de Janeiro, RJ - Brasil', '2134915708', '31999991101', '21988774455', '21988774456', 'januaria@imperiodobrasil.br', 'pedroi@imperiodobrasil.br'),
(4, 'Paula do Brasil', 'Pedro de Alcântara Bragança', 'Maria Leopoldina da Áustria', '558.111.333-99', '17155688', '27595401552020184621741544915712',
'Palácio Imperial de São Cristóvão, Rio de Janeiro, RJ - Brasil', '2134915708', '31999991102', '21988774455', '21988774456', 'paula@imperiodobrasil.br', 'pedroi@imperiodobrasil.br'),
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