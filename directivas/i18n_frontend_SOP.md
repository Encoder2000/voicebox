# Añadir Internacionalización (i18n) al Frontend - SOP

---
version: 1.0
last_updated: 2026-03-13
author: agente
changelog:
  - v1.0: Creación inicial
---

## Objetivo
Implementar soporte multi-idioma de forma estandarizada en el frontend de la aplicación web utilizando `react-i18next`. El idioma por defecto será el Español.

## Entradas
- Carpeta base del frontend (ej. `app/` o `web/`).
- Componentes React (`.tsx`) con textos incrustados en código ("hardcodeados").
- Diccionarios de idiomas (JSON o TypeScript).

## Salidas
- Código modificado usando el hook `useTranslation()` y la función `t('clave_traduccion')`.
- Archivo de configuración centralizado (`src/i18n/config.ts`).
- Selector de idioma funcional en la interfaz de usuario.

## Pasos de Ejecución
1. Instalar dependencias necesarias (`i18next`, `react-i18next`) en el `package.json` del frontend correspondiente.
2. Crear un directorio `src/i18n/` que alojará la configuración (`config.ts`) y los diccionarios (ej. `locales/es.json` y `locales/en.json`).
3. Importar la configuración de i18n en el punto de entrada de la aplicación (`src/main.tsx` o similar) de manera que se ejecute antes de montar el árbol de React.
4. Identificar componentes clave para traducción. 
5. Dentro de cada componente funcional, importar `useTranslation`, desestructurar `{ t }` y reemplazar candenas de texto duro por `t('mi.clave')`.
6. Añadir las claves correspondientes a cada JSON de idioma.
7. Construir un componente de menú desplegable (_dropdown_ o selector) que ejecute `i18n.changeLanguage(codigo_idioma)` para permitir el cambio dinámico de idioma en la UX.
8. Validar la compilación de TypeScript (`bun run build`) y verificar la correcta recarga rápida en el navegador.

## Restricciones y Casos Borde
- No crear estructuras de archivos de idiomas excesivamente anidadas que compliquen el mantenimiento. Una estructura plana por sección (ej. `sidebar.title`, `generation.button`) es suficiente.
- Evitar envolver text nodes complejos con HTML directo dentro de las traducciones JSON, a menos que se use el componente `<Trans />` especializado de `react-i18next`. Priorizar dividir el texto.
- Precaución con contextos asíncronos o fuera del árbol de React si se necesita traducir (por ejemplo utilerías o reducers). En ese caso usar `i18next.t` directamente sobre la instancia global y no el hook local.

## Variables de Entorno Requeridas
- N/A para esta implementación base (la configuración y los idiomas vivirán en el cliente).

## Clasificación de Errores Conocidos
- N/A.

## Historial de Cambios
- v1.0: Creación inicial
