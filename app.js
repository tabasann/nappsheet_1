// app.js
function clearBadge() {
   if ('clearAppBadge' in navigator) {
       navigator.clearAppBadge();
   } else {
       console.log('clearAppBadge is not supported.');
   }
}

function reset() {
   clearBadge(); // バッジをクリア
   navigator.serviceWorker.register('sw.js');
}

function refresh() {
  navigator.serviceWorker.register('sw.js');
}

function appsheet() {
  navigator.serviceWorker.register('sw.js');
  window.location.href = "https://www.google.co.jp/";
}

function load() {
  window.location.href = "https://tabasann.github.io/";
}
    
