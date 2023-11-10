import { Component, Input } from '@angular/core';
import { Task } from '../task-interface';

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent {
  @Input() tasks: Task[]=[];

}
//TASK PRA SEGUNDA; CORRIGIR A PAGINA TASK E FAZER O NGFOR SOMENTE PARA OS DADOS DA TABELA ATUALMENTE ELE TA PEGANDO O CABECALHO TAMBEM POIS O NG FOR ESTA NO COMPONENTE PAI