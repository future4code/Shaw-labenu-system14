import { Request, Response } from "express";
import { buscarTurma, updateModulo } from "../data/turmaDataBase";

export default async function mudancaModulo(req:Request, res:Response){
    try {
        const {idTurma, modulo} = req.body;
        if(!idTurma || !modulo){
            console.log(idTurma, modulo)
            throw new Error("idTurma e modulo devem ser passados")
        }
        if(modulo == "0"){
            throw new Error("Não é possível voltar a turma para o 0")
        }

        const turmaExiste = await buscarTurma(idTurma)

        if(!turmaExiste){
            throw new Error(`Turma ${idTurma} não existe`)
        }

        await updateModulo(idTurma, modulo)

        res.status(200).send("Modulo alterado com sucesso")

    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}