# 🛡️ Desafio Técnico - Bootcamp Web Front (Avanade)

Aplicação web desenvolvida para o cadastro e gerenciamento de tarefas, integrando um front-end em Angular com um back-end robusto em ASP.NET Core Web API, utilizando SQL Server para persistência de dados.

## 💻 Tecnologias Utilizadas
* **Front-end:** Angular
* **Back-end:** ASP.NET Core Web API (C# .NET 8)
* **Banco de Dados:** SQL Server
* **ORM:** Entity Framework Core
* **Comunicação:** API REST (JSON)

## ⚙️ Funcionalidades Implementadas
* **CRUD Completo:** Criação, Listagem, Atualização e Exclusão de tarefas.
* **Entidade Principal:** Tarefa (Id, Título, Descrição, Status, Data de Criação).
* **Integração:** Consumo da API utilizando o `HttpClient` no Angular.
* **Diferenciais:** Código limpo, CORS configurado para integração segura e arquitetura isolada entre componentes e serviços.

## 🚀 Instruções de Execução

### Pré-requisitos
Certifique-se de ter os seguintes componentes instalados no seu ambiente:
* [.NET 8.0 SDK](https://dotnet.microsoft.com/download)
* [Node.js](https://nodejs.org/) (Recomendado versão LTS)
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
* Instância do SQL Server rodando localmente (ou via Docker).

### 1. Configurando e Rodando o Back-end (API C#)
* Abra um terminal e navegue até a pasta raiz do projeto back-end (onde está o arquivo `TarefasApi.csproj`).
* Verifique a *Connection String* no arquivo `appsettings.json` e ajuste as credenciais do seu SQL Server, se necessário.
* Restaure as dependências do projeto:
   ```bash
   dotnet restore

* Crie a tabela no banco de dados aplicando as Migrations do Entity Framework Core:

    dotnet ef database migrate

* Inicie o servidor da API:
   ```bash
   dotnet run
      
* Verifique no terminal a porta alocada (geralmente http://localhost:5001 ou http://localhost:5260). O Swagger pode ser acessado na rota /swagger.

### 2. Configurando e Rodando o Front-end (Angular)
* Abra um novo terminal e navegue até a pasta do front-end (tarefas-app).

* Atualize a variável apiUrl no arquivo tarefa.service.ts para apontar para a porta correta onde o backend está rodando, caso difira do padrão configurado.

* Instale as dependências do Node:
      
```bash
   npm install 
   ```

* Inicie o servidor de desenvolvimento do Angular:

```bash
   ng serve
   ```
* Abra o seu navegador e acesse a interface em: http://localhost:4200.

Desenvolvido por Ana Raquel.