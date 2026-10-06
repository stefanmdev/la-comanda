# 🧩 Listado de módulos — La Comanda

Módulos funcionales que desarrollará el equipo, con su descripción y prioridad. La prioridad separa el **MVP** (producto mínimo viable, obligatorio) de lo **deseable** (se aborda solo con el MVP cerrado).

| Prioridad       | Significado                                               |
| --------------- | --------------------------------------------------------- |
| 🔴 **MVP**      | Imprescindible para la primera versión funcional          |
| 🟡 **Deseable** | Mejora o extensión; se implementa si el tiempo lo permite |

---

## 🔴 Módulos del MVP

### 1. Autenticación y autorización

Registro e inicio de sesión con email y contraseña (hasheada con bcrypt), emisión y validación de tokens **JWT**, y control de acceso por rol (`cliente` / `admin`) mediante rutas protegidas en el frontend y middlewares de autorización en la API.

### 2. Gestión de usuarios

Alta de usuarios a través del registro y listado de usuarios registrados desde el panel de administración.

### 3. Catálogo / Carta

Vista pública donde cualquier visitante consulta los platos disponibles, organizados por categoría, con precio y disponibilidad actualizados.

### 4. ABM de platos (CRUD)

El administrador da de alta, modifica, elimina y lista los platos de la carta (nombre, detalle, precio, categoría, imagen y estado).

### 5. Carrito y pedidos

El cliente registrado arma su carrito (selección de platos, cantidades y total calculado) y confirma el pedido indicando su número de mesa; el pedido se persiste con estado «pendiente».

### 6. Mis pedidos

El cliente autenticado consulta el historial y el estado de sus propios pedidos.

### 7. Gestión de pedidos (admin)

El administrador lista todos los pedidos y cambia su estado (pendiente › realizado / cancelado) desde el panel.

### 8. API REST y documentación

API REST con todos los endpoints del MVP, probada y documentada como colección de **Postman**.

---

## 🟡 Módulos deseables (nice to have)

Ordenados por prioridad, según su relación valor demostrable / esfuerzo:

1. **Búsqueda y filtrado por categoría** con paginación del listado de platos.
2. **Stock simple por plato:** cantidad disponible que se descuenta al confirmar cada pedido; el plato sin stock figura «agotado» y no puede agregarse al carrito. _(Distinto del inventario de insumos, que queda fuera de alcance.)_
3. **Página de pago simulada:** checkout propio que valida los datos y marca el pedido como «pagado», sin depender de servicios externos. Como extensión opcional, integración con Mercado Pago en modo de prueba (sandbox).
4. **Email de bienvenida** al registrarse.
5. **CRUD de usuarios con aprobación** por el administrador.
6. **CRUD de categorías** como colección propia.
7. **Estado adicional «en preparación»** y notificación visual de cambios de estado.
8. **Carga de imágenes** a un servicio externo (p. ej. Cloudinary) en lugar de URL.
9. **Mini-estadísticas** para el admin: platos más pedidos y pedidos por día.
10. **Acceso a la carta por código QR** por mesa.

---

## 🚫 Fuera de alcance (v1)

Pagos con dinero real, facturación electrónica/fiscal, gestión de inventario de insumos, delivery y logística, apps móviles nativas, notificaciones en tiempo real (websockets / push) y soporte multi-sucursal. Quedan registrados en el backlog como una eventual segunda versión.

---

_Documento de la 2.ª entrega (Diseño y Módulos) — La Comanda · TUPaD · UTN._
