/* Animaciones de entrada de los casos y de los pasos del flujo. */
(function (App) {
  'use strict';

  App.initReveal = function () {
    /* Asigna un retraso progresivo a cada paso del flujo. */
    App.select('.flow').forEach(function (flow) {
      App.select('b', flow).forEach(function (step, index) {
        step.style.setProperty('--k', index);
      });
    });

    var cases = App.select('.case');

    if (App.reduceMotion) {
      cases.forEach(function (item) {
        item.classList.add('in');
      });
      return;
    }

    App.observeOnce(cases, { threshold: 0.3 }, function (item) {
      item.classList.add('in');
    });
  };
})(window.Portfolio);
