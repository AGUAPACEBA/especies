# Recolección de Especies (sin internet, gratis)

Archivos:
- `index.html`: app de captura para los recolectores (celular)
- `admin.html`: panel del administrador (organigrama, unir CSV, exportar)
- `sw.js`, `manifest.webmanifest`, `ctm12.js`, iconos: necesarios para que funcione sin internet

## Publicar gratis con GitHub Pages (una sola vez, ~10 min)
1. Crea una cuenta gratuita en https://github.com
2. Botón **New repository**, nombre: `especies`, tipo **Public**, **Create repository**.
3. En el repositorio: **Add file → Upload files**. Arrastra TODOS los archivos de esta carpeta (no la carpeta, los archivos). **Commit changes**.
4. **Settings → Pages**. En *Branch* elige `main` y carpeta `/ (root)`. **Save**.
5. Espera 1–2 minutos. Tu enlace queda así:
   - Recolectores: `https://TU-USUARIO.github.io/especies/`
   - Administrador: `https://TU-USUARIO.github.io/especies/admin.html`

## En cada celular (con señal, una vez)
1. Abrir el enlace en **Chrome** (Android) o **Safari** (iPhone).
2. Llenar nombre y sistema de coordenadas → **Guardar y empezar**.
3. Instalar: Chrome ⋮ → *Agregar a pantalla principal* / Safari Compartir → *Agregar a inicio*.
4. Permitir la ubicación cuando lo pida.
Desde ahí funciona sin internet, abriéndola desde el ícono.

## En campo
- **Tomar GPS** llena X, Y (CTM12 EPSG:9377 o WGS84) y elevación. La elevación del GPS del celular es aproximada; se puede corregir a mano.
- Cada especie queda guardada en el celular al tocar **Guardar especie**.
- Al final del día, con señal: pestaña **Enviar → Compartir CSV** por WhatsApp o correo al administrador.
- No borrar los datos de navegación ni desinstalar el navegador sin exportar antes.

## Administrador
- Abrir `admin.html`, cargar los CSV recibidos (se pueden repetir; los duplicados se ignoran).
- Ver organigrama y avance, descargar CSV o GeoJSON consolidado para QGIS/ArcGIS.
- Sección 4: generar un enlace personalizado por recolector (nombre y coordenadas ya llenos).

## Actualizar la app
Si cambias un archivo, súbelo de nuevo a GitHub y cambia `especies-v1` por `especies-v2` en `sw.js`.
