# Requirements

## Roles
- Admin
- Empleado
- Cliente (solo visualización)

## Features / Módulos

### Módulo: Auth
- Registro por usuario (empleado o admin)
- JWT para autenticación
- Fecha de último cambio de contraseña
- Intentos fallidos de login

---
#### Admin
- CRUD de cuentas de empleados
  - Nombre
  - Primer apellido
  - Segundo apellido
  - Cédula o identificación
  - Correo

#### Empleado
- CRUD de clientes (jugadores)
  - Nombre
  - Primer apellido
  - Segundo apellido
  - Cédula o identificación
  - Detalles (opcional)
  - Lista negra (booleano: expulsados o prohibidos)
  - Fecha de registro
  - Fecha de última sesión
  - Fecha de nacimiento (validar mayor/menor de edad con identificación o responsable)

### Notificaciones
- 

---

### Módulo: Booking (Core del sistema)

#### Admin y Empleado
- CRUD de consolas de videojuegos (hardware por estación)
  - Nombre de consola (PC, PS5, Xbox, Switch, VR, Racing, Arcade)
  - FK: Lista de videojuegos
  - Validar repetidos

- CRUD de videojuegos instalados (por cada consola)
  - Nombre de videojuego
  - Categoría
  - Validar repetidos

- CRUD de estaciones (mesas o consolas reservables)
  - Código estación (ST-00, ST-01, ST-02)
  - Máximo de jugadores
  - Cantidad de jugadores activos
  - Disponibilidad: Disponible, En uso, En mantenimiento
  - Tiempo de reserva fecha y hora exacta (inicio y fin)
  - FK: Lista de jugadores activos
  - FK: Consola / hardware asignado

#### Empleado
- CRUD de reservas de estaciones (por clientes vía ID)
  - Agregar, modificar, cancelar reservas
  - **Regla:** dos usuarios no pueden reservar el mismo recurso al mismo tiempo → usar transacciones

---

### Cliente (UI)
- Ver lista de estaciones
  - Detalles de consola/hardware
  - Lista de videojuegos
- Calendario de reservas (en tiempo real, con WebSockets)
  - Ver estaciones libres, en uso o en mantenimiento
  - Ver cantidad de jugadores y tiempos restantes
- **Nota:**  
  - El cliente no crea reservas directamente.  
  - Solo visualiza y solicita al empleado.  
  - No necesita cuenta ni login.

---

## Requerimientos No Funcionales
- UI responsive
- UI atractiva, moderna y acorde al nicho
- Feedback: confirmación de reserva, correos/notificaciones
- Integridad de datos: sin reservas huérfanas, duplicadas o sin usuario asignado
- Rendimiento: alta velocidad de carga (aunque en demo/hosting gratuito puede variar)
- Consistencia: evitar overbooking
- Seguridad: Auth JWT, protección contra SQL injection, CSRF, XSS, brute force
