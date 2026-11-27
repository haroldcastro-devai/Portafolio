/* Aparición al scroll y animación de los pasos del flujo en proyectos. */
(function (App) {
  'use strict';

  var REVEAL_SELECTORS = [
    '.hero .w > div',
    '.facts .w > div',
    'main section .w > h2',
    'main section .w > .lead',
    'main section .w > dl',
    '.case',
    '.otros',
    '.svc > div',
    '.tl article',
    '.edu',
    '#contacto .links',
    'footer .w'
  ];

  App.initReveal = function () {
    App.select('.flow').forEach(function (flow) {
      App.select('b', flow).forEach(function (step, index) {
        step.style.setProperty('--k', index);
      });
    });

    var blocks = [];

    REVEAL_SELECTORS.forEach(function (selector) {
      App.select(selector).forEach(function (element) {
        if (blocks.indexOf(element) !== -1) return;
        element.classList.add('reveal');
        blocks.push(element);
      });
    });

    if (!blocks.length) return;

    if (App.reduceMotion) {
      blocks.forEach(function (element) {
        element.classList.add('in');
      });
      return;
    }

    App.observeOnce(blocks, { threshold: 0.14, rootMargin: '0px 0px -7% 0px' }, function (element) {
      element.classList.add('in');
    });
  };
})(window.Portfolio);