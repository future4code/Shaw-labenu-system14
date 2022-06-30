import { Request, Response } from "express";
import { insertEstudante } from "../data/turmaDataBase";
import { Estudante } from "../types/estudante";

export async function criarEstudante(req:Request, res:Response){
    try {
        const {nome, email, dataNascimento, turmaId} = req.body;
        if(!nome || !email || !dataNascimento || !turmaId){
            throw new Error("Está faltando parametros")
        }

        const novoEstudante:Estudante ={
            id: Date.now().toString(),
            nome,
            email,
            dataNascimento,
            turmaId
        }

        await insertEstudante(novoEstudante)

        res.status(201).send("estudante criado com sucesso")
    } catch (error:any) {
        console.log(error)
        res.status(500).send({message: error.message})
    }
}