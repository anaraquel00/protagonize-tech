import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from '../services/tarefa.service';
import { Tarefa } from '../models/tarefa.model';

@Component({
  standalone: true,
  selector: 'app-app-lista-tarefas',
  imports: [CommonModule],
  templateUrl: './app-lista-tarefas.html'
})
export class AppListaTarefas implements OnInit {
  tarefas: Tarefa[] = [];

  constructor(private tarefaService: TarefaService) {}

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefaService.getTarefas().subscribe(dados => {
      this.tarefas = dados;
    });
  }

  excluir(id?: number): void {
    if (id !== undefined) {
      this.tarefaService.deleteTarefa(id).subscribe(() => this.carregarTarefas());
    }
  }

  concluir(tarefa: Tarefa): void {
    // Criamos uma cópia da tarefa trocando o status
    const tarefaAtualizada = { ...tarefa, status: 'Concluída' };
    this.tarefaService.updateTarefa(tarefa.id!, tarefaAtualizada).subscribe(() => this.carregarTarefas());
  }
}
