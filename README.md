# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Proyecto de Navegación en React
Este proyecto es un ejercicio práctico en React que demuestra la creación y el manejo de componentes, la comunicación entre ellos y la gestión de estados. La aplicación permite a los usuarios agregar elementos a un menú de navegación dinámico.

Características del Proyecto
Crear un Componente: Se creó el componente Navbar para manejar el menú de navegación y el formulario para agregar nuevos ítems.

Llamar Componente desde Otro Componente: El componente Navbar es llamado desde el componente padre App.

Pasar Parámetros del Componente Padre al Componente Hijo:

El componente padre pasa una lista de ítems y una función para agregar nuevos ítems al componente hijo.
Renderizar Objeto Encontrado en el Componente Hijo:

El componente Navbar renderiza los ítems del menú recibidos del padre.
Manejar Estados en Componente Padre para Actualizar el Componente Hijo:

Se utiliza useState en el componente padre para manejar la lista de ítems y actualizarla cuando se agregan nuevos ítems.
Pasar Datos del Componente Hijo al Componente Padre:

Cuando se agrega un nuevo ítem, el hijo pasa el nuevo ítem al padre a través de una función.
Incluir Hoja de Estilos:

Se utilizan clases de Tailwind CSS para estilizar la aplicación y los componentes.
Crear un Menú:

Se crea un menú de navegación dinámico que permite a los usuarios agregar nuevos ítems.
Estructura del Proyecto
App.js: Componente principal que maneja el estado del menú y pasa props al componente Navbar.
Navbar.js: Componente que renderiza el menú y el formulario para agregar nuevos ítems.
Instalación
Clona este repositorio:


Copiar código
git clone https://github.com/InfiTech2024/taller-1-talento-tech-.git

Instala las dependencias:


npm install
Inicia la aplicación:

npm start
La aplicación debería abrirse en http://localhost:3000.

Uso
Escribe el nombre de un nuevo ítem en el campo de entrada.
Haz clic en el botón "Agregar" para añadir el ítem al menú de navegación.
Los ítems se mostrarán automáticamente en el menú.
Ejemplo de Código
Aquí hay un ejemplo de cómo se manejan los componentes y el estado:
