# Portafolio — Harold Castro

Sitio estático de una sola página. El HTML solo contiene la estructura; los
estilos y los scripts viven en `assets/`, separados por responsabilidad.

## Estructura

```
Portafolio/
├── index.html                  Estructura y contenido de la página
└── assets/
    ├── css/
    │   ├── base.css            Variables, reset, tipografía y utilidades
    │   ├── layout.css          Cabecera, hero, cifras, contacto y pie
    │   ├── components.css      Botones, tarjetas, flujos, servicios, timeline, video y foto
    │   └── responsive.css      Media queries y preferencias de movimiento
    ├── js/
    │   ├── config.js           Ajustes editables (foto y videos)
    │   ├── core.js             Utilidades compartidas por los módulos
    │   ├── js-class.js         Marca el documento como "js" antes de pintar
    │   ├── main.js             Punto de entrada: inicializa los módulos
    │   └── modules/
    │       ├── waveform.js     Barras animadas de la onda de voz
    │       ├── photo.js        Foto de perfil desde la configuración
    │       ├── video.js        Reproductores de video y modo vista previa
    │       ├── counters.js     Animación de las cifras
    │       ├── reveal.js       Entrada de los casos y pasos del flujo
    │       └── navigation.js   Resaltado del enlace de la sección visible
    └── img/
        └── favicon.svg         Icono del sitio
```

## Configuración

Todo lo editable está en `assets/js/config.js`:

```js
window.SITE_CONFIG = {
  foto: "assets/img/foto.jpg", // vacío para mostrar el marcador
  videos: {
    voz: "https://youtu.be/XXXXXXXXXXX",
    certificados: "",
    auditoria: ""
  }
};
```

- La foto debe ser cuadrada (mínimo 208 × 208 px). Cópiala en `assets/img/`.
- Los videos aceptan enlaces de YouTube, Vimeo o un archivo `.mp4`.
- Añade `?preview` a la URL para ver los espacios de video aunque estén vacíos.

## Uso

Abre `index.html` directamente en el navegador: los scripts son clásicos y
funcionan también con `file://`. Si prefieres servirlo en local:

```bash
npx serve .
```
