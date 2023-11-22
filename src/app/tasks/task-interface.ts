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

export interface TaskStatusCount {
        pendente: number;
        em_andamento: number;
        concluido: number;
        total_tasks: number;
}