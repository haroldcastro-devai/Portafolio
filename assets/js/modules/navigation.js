/* Resalta el enlace de navegación de la sección visible. */
(function (App) {
  'use strict';

  App.initNavigation = function () {
    var links = App.select('nav a');
    var sections = App.select('main section[id]');

    if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;

        links.forEach(function (link) {
          link.classList.toggle('on', link.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) {
      observer.observe(section);
    });
  };
})(window.Portfolio);
