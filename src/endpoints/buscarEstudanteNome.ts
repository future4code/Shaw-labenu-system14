import { Request, Response } from "express";
import { buscarEstudantePorNome } from "../data/turmaDataBase";

export async function buscarEstudanteNome(req:Request, res:Response) {
    try {
        const {nome} = req.params;

        if(!nome){
            throw new Error("Nome deve ser passado nos parametros")
        }

        const result = await buscarEstudantePorNome(nome)

        res.status(200).send(result)
    } catch (error:any) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}