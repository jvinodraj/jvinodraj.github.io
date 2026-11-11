(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  function current() {
    return root.dataset.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  if (btn) {
    btn.setAttribute('aria-pressed', current() === 'dark');
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
      btn.setAttribute('aria-pressed', next === 'dark');
    });
  }
  var print = document.getElementById('print-btn');
  if (print) print.addEventListener('click', function () { window.print(); });
  window.addEventListener('beforeprint', function () {
    document.querySelectorAll('details').forEach(function (d) { d.open = true; });
  });
})();
