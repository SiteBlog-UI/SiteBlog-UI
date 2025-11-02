# 🎌 ¡Gracias por tu interés en contribuir con `SiteBlog-UI`! 🎌

¡Estamos encantados de que estés aquí! Toda contribución es valiosa, ya sea
reportando un error, proponiendo una nueva idea, o escribiendo código.

Este documento es una guía para que tu contribución sea lo más fluida posible
para ti y para nosotros.

## 🤝 Nuestro Código de Conducta

Esperamos que todos los participantes sigan nuestro
[Código de Conducta](CODE_OF_CONDUCT.md). Por favor, tómate un minuto para
leerlo antes de continuar. Queremos mantener una comunidad acogedora y
respetuosa.

## ❓ ¿Por dónde empiezo?

Si es tu primera vez, una excelente forma de empezar es buscando _issues_
(problemas) con la etiqueta `good first issue` o `help wanted`. Estas son tareas
que hemos identificado como buenos puntos de entrada al proyecto.

## 🐞 Reportar un Bug (Error)

Los buenos reportes de bugs son increíblemente útiles. Si has encontrado un
error, por favor:

1. **Busca en los Issues:** Asegúrate de que el bug no haya sido reportado
   antes.
2. **Abre un nuevo Issue:** Si no existe,
   [abre un Issue aquí](httpsDE-TU-REPOSITORIO/issues/new).
3. **Usa la plantilla "Bug Report"**: Rellena la plantilla con la mayor cantidad
   de detalles posible.
   - **Describe el bug:** ¿Qué ocurre exactamente?
   - **Pasos para reproducirlo:** Sé específico. Ejemplo: 1. Ve a '...', 2. Haz
     clic en '...', 3. Observa el error.
   - **Comportamiento esperado:** ¿Qué debería haber pasado?
   - **Capturas de pantalla:** (Si es un error visual).
   - **Contexto:** ¿Qué navegador/versión de Node.js/SO estás usando?

## ✨ Proponer una Nueva Característica (Feature)

1. **Busca en los Issues:** Asegúrate de que tu idea no se haya propuesto antes.
2. **Abre un "Feature Request"**:
   [Abre un Issue aquí](ENLACE-A-TUS-ISSUES/issues/new) usando la plantilla de
   "Feature Request".
3. **Describe tu idea:**
   - **¿Qué problema soluciona?** ("Me frustra tener que hacer X
     manualmente...").
   - **¿Cuál es la solución propuesta?** ("Propongo añadir un botón Y que haga
     Z...").
   - **(Opcional) Alternativas:** ¿Has considerado otras formas de hacerlo?

_Por favor, no empieces a programar una nueva característica grande sin abrir
primero un Issue para discutirla. No queremos que trabajes en vano si la
característica no se alinea con los objetivos del proyecto._

---

## 💻 Enviar Código (Pull Requests)

Este es el núcleo de las contribuciones. Seguimos el flujo de trabajo estándar
de "Fork y Pull".

### 1. Preparación (Configuración Local)

1. **Haz un "Fork"** del repositorio `[Nombre-Proyecto]` a tu propia cuenta de
   GitHub.
2. **Clona tu fork** en tu máquina:
   ```bash
   git clone [https://github.com/TU-USUARIO/](https://github.com/TU-USUARIO/)[Nombre-Proyecto].git
   cd [Nombre-Proyecto]
   ```
3. **Añade el repositorio original** como "upstream" para poder sincronizar
   cambios:
   ```bash
   git remote add upstream [https://github.com/REPOSITORIO-ORIGINAL/](https://github.com/REPOSITORIO-ORIGINAL/)[Nombre-Proyecto].git
   ```
4. **Instala las dependencias.** Usamos `npm`:
   ```bash
   npm install
   ```

### 2. Programar (Hacer los cambios)

1. **Sincroniza tu rama `main`** con la original:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```
2. **Crea una nueva rama** para tus cambios. Usa un nombre descriptivo:
   - Para nuevas características: `git checkout -b feature/nombre-de-la-feature`
   - Para arreglar bugs: `git checkout -b fix/descripcion-del-bug`
3. **¡Escribe tu código!**
4. **Sigue el estilo de código:**
   - Usamos **ESLint** y **Prettier**. Están configurados en el proyecto.
   - Puedes formatear tu código automáticamente ejecutando: `npm run format`
   - Puedes comprobar si hay errores de estilo con: `npm run lint`

### 3. Commits (Guardar tu progreso)

Queremos mantener un historial de commits limpio. Usamos **Commits
Convencionales**. Esto nos ayuda a generar el `CHANGELOG` (historial de cambios)
automáticamente.

**Formato:** `<tipo>(<ámbito>): <descripción>`

- **Tipos comunes:**
  - `feat`: Una nueva característica (ej:
    `feat(api): añade el endpoint de usuarios`)
  - `fix`: Una corrección de un bug (ej:
    `fix(ui): corrige el color del botón de login`)
  - `docs`: Cambios en la documentación (ej:
    `docs: actualiza el CONTRIBUTING.md`)
  - `style`: Cambios de formato, comas, etc. (ej:
    `style: aplica prettier a todo el código`)
  - `refactor`: Cambios en el código que no arreglan un bug ni añaden una
    feature.
  - `test`: Añadir o modificar tests.

### 4. Enviar (Crear el Pull Request)

1. **Ejecuta las pruebas** para asegurarte de que no has roto nada:
   ```bash
   npm test
   ```
2. **Sube tu rama** a tu fork en GitHub:
   ```bash
   git push origin feature/nombre-de-la-feature
   ```
3. **Abre un Pull Request (PR)** en GitHub.
   - Ve a tu fork y verás un botón para "Crear Pull Request".
   - Asegúrate de que estás comparando tu rama (`feature/mi-feature`) con la
     rama `main` del repositorio original.
4. **Rellena la plantilla del PR:**
   - **Enlaza el Issue:** Pon "Closes #123" si tu PR cierra el Issue número 123.
   - **Describe tus cambios:** ¿Qué hiciste? ¿Por qué?
   - **Pruebas:** ¿Cómo has probado tus cambios? (Ej: "Añadí un test unitario",
     "Lo probé manualmente en Chrome y Firefox").

¡Y ya está! Uno de los mantenedores revisará tu código, te dará feedback si es
necesario, y lo fusionará.

¡Muchas gracias por tu tiempo y esfuerzo!
