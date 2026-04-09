import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TarefaService } from './services/tarefa.service';
import { AppAdicionarTarefas } from './app-adicionar-tarefas/app-adicionar-tarefas';
import { AppListaTarefas } from './app-lista-tarefas/app-lista-tarefas';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, AppAdicionarTarefas, AppListaTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarefas-app');
}
