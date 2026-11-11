// Same Google Analytics setup as the live site (property G-8DNMPT9Z2Q, random per-browser user_id).
(function () {
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-8DNMPT9Z2Q';
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  function getUserId() {
    var key = 'ga_user_id', id = null;
    try { id = localStorage.getItem(key); } catch (e) {}
    if (!id) {
      id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
      try { localStorage.setItem(key, id); } catch (e) {}
    }
    return id;
  }
  gtag('js', new Date());
  gtag('config', 'G-8DNMPT9Z2Q', { 'user_id': getUserId() });
})();
