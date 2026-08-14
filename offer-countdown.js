(function () {
  const KEY = 'cw_offer_deadline_v2';
  const EXPIRED_KEY = 'cw_offer_expired_event_v2';
  const DURATION_MS = 5 * 60 * 1000;
  const DEFAULT_SUPPORT = 'to reserve';
  let intervalId = null;

  function track(name) {
    if (typeof gtag === 'function') gtag('event', name);
  }

  function setDeadline(fromNow) {
    const deadline = Date.now() + fromNow;
    try {
      sessionStorage.setItem(KEY, String(deadline));
    } catch { /* ignore */ }
    return deadline;
  }

  function getDeadline() {
    try {
      const existing = sessionStorage.getItem(KEY);
      if (existing) return Number(existing);
    } catch { /* ignore */ }
    return setDeadline(DURATION_MS);
  }

  function format(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function applyExpired() {
    document.body.classList.add('offer-expired');
    document.querySelectorAll('[data-offer-countdown]').forEach((el) => {
      el.textContent = '00:00';
      el.classList.add('is-expired');
    });
    document.querySelectorAll('[data-offer-support]').forEach((el) => {
      el.textContent = 'Reservation ended';
    });
    document.querySelectorAll('[data-offer-cta]').forEach((el) => {
      el.textContent = 'Continue';
    });
    try {
      if (!sessionStorage.getItem(EXPIRED_KEY)) {
        sessionStorage.setItem(EXPIRED_KEY, '1');
        track('offer_timer_expired');
      }
    } catch {
      track('offer_timer_expired');
    }
  }

  function restartTimer() {
    try {
      sessionStorage.removeItem(EXPIRED_KEY);
    } catch { /* ignore */ }
    setDeadline(DURATION_MS);
    document.body.classList.remove('offer-expired');
    document.querySelectorAll('[data-offer-countdown]').forEach((el) => {
      el.classList.remove('is-expired');
    });
    document.querySelectorAll('[data-offer-support]').forEach((el) => {
      el.textContent = DEFAULT_SUPPORT;
    });
    document.querySelectorAll('[data-offer-cta]').forEach((el) => {
      el.textContent = el.dataset.offerCtaDefault || 'Start a Project';
    });
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(tick, 250);
    tick();
  }

  function tick() {
    const remaining = getDeadline() - Date.now();
    if (remaining <= 0) {
      applyExpired();
      if (intervalId) clearInterval(intervalId);
      return;
    }
    const label = format(remaining);
    document.querySelectorAll('[data-offer-countdown]').forEach((el) => {
      el.textContent = label;
    });
  }

  tick();
  intervalId = setInterval(tick, 250);

  document.querySelectorAll('[data-offer-cta]').forEach((el) => {
    el.dataset.offerCtaDefault = el.textContent.trim();
    el.addEventListener('click', () => {
      track('offer_cta_click');
      if (document.body.classList.contains('offer-expired') || el.textContent.trim() === 'Continue') {
        restartTimer();
      }
    });
  });

  document.querySelectorAll('[data-offer-restart]').forEach((el) => {
    el.addEventListener('click', () => {
      restartTimer();
    });
  });

  if (document.querySelector('.offer-panel')) {
    track('offer_hero_view');
  }
})();
