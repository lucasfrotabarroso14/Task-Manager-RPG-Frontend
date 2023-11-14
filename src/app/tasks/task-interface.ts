export interface Task {
    id_task : number;
    titulo: string;
    descricao: string;
    dificuldade:'Facil'|'Medio'|'Dificil';
    data_criacao:Date;
    data_conclusao: Date | null;
    id_user: number;
    status: string | null;
}
