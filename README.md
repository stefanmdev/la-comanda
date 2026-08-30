# 🍽️ La Comanda

Sistema web de gestión de **menús y pedidos** para comercios gastronómicos.

La Comanda busca centralizar la carta y la gestión de pedidos en una única plataforma web, permitiendo a los clientes consultar los platos disponibles, realizar pedidos y consultar su estado, mientras que los administradores pueden gestionar la carta, los pedidos y los usuarios.

> 🎓 **Trabajo Final** — Tecnicatura Universitaria en Programación a Distancia (TUPaD) · UTN

📄 **Propuesta completa (PDF):** [`docs/PropuestadeProyecto.pdf`](docs/Propuesta-de-Proyecto.pdf)

---

## 📌 Estado

En desarrollo — **Entrega 01: Propuesta de proyecto y repositorio.**

## 🧩 El problema

Los comercios gastronómicos pequeños gestionan su carta en soportes estáticos (impresa, pizarra o PDF por WhatsApp) y toman los pedidos a mano. Esto genera información desactualizada (precios y disponibilidad), errores y demoras en los pedidos, y ausencia de registro digital sobre qué se vende. **La Comanda** centraliza carta y pedidos en una única plataforma accesible desde cualquier dispositivo, con permisos por rol.

## 🛠️ Stack tecnológico

| Capa               | Tecnología                                              |
| ------------------ | ------------------------------------------------------- |
| **Frontend**       | React + TypeScript (Vite) · React Router · Tailwind CSS |
| **Backend**        | Node.js + Express                                       |
| **Base de datos**  | MongoDB Atlas + Mongoose                                |
| **Autenticación**  | JWT + bcrypt                                            |
| **Pruebas de API** | Postman                                                 |
| **Despliegue**     | Netlify (frontend) · Render (backend)                   |
| **Gestión**        | Git + GitHub · Trello · Scrum adaptado                  |

## 🎯 Alcance del MVP

- Registro e inicio de sesión con JWT y roles (cliente / administrador).
- Carta pública organizada por categorías, con precios y disponibilidad.
- Carrito con cantidades y total; confirmación de pedido con número de mesa.
- "Mis pedidos": historial y estado para el cliente.
- Panel admin: CRUD de platos, gestión de estados de pedidos y listado de usuarios.
- Diseño responsive, API documentada y todo desplegado en producción.
  _Deseable si el tiempo lo permite:_ búsqueda/filtrado por categoría, stock simple por plato, página de pago simulada, email de bienvenida y CRUD de usuarios con aprobación.

## 👥 Equipo

- **Stefan Dios Mayarin**
- **Mathias Jesus Flor**

- **Tutora:** María Candela Grosso

---

_Proyecto académico — TIF · TUPaD · UTN · 2026._
