(function () {
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

  var copyBtn = document.getElementById('copy-email'), emailEl = document.getElementById('email-val');
  // The address is assembled here so it never appears whole in the page source (keeps scrapers away).
  emailEl.textContent = ['v6m', '1997'].join('') + String.fromCharCode(64) + ['gmail', 'com'].join('.');
  copyBtn.addEventListener('click', function () {
    var text = emailEl.textContent.trim();
    function selectIt() { var r = document.createRange(); r.selectNodeContents(emailEl); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); copyBtn.textContent = 'selected'; }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(text).then(function () { copyBtn.textContent = 'copied'; }, selectIt); } else { selectIt(); }
    setTimeout(function () { copyBtn.textContent = 'copy'; }, 2000);
  });
})();
