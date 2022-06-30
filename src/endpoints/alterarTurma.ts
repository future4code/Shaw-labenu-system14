import { Request, Response } from "express";
import { updateTurmaAluno } from "../data/turmaDataBase";

export async function alterarTurma(req: Request, res:Response) {
    try {
        const {idTurma, idAluno} = req.body;

        if(!idTurma || !idAluno){
            throw new Error("Id da turma e do aluno devem ser passados")
        }

        updateTurmaAluno(idTurma, idAluno)

        res.status(200).send("Atualizado")
        
    } catch (error:any) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}