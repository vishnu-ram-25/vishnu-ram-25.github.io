(function () {
  // Same theme switch as the home page (shares the saved choice)
  var root = document.documentElement, btn = document.getElementById('theme-btn');
  var modes = ['auto', 'light', 'dark'], mode = 'auto';
  try { mode = localStorage.getItem('vrm-theme') || 'auto'; } catch (e) {}
  function apply() {
    if (mode === 'auto') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', mode);
    btn.textContent = 'theme: ' + mode;
  }
  apply();
  btn.addEventListener('click', function () {
    mode = modes[(modes.indexOf(mode) + 1) % modes.length];
    try { localStorage.setItem('vrm-theme', mode); } catch (e) {}
    apply();
  });
  // Show the path the visitor asked for (as text, never as HTML)
  var p = document.getElementById('nf-path');
  if (p) p.textContent = (location.pathname || '/').slice(0, 60);
})();
