// Section: Freshness Everywhere – Tab Switching
(function () {
  const tabs = document.querySelectorAll('.freshness__tab');
  const panels = document.querySelectorAll('.freshness__panel');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      // Remove active state from all tabs and panels
      tabs.forEach(function (t) { t.classList.remove('freshness__tab--active'); });
      panels.forEach(function (p) { p.classList.remove('freshness__panel--active'); });

      // Activate clicked tab
      tab.classList.add('freshness__tab--active');

      // Show matching panel
      var target = tab.getAttribute('data-tab');
      var panel = document.getElementById('tab-' + target);
      if (panel) { panel.classList.add('freshness__panel--active'); }
    });
  });
})();

// Section: Nav dropdown – keyboard accessibility
(function () {
  var dropdown = document.querySelector('.nav__dropdown');
  if (!dropdown) return;
  var link = dropdown.querySelector('.nav__link');
  var menu = dropdown.querySelector('.nav__dropdown-menu');

  link.addEventListener('focus', function () { menu.style.display = 'block'; });
  dropdown.addEventListener('focusout', function (e) {
    if (!dropdown.contains(e.relatedTarget)) { menu.style.display = ''; }
  });
})();
