import { Request, Response } from "express";
import { updateTurmaDocente } from "../data/turmaDataBase";

export async function alterarDocente(req: Request, res:Response) {
    try {
        const {idTurma, idDocente} = req.body;

        if(!idTurma || !idDocente){
            throw new Error("Id da turma e do docente devem ser passados")
        }

        updateTurmaDocente(idTurma, idDocente)

        res.status(200).send("Atualizado")
        
    } catch (error:any) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}