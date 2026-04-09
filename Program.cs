using Microsoft.EntityFrameworkCore;
using TarefasApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Adiciona os serviços dos Controllers
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configura o Contexto do Banco de Dados (Entity Framework) lendo do appsettings.json
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Configura o CORS para permitir que o Angular (localhost:4200) acesse a API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
        policy =>
        {
            policy.AllowAnyOrigin()
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAngularApp"); // Aplica a política de CORS criada acima
app.UseAuthorization();
app.MapControllers();
app.Run();