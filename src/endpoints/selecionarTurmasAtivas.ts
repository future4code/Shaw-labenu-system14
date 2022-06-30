import { Request, Response } from "express";
import buscarTurmas from "../data/turmaDataBase";
import { Turma } from "../types/turma";

export default async function selecionarTurmasAtivas(req:Request, res:Response){
    try {
        const turmasAtivas = await buscarTurmas()
        
        res.status(200).send(turmasAtivas)

    } catch (error:any) {
        res.status(500).send({message: error.message})
    }
}

