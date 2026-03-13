@echo off
echo Iniciando Servidores de Voicebox...

:: Iniciar el servidor backend en una nueva ventana
start "Voicebox Backend" cmd /k "cd /d C:\Proyectos\APPs\Voicebox && bun run dev:server"

:: Dar tiempo al backend para inicializar
echo Esperando a que el backend inicie...
timeout /t 3 /nobreak >nul

:: Iniciar el servidor web frontend en una nueva ventana
start "Voicebox Web" cmd /k "cd /d C:\Proyectos\APPs\Voicebox && bun run dev:web"

:: Dar tiempo a Vite para levantar
echo Esperando a la interfaz web...
timeout /t 3 /nobreak >nul

:: Abrir el navegador
start http://localhost:5173/
