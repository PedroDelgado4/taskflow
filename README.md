# TaskFlow

Aplicación de gestión de tareas construida con React.
Proyecto enfocado en arquitectura limpia, manejo de estado y persistencia local.

## Demo

[Ver aplicación online](LINK_A_VERCEL)

---

## Objetivo del proyecto

Desarrollar una aplicación frontend profesional aplicando:

- Componentización correcta
- Manejo de estado con hooks
- Custom hook para separación de lógica
- Persistencia con localStorage
- Filtros derivados sin duplicar estado
- UI limpia y responsive

---

## Stack

- React (Vite)
- JavaScript ES6
- CSS moderno (Flexbox)
- LocalStorage API

---

## Funcionalidades

- Crear tareas
- Eliminar tareas
- Marcar como completadas
- Filtros (All / Active / Completed)
- Contador dinámico
- Limpiar completadas
- Persistencia automática

---

## Arquitectura

- `useTasks` custom hook para encapsular lógica
- Componentes separados por responsabilidad
- Estado derivado en vez de duplicado
- UI desacoplada de la lógica

---

## Estructura

src/
- components/
- hooks/
- pages/
- styles/

---

## Mejoras futuras

- Animaciones suaves
- Tests unitarios
- Backend real con API
