(function () {
  var root = document.documentElement, btn = document.getElementById('theme');
  try { var saved = localStorage.getItem('theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  if (!btn) return;
  btn.addEventListener('click', function () {
    var dark = root.getAttribute('data-theme') === 'dark' ||
      (root.getAttribute('data-theme') !== 'light' && matchMedia('(prefers-color-scheme: dark)').matches);
    var next = dark ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();
