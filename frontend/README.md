## Frontend de la Aplicación de Películas

Este repositorio contiene el código fuente del frontend de la Aplicación de Películas, que proporciona la interfaz de usuario para interactuar con la API de gestión de películas y autenticación de usuarios.

## Tecnologías Utilizadas

- React.js: Biblioteca de JavaScript para construir interfaces de usuario.
- Material-UI: Biblioteca de componentes de diseño para React.
- Axios: Cliente HTTP para hacer solicitudes a la API del backend.

## Estructura de Carpetas

- `/public`: Contiene archivos públicos como el archivo `index.html`.
- `/src`: Contiene el código fuente de la aplicación.
  - `/components`: Define componentes reutilizables de la interfaz de usuario.
  - `/pages`: Define las páginas principales de la aplicación.
  - `/api`: Define las funciones para hacer solicitudes a la API del backend.
  - `/services`: Contiene lógica de servicios para la autenticación y gestión de películas.
  - `App.js`: Punto de entrada de la aplicación.
  - `index.js`: Punto de entrada para renderizar la aplicación en el DOM.

## Configuración

1. Clona este repositorio: `git clone <URL del repositorio>`
2. Instala las dependencias: `npm install`
3. Configura la URL de la API en los archivos de servicio (`api/auth.js`, `api/movies.js`).
4. Ejecuta la aplicación: `npm start`

## Funcionalidad

- Página de inicio de sesión.
- Página de perfil de usuario.
- Página de gestión de películas (CRUD).
- Navegación entre páginas con React Router.
- Interfaz de usuario con componentes Material-UI.
