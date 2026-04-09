import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  standalone: true,
  selector: 'app-app-adicionar-tarefas',
  imports: [CommonModule, FormsModule],
  templateUrl: './app-adicionar-tarefas.html'
})
export class AppAdicionarTarefas {
  novaTarefa: Tarefa = {
    titulo: '',
    descricao: '',
    status: 'Pendente'
  };

  constructor(private tarefaService: TarefaService) {}

  adicionar(): void {
    if (!this.novaTarefa.titulo || !this.novaTarefa.descricao) {
      alert('Preencha título e descrição!');
      return;
    }

    this.tarefaService.createTarefa(this.novaTarefa).subscribe({
      next: () => {
        window.location.reload();
      },
      error: (erro) => {
        console.error('Erro detalhado da API:', erro);
        alert('Falha ao salvar a tarefa. Verifique o console apertando F12.');
      }
    });
  }
}
