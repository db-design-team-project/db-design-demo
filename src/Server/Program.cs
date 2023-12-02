using Microsoft.EntityFrameworkCore;
using Server.DbContexts;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MainDbContext>(option => {
    option.UseOracle(builder.Configuration["MainDbConnectionString"]!);
});

builder.Services.AddCors(corsOpts => {
    corsOpts.AddDefaultPolicy(b => {
        b.WithOrigins(builder.Configuration["ClientUrls:ReactUrl"]!)
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});

var app = builder.Build();

app.UseHttpsRedirection();

app.UseCors();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment()) {
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// app.UseAuthorization();

app.MapControllers();

app.Run();
