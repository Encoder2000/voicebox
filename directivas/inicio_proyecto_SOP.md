# Inicialización de Proyecto - SOP

---
version: 1.0
last_updated: 2026-03-12
author: Antigravity
changelog:
  - v1.0: Creación inicial del SOP para inicialización y ejecución.
---

## Objetivo
Configurar el entorno de desarrollo y poner en marcha los componentes de Voicebox (Backend, Frontend/Tauri).

## Entradas
- Repositorio clonado y auditado.
- Herramientas instaladas: Bun, Python 3.10+, Rust (rustc/cargo).

## Salidas
- Aplicación en ejecución (Modo Dev).
- Entorno de dependencias configurado.

## Pasos de Ejecución
1. Instalar dependencias globales de Bun: `bun install`.
2. Crear entorno virtual de Python (opcional pero recomendado): `python -m venv venv`.
3. Activar entorno virtual.
4. Instalar dependencias de Python: `pip install -r backend/requirements.txt`.
5. Ejecutar script de setup: `bun run setup:dev`.
6. Iniciar servidor backend: `bun run dev:server`.
7. Iniciar cliente (Web o Tauri): `bun run dev:web` o `bun run dev`.

## Restricciones y Casos Borde
- **Hardware**: El backend puede requerir GPU (CUDA/MPS) para rendimiento óptimo de los modelos ML (Qwen3-TTS).
- **Puertos**: Asegurar que el puerto `17493` (backend) esté libre.
- **Sidecar**: El script `setup-dev-sidecar.js` prepara los binarios necesarios para Tauri.

## Variables de Enorno Requeridas
- `VOICEBOX_MODELS_DIR`: (Opcional) Ruta personalizada para modelos de HuggingFace.

## Clasificación de Errores Conocidos
- `ModuleNotFoundError`: Falta instalar dependencias en el entorno de Python actual.
- `Port already in use`: Detener procesos anteriores en el puerto 17493.
