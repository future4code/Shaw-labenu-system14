import { connection } from "./connection";

const printError = (error: any) => {
    console.log(error.sqlMessage || error.message)
};

const createTables = () => connection
    .raw(`
    CREATE TABLE IF NOT EXISTS Turma (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        modulo VARCHAR(255) NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS Estudante (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES Turma(id)
    );
    CREATE TABLE IF NOT EXISTS Docente (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        data_nasc DATE NOT NULL,
        turma_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (turma_id) REFERENCES Turma(id)
    );
    CREATE TABLE IF NOT EXISTS Hobby (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Estudante_Hobby (
        id VARCHAR(255) PRIMARY KEY,
        estudante_id VARCHAR(255) NOT NULL,
        hobby_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (estudante_id) REFERENCES Estudante(id),
        FOREIGN KEY (hobby_id) REFERENCES Hobby(id)
    );
    CREATE TABLE IF NOT EXISTS Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        nome VARCHAR(255) UNIQUE NOT NULL
    );
    CREATE TABLE IF NOT EXISTS Docente_Especialidade (
        id VARCHAR(255) PRIMARY KEY,
        docente_id VARCHAR(255) NOT NULL,
        especialidade_id VARCHAR(255) NOT NULL,
        FOREIGN KEY (docente_id) REFERENCES Docente(id),
        FOREIGN KEY (especialidade_id) REFERENCES Especialidade(id)
    );
    `)
    .then(() => {console.log("Tabelas criadas!")})
    .catch(printError)

const closeConnection = () => {connection.destroy()}

createTables()
    .finally(closeConnection);