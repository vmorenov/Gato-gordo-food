# Gato Gordo Food

Primera versión del sitio web estático de **Gato Gordo**, implementada en **React 19** con **Vite 7** y una arquitectura modular orientada a crecimiento.

La web está pensada para presentar:

- Carta de mayo 2026.
- Identidad del restaurante.
- Ubicación y horarios.
- Canales de contacto.
- Base visual responsiva para futuras iteraciones.

## Stack

- React `19.1.1`
- React DOM `19.1.1`
- Vite `7.1.4`
- `@vitejs/plugin-react` `6.0.2`
- ESLint `10.0.0`

## Scripts

- `npm run dev`: levanta el proyecto en `http://localhost:3001`
- `npm run build`: genera build de producción
- `npm run lint`: ejecuta validación estática
- `npm run preview`: sirve el build en `http://localhost:4174`

## Estructura

```text
src/
  app/                 # Bootstrap y composición principal
  components/          # Piezas comunes y layout
  data/                # Datos desacoplados de navegación, carta y restaurante
  features/            # Secciones funcionales de la página
  styles/              # Variables, globales y utilidades
  utils/               # Helpers de formato y navegación
```

## Contenido cargado en esta versión

- Hero de marca con CTA al menú.
- Carta organizada por categorías a partir de `CARTA MAYO 2026.pdf`.
- Sección de propuesta gastronómica.
- Sección de ubicación y horarios.
- Sección de contacto con acceso directo a WhatsApp y teléfono.
- Footer con navegación resumida.

## Fuentes usadas para los datos

- Menú base: `.local/.base/CARTA MAYO 2026.pdf`
- Contexto de implementación: `.local/.context/AGENT.md` y `.local/.context/CRITERIOS.md`
- Datos públicos de dirección, teléfono y horarios: referencias públicas recientes de Uber Eats / listados web

## Notas

- El proyecto usa el puerto `3001` para desarrollo porque `3000` quedó reservado.
- El enlace exacto de Instagram no quedó confirmado en esta iteración y fue dejado como pendiente en la UI.
- La validación obligatoria `npm run build` y `npm run lint` requiere instalar dependencias primero.

## Próximos pasos recomendados

1. Confirmar Instagram oficial y cualquier otro canal social.
2. Sustituir bloques visuales abstractos por fotografía real del local o platos.
3. Revisar con negocio si los horarios públicos siguen vigentes al **26 de mayo de 2026**.
4. Evaluar una segunda iteración con administración externa del menú vía JSON o CMS.
