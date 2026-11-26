/* Anima las cifras de la sección de datos al entrar en pantalla. */
(function (App) {
  'use strict';

  var DURATION = 1100;

  function countUp(element) {
    var target = Number(element.dataset.n);
    var start = null;

    function frame(timestamp) {
      start = start || timestamp;
      var progress = Math.min((timestamp - start) / DURATION, 1);
      element.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3)));

      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  App.initCounters = function () {
    var numbers = App.select('[data-n]');
    if (!numbers.length || App.reduceMotion) return;

    numbers.forEach(function (number) {
      number.textContent = '0';
    });

    App.observeOnce(numbers, { threshold: 0.6 }, countUp);
  };
})(window.Portfolio);
