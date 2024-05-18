// app.js

function setBadge() {
   if ('setAppBadge' in navigator) {
       navigator.setAppBadge(10);
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
