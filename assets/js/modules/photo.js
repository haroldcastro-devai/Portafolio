/* Sustituye el marcador de la foto por la imagen configurada. */
(function (App) {
  'use strict';

  App.initPhoto = function () {
    var config = window.SITE_CONFIG || {};
    var src = (config.foto || '').trim();
    var holder = document.getElementById('foto');

    if (!src || !holder) return;

    var image = document.createElement('img');
    image.src = src;
    image.alt = 'Foto de Harold Castro';
    image.width = 104;
    image.height = 104;

    holder.innerHTML = '';
    holder.className = 'foto ok';
    holder.removeAttribute('role');
    holder.appendChild(image);
  };
})(window.Portfolio);
