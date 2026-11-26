/* Punto de entrada: inicializa cada módulo cuando el DOM está listo. */
(function (App) {
  'use strict';

  App.ready(function () {
    App.initWaveforms();
    App.initPhoto();
    App.initVideos();
    App.initCounters();
    App.initReveal();
    App.initNavigation();
  });
})(window.Portfolio);
