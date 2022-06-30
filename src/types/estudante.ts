export type Estudante ={
    id: string,
    nome: string,
    email: string,
    dataNascimento: string,
    turmaId: string
}

export function tipagemEstudante(estudante:any){
    const tipoEstudante:Estudante = {
        id: estudante.id,
        nome: estudante.nome,
        email: estudante.email,
        dataNascimento: estudante.dataNascimento,
        turmaId: estudante.turmaId
    }

    return tipoEstudante;
}