// app.js

function setBadge() {
   if ('setAppBadge' in navigator) {
       navigator.setAppBadge(20);
   } else {
       console.log('setAppBadge is not supported.');
   }
}

function clearBadge() {
   if ('clearAppBadge' in navigator) {
       navigator.clearAppBadge();
   } else {
       console.log('clearAppBadge is not supported.');
   }
}

function omikuji() {
   setBadge(); // バッジを設定

}

function reset() {
   clearBadge(); // バッジをクリア
}

// app.js

function reload() {
  window.location.href = "https://tabasann.github.io";
  navigator.serviceWorker.register('sw.js');
}
function swjs() {
  navigator.serviceWorker.register('sw.js');
}

// ページが読み込まれた時に Service Worker を登録する
window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
});
