/* Genera las barras animadas de los paneles de onda de voz. */
(function (App) {
  'use strict';

  var BARS = 36;

  App.initWaveforms = function () {
    App.select('.wave').forEach(function (wave) {
      for (var i = 0; i < BARS; i++) {
        var bar = document.createElement('span');
        bar.style.setProperty('--i', i);
        bar.style.setProperty('--h', (0.35 + 0.65 * Math.abs(Math.sin(i * 0.55) * Math.cos(i * 0.21))).toFixed(2));
        wave.appendChild(bar);
      }
    });
  };
})(window.Portfolio);
