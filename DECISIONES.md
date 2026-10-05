# 📋 Decisiones de Arquitectura y Diseño — Portafolio

Este documento registra las decisiones técnicas, visuales y de diseño tomadas para la construcción de mi portafolio profesional, asegurando escalabilidad y buenas prácticas.

## 1. Secciones del Sitio
El sitio está estructurado en un orden lógico para guiar al reclutador o visitante:
- **Hero / Inicio:** Presentación directa con mi nombre, rol profesional, eslogan y enlaces rápidos de contacto.
- **Sobre mí:** Breve descripción de mi perfil, formación técnica y pasión por el desarrollo web.
- **Proyectos:** Sección de tarjetas que muestran mis proyectos destacados con tecnologías usadas y enlaces a demos/repositorios.
- **Habilidades:** Listado organizado por categorías técnicas (Frontend, Backend, Herramientas y Bases de Datos).
- **Contacto:** Formulario funcional de contacto y enlaces directos a mis perfiles profesionales (GitHub, LinkedIn, Email).

## 2. Identidad Visual y Paleta de Colores
Se eligió una paleta minimalista y moderna de 4 colores con alto contraste para cumplir con los estándares de accesibilidad WCAG:
- `--color-primario` (Azul profesional): `hsl(220, 70%, 45%)` — Transmite confianza y tecnología.
- `--color-fondo` (Blanco/Gris muy claro): `hsl(0, 0%, 98%)` — Limpio para lectura prolongada.
- `--color-texto` (Gris oscuro): `hsl(220, 15%, 20%)` — Evita el contraste agresivo del negro puro.
- `--color-acento` (Cian/Turquesa): `hsl(180, 60%, 45%)` — Para llamadas a la acción y elementos destacados.

## 3. Tipografía
- **Fuente Principal:** `'Inter', system-ui, sans-serif` — Moderna, altamente legible en pantallas de cualquier tamaño.
- **Fuente Monoespaciada:** `'JetBrains Mono', monospace` — Utilizada para fragmentos de código o detalles técnicos.

## 4. Justificación Tecnológica
- **HTML5 Semántico:** Uso estricto de etiquetas (`header`, `nav`, `main`, `section`, `article`, `footer`) para una estructura clara y accesible.
- **CSS3 Moderno:** Uso de *Custom Properties* (variables) para facilitar cambios globales (incluyendo el modo oscuro), Grid y Flexbox para layouts adaptables, y enfoque *Mobile-First*.
- **JavaScript Vanilla:** Sin frameworks pesados, enfocado en los fundamentos del DOM, gestión de eventos y almacenamiento local (`localStorage`) para la preferencia del tema oscuro.