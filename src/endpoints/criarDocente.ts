import { Request, Response } from "express";
import { insertDocente } from "../data/turmaDataBase";
import { Docente } from "../types/docente";

export async function criarDocente(req:Request, res:Response){
    try {
        const {nome, email, dataNascimento, turmaId} = req.body;
        if(!nome || !email || !dataNascimento || !turmaId){
            throw new Error("Está faltando parametros")
        }

        const novoDocente:Docente ={
            id: Date.now().toString(),
            nome,
            email,
            dataNascimento,
            turmaId
        }

        await insertDocente(novoDocente);

        res.status(201).send("Docente criado com sucesso")
    } catch (error:any) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}