// Scroll reveals
(function () {
  var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!els.length) return;
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
  els.forEach(function (el, i) {
    el.style.transitionDelay = (i % 6) * 0.05 + 's';
    io.observe(el);
  });
})();

// Hero split slider
(function () {
  var split = document.querySelector('.split');
  if (!split) return;
  var tint = split.querySelector('.tint');
  var divider = split.querySelector('.divider');
  var knob = split.querySelector('.knob');
  var dragging = false;

  function setPct(pct) {
    pct = Math.min(96, Math.max(4, pct));
    tint.style.clipPath = 'inset(0 0 0 ' + pct + '%)';
    divider.style.left = pct + '%';
    knob.style.left = pct + '%';
  }
  function fromEvent(e) {
    var r = split.getBoundingClientRect();
    setPct(((e.clientX - r.left) / r.width) * 100);
  }

  split.addEventListener('pointerdown', function (e) { dragging = true; fromEvent(e); });
  window.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    e.preventDefault();
    fromEvent(e);
  });
  window.addEventListener('pointerup', function () { dragging = false; });

  // Keyboard support
  split.setAttribute('tabindex', '0');
  var current = 52;
  split.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { current -= 4; setPct(current); e.preventDefault(); }
    if (e.key === 'ArrowRight') { current += 4; setPct(current); e.preventDefault(); }
  });
})();

// Gallery filters
(function () {
  var buttons = Array.prototype.slice.call(document.querySelectorAll('.filter'));
  if (!buttons.length) return;
  var cards = Array.prototype.slice.call(document.querySelectorAll('.card'));

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var f = btn.getAttribute('data-filter');
      buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      cards.forEach(function (c) {
        var match = f === 'all' || c.getAttribute('data-category') === f;
        c.style.display = match ? 'flex' : 'none';
      });
    });
  });
})();
