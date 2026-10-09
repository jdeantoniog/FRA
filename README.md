# Inicio París

Página de inicio independiente: España (Madrid, Montecarmelo) frente a Francia (París), con el tiempo de Somo (Ribamontán al Mar, Cantabria). Frase del día y expresiones en **francés con traducción al español**. Textos de la página en español.

No está enlazada con las versiones de EE. UU. (no tiene menú de cambio de país ni guarda "última versión vista").

## Orden en pantalla

1. Frase del día en francés (o mensaje especial y aviso de cumpleaños).
2. Banderas de España y Francia con hora, día y tiempo actual (misma hora en los dos).
3. Tiempo en Montecarmelo, París y Somo: hoy, hora a hora y 6 días.
4. Calendario: festivos de España (Madrid, Cantabria y Ribamontán al Mar) y de Francia, calendario escolar de Madrid y de París (zona C), cumpleaños, eventos de París, días señalados de los dos países y de Cantabria, cambios de hora y santoral.
5. Próximas fechas con cuenta atrás.
6. Conversor: dólares/euros y medidas de EE. UU. (igual que en las otras versiones).
7. Sol y aire de los tres lugares.
8. Expresiones útiles: 2.000 en francés, 20 al día, con repaso y aprendidas. Las aprendidas en francés no se mezclan con las de inglés de las otras versiones.

## Archivos

| Archivo | Para qué sirve | ¿Se edita? |
|---|---|---|
| `index.html` | La página (mismo código que las versiones de EE. UU., ampliado) | No |
| `config.js` | Lugares, festivos, señalados, coles, eventos | Sí |
| `cumples.js` | Cumpleaños (los de la versión España) | Sí |
| `palabras.js` | Frases y 2.000 expresiones francés-español | Rara vez |
| `santoral.js` | Santoral español | Rara vez |
| `idioma.js` | Vacío: la página está en español | No |

## Cambiar un lugar

En `config.js`: `pais.tiempo` (Montecarmelo), `usa.tiempo` (París) o `lugaresExtra` (Somo). Nombre, latitud y longitud. Se pueden añadir más lugares a `lugaresExtra`.

## Mantenimiento

- **Festivos de España**: cargados 2026 y 2027 (Madrid y Cantabria oficiales). Los dos locales de Ribamontán al Mar (San Isidro y Latas) siguen el patrón de años anteriores y están marcados como pendientes de confirmar. Desde octubre, la página avisa si faltan los del año siguiente.
- **Festivos de Francia**: online (Nager.Date). Si no hay conexión, se calculan solos.
- **Coles**: Madrid y París (zona C) cargados para el curso 2026-2027. La página avisa cuando no quedan fechas futuras.
- **Eventos de París**: hasta julio de 2027. Añadir los del curso siguiente cuando se publiquen.

## Publicar

Igual que las otras: sube la carpeta `inicio-paris` a un repositorio de GitHub (puede ser el mismo que las demás, como otra carpeta) y activa Settings > Pages > Deploy from a branch > main / (root). Dirección: `https://TU-USUARIO.github.io/REPOSITORIO/inicio-paris/`.
