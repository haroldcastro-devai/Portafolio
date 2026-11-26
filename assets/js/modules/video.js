/* Inserta los videos de los proyectos y gestiona la vista previa. */
(function (App) {
  'use strict';

  /* Crea un reproductor (iframe o <video>) a partir de la URL indicada. */
  function createPlayer(url) {
    var player;
    var match;

    if ((match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/))) {
      player = document.createElement('iframe');
      player.src = 'https://www.youtube-nocookie.com/embed/' + match[1] + '?autoplay=1&rel=0';
    } else if ((match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) {
      player = document.createElement('iframe');
      player.src = 'https://player.vimeo.com/video/' + match[1] + '?autoplay=1';
    } else {
      player = document.createElement('video');
      player.src = url;
      player.controls = true;
      player.autoplay = true;
    }

    if (player.tagName === 'IFRAME') {
      player.allow = 'autoplay; fullscreen; picture-in-picture';
      player.allowFullscreen = true;
      player.title = 'Video del proyecto';
    }

    return player;
  }

  /* Muestra el reproductor de cada proyecto que tenga un video configurado. */
  function initProjectVideos() {
    var config = window.SITE_CONFIG || {};
    var videos = config.videos || {};

    App.select('.case[data-v]').forEach(function (card) {
      var url = (videos[card.dataset.v] || '').trim();
      var container = card.querySelector('.vid');

      if (!url || !container) return;

      container.hidden = false;

      function play() {
        container.innerHTML = '';
        container.appendChild(createPlayer(url));
        container.removeAttribute('role');
        container.removeAttribute('tabindex');
      }

      container.addEventListener('click', play);
      container.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          play();
        }
      });
    });
  }

  /* Con ?preview en la URL muestra los huecos de video aunque estén vacíos. */
  function initPreview() {
    if (!/[?&#]preview/.test(location.search + location.hash)) return;

    App.select('.vid').forEach(function (container) {
      if (!container.hidden) return;

      container.hidden = false;

      var label = document.createElement('small');
      label.className = 'vp';
      label.textContent = 'Aquí irá el video de este proyecto';
      container.appendChild(label);
    });

    var banner = document.createElement('div');
    banner.className = 'pvb';
    banner.textContent = 'Vista previa: así se verán los espacios de video';
    document.body.appendChild(banner);
  }

  App.initVideos = function () {
    initProjectVideos();
    initPreview();
  };
})(window.Portfolio);
