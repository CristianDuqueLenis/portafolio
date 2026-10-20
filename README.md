# Portafolio — Cristian Duque Lenis

Sitio web profesional de portafolio para presentar información personal, formación, proyectos, tecnologías y áreas de interés.

El diseño es responsive (pantallas pequeñas, medianas y grandes) con **React** y **Bootstrap 5**. El contenido se edita en un único archivo de datos, sin mezclarlo con la interfaz.

## Autor

- **Nombre:** Cristian Duque Lenis
- **Perfil:** Estudiante de Ingeniería informática
- **Ubicación:** Bello, Colombia
- **Correo:** cristianduquelenis@gmail.com
- **GitHub:** [CristianDuqueLenis](https://github.com/CristianDuqueLenis)

## Stack

| Tecnología | Uso |
| --- | --- |
| [React 19](https://react.dev/) | Interfaz por componentes |
| [Vite 8](https://vite.dev/) | Desarrollo y build |
| [Bootstrap 5](https://getbootstrap.com/) | Grid, utilidades y layout responsive |
| CSS modular | Paleta, tipografía, secciones y animaciones |
| [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) | Análisis estático |

## Secciones

1. **Información personal** — presentación, foto y datos de contacto
2. **Estudios realizados** — formación académica y técnica
3. **Proyectos** — experiencia y trabajo en progreso (PySL)
4. **Lenguajes y tecnologías** — stack agrupado con logos
5. **Áreas de interés** — informática y telecomunicaciones en emergencias
6. **Contacto** — correo, celular y GitHub

En pantallas grandes hay una columna introductoria fija y el contenido a la derecha. En tablet y móvil el layout se apila y la navegación se compacta.

## Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- npm (incluido con Node.js)

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Vite abre el servidor local (por defecto `http://localhost:5173`).

### Otros comandos

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila la versión de producción en `dist/` |
| `npm run preview` | Sirve el build de producción en local |
| `npm run lint` | Ejecuta Oxlint |

## Estructura del proyecto

```text
src/
├── App.jsx                 # Orquesta layout, filtros y secciones
├── main.jsx                # Punto de entrada de React
├── data/
│   └── portfolioData.js    # Todo el contenido editable
├── hooks/
│   └── useScrollReveal.js  # Animación al hacer scroll
├── components/
│   ├── layout/             # Sidebar y pie de página
│   ├── sections/           # Cada bloque del portafolio
│   └── ui/                 # Piezas reutilizables
└── styles/
    ├── main.css            # Entrada CSS
    ├── abstracts/          # Variables
    ├── base/               # Reset y tipografía
    ├── layout/             # Contenedor, nav y footer
    ├── components/         # Botones, cards, badges
    ├── sections/           # Estilos por sección
    ├── animations/         # Transiciones y reduced-motion
    └── responsive/         # Ajustes mobile y tablet
```