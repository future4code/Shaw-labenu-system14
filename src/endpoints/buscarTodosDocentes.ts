import { Request, Response } from "express";
import { selectDocentes } from "../data/turmaDataBase";

export async function buscarTodosDocentes(req:Request, res:Response) {
    try {
        const result = await selectDocentes()

        res.status(200).send(result)
    } catch (error:any) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}