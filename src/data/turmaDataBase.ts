import { Docente, tipagemDocente } from "../types/docente";
import { Estudante, tipagemEstudante } from "../types/estudante";
import { tipagemTurma, Turma, TurmaBancoDeDados } from "../types/turma";
import { connection } from "./BaseDataBase";

export async function insertTurma(turma: Turma): Promise<void> {
    const {id, nome} = turma;

    await connection("turma").insert({
        id, nome
    })


}

export default async function buscarTurmas():Promise<TurmaBancoDeDados[] | undefined>{
    const result = await connection().select("*").from("turma").whereNot("modulo", "like", "%0%")

    const tipoTurma = result.map((turma:any)=>{
        return tipagemTurma(turma)
    })

    return tipoTurma;
}

export async function buscarTurma(idTurma:string):Promise<TurmaBancoDeDados | undefined>{
    const [result] = await connection("turma").where("id", `${idTurma}`)
    if(result){
        return tipagemTurma(result)
    }else{
        return undefined
    }
}

export async function updateModulo(idTurma:string, modulo:string):Promise<void>{
    await connection("turma").where("id", `${idTurma}`).update({modulo})
}

export async function insertEstudante(estudante:Estudante):Promise<void> {
    const {id, nome, dataNascimento, email, turmaId} = estudante
     await connection("estudante").insert({
        id, nome, email, data_nasc: dataNascimento, turma_id: turmaId
     })
}

export async function buscarEstudantePorNome(nome:string):Promise <Estudante[] | undefined> {
    const result = await connection("estudante").select("*").where(`nome`, "like", `${nome}`)

    const tipoEstudante = result.map((estudante:any)=>{
        return tipagemEstudante(estudante)
    })

    return tipoEstudante
}

export async function updateTurmaAluno(idTurma:string, idAluno:string):Promise<void> {
    await connection("estudante").where("id", `${idAluno}`).update({turma_id: idTurma})
}

export async function insertDocente(docente:Docente):Promise<void> {
    const {id, nome, dataNascimento, email, turmaId} = docente
     await connection("docente").insert({
        id, nome, email, data_nasc: dataNascimento, turma_id: turmaId
     })
}

export async function selectDocentes():Promise<Docente[] | undefined> {
    const result = await connection("docente");

    const docentes = result.map((docente:any)=>{
        return tipagemDocente(docente)
    })

    return docentes;
}

export async function updateTurmaDocente(idTurma:string, idDocente:string):Promise<void> {
    await connection("docente").where("id", `${idDocente}`).update({turma_id: idTurma})
}