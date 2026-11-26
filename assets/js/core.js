/* Utilidades compartidas por los módulos. */
window.Portfolio = window.Portfolio || {};

(function (App) {
  'use strict';

  /* Devuelve un array con los elementos que coinciden con el selector. */
  App.select = function (selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  };

  /* Indica si el usuario pidió reducir las animaciones. */
  App.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Ejecuta el callback cuando el DOM está listo. */
  App.ready = function (callback) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback);
    } else {
      callback();
    }
  };

  /* Ejecuta callback(elemento) una sola vez, cuando el elemento entra en pantalla. */
  App.observeOnce = function (elements, options, callback) {
    if (!('IntersectionObserver' in window)) {
      elements.forEach(callback);
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        observer.unobserve(entry.target);
        callback(entry.target);
      });
    }, options);

    elements.forEach(function (element) {
      observer.observe(element);
    });
  };
})(window.Portfolio);
