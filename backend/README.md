# Backend de la Aplicación de Películas

Este repositorio contiene el código fuente del backend de la Aplicación de Películas, que proporciona la API para gestionar películas y autenticación de usuarios.

## Tecnologías Utilizadas

- Node.js: Plataforma de ejecución de JavaScript.
- Express.js: Framework para construir APIs y aplicaciones web.
- Sequelize: ORM para interactuar con la base de datos.
- MariaDB: Motor de base de datos relacional.
- JWT: Para la autenticación y generación de tokens JWT.
- bcrypt: Para el cifrado de contraseñas.

## Estructura de Carpetas

- `/infrastructure`: Contiene la configuración y el middleware de la aplicación.
- `/interface/routes`: Define las rutas de la API y los controladores correspondientes.
- `/application`: Contiene la lógica de negocio de la aplicación.
- `/application/services`: Define los servicios para interactuar con los modelos y la base de datos.

## Configuración

1. Clona este repositorio: `git clone <URL del repositorio>`
2. Instala las dependencias: `npm install`
3. Configura las variables de entorno en un archivo `.env`.
4. Ejecuta el servidor: `npm start`

## Variables de Entorno

- `PORT`: Puerto en el que se ejecutará el servidor.
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`: Configuración de la base de datos MariaDB.
- `JWT_SECRET`: Clave secreta para la generación y verificación de tokens JWT.

## Endpoints de la API

- `/auth/signup`: Registro de nuevos usuarios.
- `/auth/login`: Inicio de sesión de usuarios.
- `/user/profile`: Obtener el perfil del usuario autenticado.
- `/user/profile/update`: Actualizar el perfil del usuario autenticado.
- Otros endpoints para la gestión de películas (CRUD).
