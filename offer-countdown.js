(function () {
  const KEY = 'cw_offer_deadline';
  const DURATION_MS = 60 * 1000;

  function getDeadline() {
    try {
      const existing = sessionStorage.getItem(KEY);
      if (existing) return Number(existing);
      const deadline = Date.now() + DURATION_MS;
      sessionStorage.setItem(KEY, String(deadline));
      return deadline;
    } catch {
      return Date.now() + DURATION_MS;
    }
  }

  function format(ms) {
    const total = Math.max(0, Math.ceil(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }

  function tick() {
    const remaining = getDeadline() - Date.now();
    const expired = remaining <= 0;
    const label = format(remaining);
    document.querySelectorAll('[data-offer-countdown]').forEach((el) => {
      el.textContent = label;
      el.classList.toggle('is-expired', expired);
    });
    document.body.classList.toggle('offer-expired', expired);
  }

  tick();
  setInterval(tick, 250);
})();
