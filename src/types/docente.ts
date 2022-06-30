export type Docente ={
    id: string,
    nome: string,
    email: string,
    dataNascimento: string,
    turmaId: string
}

export function tipagemDocente(docente:any){
    const tipoDocente:Docente = {
        id: docente.id,
        nome: docente.nome,
        email: docente.email,
        dataNascimento: docente.data_nasc,
        turmaId: docente.turma_id
    }

    return tipoDocente;
}