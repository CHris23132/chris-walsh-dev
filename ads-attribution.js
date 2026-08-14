(function () {
  const ATTR_KEY = 'cw_ad_attribution';
  const PARAMS = ['gclid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

  function readStored() {
    try {
      return JSON.parse(sessionStorage.getItem(ATTR_KEY) || '{}') || {};
    } catch (error) {
      return {};
    }
  }

  function captureAttribution() {
    const stored = readStored();
    const params = new URLSearchParams(window.location.search);
    let changed = false;

    PARAMS.forEach((key) => {
      const value = params.get(key);
      if (value) {
        stored[key] = value;
        changed = true;
      }
    });

    if (!stored.landingPage) {
      stored.landingPage = window.location.pathname + window.location.search;
      changed = true;
    }

    if (!stored.referrer && document.referrer) {
      stored.referrer = document.referrer;
      changed = true;
    }

    if (changed) {
      sessionStorage.setItem(ATTR_KEY, JSON.stringify(stored));
    }
  }

  window.getAdAttribution = function () {
    return readStored();
  };

  captureAttribution();
})();
