# 🏗️ Arquitectura del proyecto — La Comanda

## 1. Visión general

La Comanda es una aplicación web con arquitectura **cliente-servidor desacoplada**: un **frontend SPA** (React) que se comunica por HTTP con un **backend API REST** (Node.js + Express), que a su vez persiste los datos en **MongoDB**. Cada parte es independiente y se despliega por separado.

```
┌──────────────────┐      HTTPS / JSON      ┌──────────────────┐      ┌──────────────────┐
│     FRONTEND     │  ───────────────────▶  │     BACKEND      │ ───▶ │   BASE DE DATOS  │
│  SPA React + TS  │   (JWT en Authorization)│ API REST Express │      │   MongoDB Atlas  │
│    (Netlify)     │  ◀───────────────────  │     (Render)     │ ◀─── │     (nube)       │
└──────────────────┘                        └──────────────────┘      └──────────────────┘
```

El frontend nunca accede directo a la base de datos: todo pasa por la API. Las rutas privadas viajan con el token **JWT** en el encabezado `Authorization`, y el backend valida el token y el rol antes de responder.

---

## 2. Patrón de arquitectura del backend

El backend sigue una **arquitectura por capas (MVC adaptado a API REST)**, donde cada capa tiene una responsabilidad única y el flujo de una petición es:

```
Request → Rutas → Middlewares → Controladores → Servicios → Modelos (Mongoose) → MongoDB
```

| Capa                            | Responsabilidad                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------- |
| **Rutas (routes)**              | Definen los endpoints y los asocian a su controlador                             |
| **Middlewares**                 | Autenticación JWT, autorización por rol, validación de datos y manejo de errores |
| **Controladores (controllers)** | Reciben la petición, invocan la lógica y arman la respuesta HTTP                 |
| **Servicios (services)**        | Lógica de negocio (reglas, cálculos, validaciones de dominio)                    |
| **Modelos (models)**            | Esquemas de Mongoose que representan las colecciones y hablan con MongoDB        |
| **Config**                      | Conexión a la base de datos y variables de entorno                               |

Esta separación mantiene el código ordenado, testeable y fácil de mantener: la lógica de negocio no se mezcla con el manejo de HTTP ni con el acceso a datos.

---

## 3. Organización del frontend

El frontend (React + TypeScript con Vite) se organiza por responsabilidad:

| Carpeta       | Contenido                                                               |
| ------------- | ----------------------------------------------------------------------- |
| `components/` | Componentes reutilizables (navbar, card de plato, etc.)                 |
| `pages/`      | Vistas / pantallas (Home, Login, Registro, Carrito, Mis pedidos, Admin) |
| `context/`    | Estado global (sesión del usuario y carrito)                            |
| `services/`   | Cliente HTTP que consume la API                                         |
| `types/`      | Tipos de TypeScript compartidos                                         |

El ruteo y la protección de rutas por rol se manejan con **React Router**.

---

## 4. Tecnologías definitivas

| Capa           | Tecnología                            | Justificación                                                                                        |
| -------------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Frontend       | React 18 + TypeScript (Vite)          | Componentes reutilizables; el tipado reduce errores al trabajar de a dos                             |
| Ruteo          | React Router                          | Estándar para rutas públicas y protegidas por rol                                                    |
| Estilos        | Tailwind CSS + CSS propio             | Maquetado responsive rápido y consistente                                                            |
| Backend        | Node.js + Express                     | Unifica el lenguaje en todo el stack; ideal para una API REST liviana; experiencia previa del equipo |
| Base de datos  | MongoDB Atlas + Mongoose              | Modelo de documentos natural para carta y pedidos con ítems embebidos; tier gratuito estable         |
| Autenticación  | JWT + bcrypt                          | Estándar sin estado para SPA + API; contraseñas siempre hasheadas                                    |
| Pruebas de API | Postman                               | Colección documentada de los endpoints                                                               |
| Despliegue     | Netlify (frontend) · Render (backend) | PaaS gratuitos con deploy continuo desde GitHub y HTTPS; costo de operación $0                       |
| Versionado     | Git + GitHub (repositorio único)      | Requisito de la asignatura; trabajo en paralelo con ramas y pull requests                            |
| Gestión        | Trello + Scrum adaptado               | Sprints semanales y tablero visible                                                                  |

---

## 5. Despliegue

Cada componente se despliega de forma independiente con deploy continuo desde el mismo repositorio: **Netlify** toma la carpeta `frontend/` y **Render** la carpeta `backend/`. Los datos viven en **MongoDB Atlas**. Las variables sensibles (cadena de conexión, secreto JWT) se configuran como variables de entorno en cada plataforma y nunca se suben al repositorio.

---

_Documento de la 2.ª entrega (Diseño y Módulos) — La Comanda · TUPaD · UTN._
