# Proyecto de Aplicación de Películas

Este es un proyecto de una aplicación web de películas que incluye tanto el frontend como el backend. La aplicación permite a los usuarios autenticados gestionar películas, realizar operaciones CRUD y más.

## Estructura del Proyecto

# Proyecto de Aplicación de Películas

Este es un proyecto de una aplicación web de películas que incluye tanto el frontend como el backend. La aplicación permite a los usuarios autenticados gestionar películas, realizar operaciones CRUD y más.

## Estructura del Proyecto

El proyecto está organizado en las siguientes carpetas:

- `frontend`: Contiene el código del frontend de la aplicación desarrollado con React.js y Material-UI.
- `backend`: Contiene el código del backend de la aplicación desarrollado con Express.js y Sequelize ORM.

### Instrucciones de Uso

#### Backend

El backend está construido utilizando Express y Sequelize para interactuar con la base de datos. Utiliza JWT para la autenticación y cifra las contraseñas utilizando bcrypt. La base de datos está configurada con MariaDB y se encuentra en un contenedor de Docker. Aquí tienes una guía sobre cómo configurar y ejecutar el backend:

1. Navega a la carpeta `backend`:

```bash
cd backend/
```

2. Instala las dependencias utilizando yarn o npm:

```bash
npm install (o yarn)
```

3. Configura las variables de entorno en un archivo `.env` en la raíz del directorio `backend`. Aquí tienes un ejemplo de configuración:

```
PORT=3001
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=yourpassword
DB_DATABASE=movies
JWT_SECRET=yourjwtsecret
```

4. Ejecuta el servidor backend:

```bash
yarn run dev o npm run dev
```

#### Frontend

El frontend está construido utilizando React.js y Material-UI para la interfaz de usuario. Aquí tienes una guía sobre cómo configurar y ejecutar el frontend:

1. Navega a la carpeta `frontend`:

```bash
cd frontend
```

2. Instala las dependencias utilizando yarn o npm:

```bash
yarn install o npm install
```

3. Ejecuta la aplicación frontend en modo de desarrollo:

```bash
yarn run dev o npm run dev
```

4. Abre tu navegador y visita `http://localhost:5173` para ver la aplicación.

## Requisitos del Sistema

Asegúrate de tener instaladas las siguientes herramientas antes de ejecutar la aplicación:

- Node.js (versión 14.0.0 o superior)
- npm (administrador de paquetes de Node.js)
- Docker (para la base de datos MariaDB)
