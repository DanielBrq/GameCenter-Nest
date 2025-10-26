# Game Center (Proyecto Portafolio)

## Prerequisitos

- El proyecto usa PNPM tanto en React como en Nest:
  https://pnpm.io/

- Tener instalado docker, la base de datos está en imágenes y volúmenes de docker.
  https://www.docker.com/

# Frontend React

- Moverse a la carpeta client:

  > cd .\client\

- Instalar dependencias:

  > pnpm install

- Iniciar:
  > pnpm run dev

# Backend NestJS

- Moverse a la carpeta server:

  > cd .\server\

- Instalar dependencias:

  > pnpm install

- Iniciar (swc):

  > pnpm run dev

- Iniciar (tsc):

  > pnpm run dev-tsc

- Levantar Base de datos con docker:

  > pnpm run db:run:dev

## Descripción

Aplicación web ficticia para la gestión de un negocio de entretenimiento tipo _Game Center_.  
El sistema incluye autenticación, administración de usuarios, gestión de consolas/videojuegos y un módulo de reservas en tiempo real.

---

## Stack Tecnológico

- **Frontend:** React (FSD) + Vite + TypeScript
- **Estilos:** TailwindCSS
- **Backend:** NestJS
- **Base de datos:** PostgreSQL + Prisma (ORM)

---

## Objetivo del proyecto

Este proyecto no está basado necesidad/cliente comercial real, sino servir como práctica completa de desarrollo FullStack.  
La idea es simular un sistema que cualquier negocio podría requerir (reservas, usuarios, roles, etc.), con el fin de:

- Poner en práctica **frameworks y herramientas modernas**.
- Reforzar el conocimiento en **arquitectura de sistemas**.
- Documentar y estructurar requisitos

Los detalles de funcionalidades y módulos están descritos en [`requirements.md`](./Requirements.md).
