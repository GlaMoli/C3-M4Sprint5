🌍 Country App – CRUD con React + Vite + TailwindCSS
📌 Descripción
Aplicación web desarrollada con React + Vite + TailwindCSS que implementa un CRUD completo sobre una colección de países. Permite crear, listar, editar, eliminar y ver detalles de cada país, con confirmaciones visuales y notificaciones.



🚀 Tecnologías utilizadas
⚛️ React + Vite → Frontend rápido y modular

🎨 TailwindCSS → Estilos responsivos y modernos

🌐 Axios → Peticiones HTTP (GET, POST, PUT, DELETE)

🔄 Context API → Manejo de estado global

🛠️ React Router DOM → Rutas estáticas, dinámicas y navegación programática

🔔 React-Toastify → Notificaciones visuales

✅ SweetAlert2 → Confirmaciones de eliminación


🧽 Rutas principales
/ → Página principal (Home)

/countries → Listado general de países

/countries/:id → Detalle de un país

/countries/create → Formulario para crear país

/countries/:id/edit → Formulario para editar país

* → Página 404 con mensaje de error

📦 Funcionalidades
✅ Crear un nuevo país mediante formulario controlado con validación

✅ Editar país existente con precarga de datos

✅ Eliminar país con confirmación visual (SweetAlert2)

✅ Ver detalles de un país seleccionado

✅ Listar países desde API con paginación

✅ Feedback visual con notificaciones (Toastify)

✅ Diseño responsivo con Navbar y menú hamburguesa

✅ Scroll horizontal en la tabla de países

✅ Cursor tipo manito en botones y filas clickeables

📂 Estructura de carpetas

/src
 ├── components
 │   ├── Navbar.jsx
 │   ├── Footer.jsx
 │   └── CountryCard.jsx   ✅
 ├── pages
 │   ├── CountryList.jsx
 │   ├── CountryDetail.jsx
 │   ├── CountryCreate.jsx
 │   ├── CountryEdit.jsx
 │   └── NotFound.jsx
 ├── contexts
 │   └── CountryContext.jsx
 ├── router
 │   └── AppRouter.jsx
 ├── App.jsx
 └── main.jsx

🎨 Estilo
Diseño responsivo y limpio con TailwindCSS

Botones accesibles y claros

UX fluida y moderna

📦 Evaluación cumplida
CRUD funcional completo con API

Navegación fluida entre vistas

Formularios controlados y validados

Estado global con Context API

Confirmaciones + Toasts

Estilo responsive y limpio

Código ordenado y reutilizable


🚀 Instalación y ejecución

# Clonar repositorio
git clone https://github.com/usuario/country-app.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build para producción
npm run build
🌐 Despliegue
👉 Ver aplicación en Netlify