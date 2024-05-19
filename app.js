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
   //document.getElementById('playBtn').setAttribute('disabled', 'disabled');
   //document.getElementById('resetBtn').removeAttribute('disabled');
}

function reset() {
   clearBadge(); // バッジをクリア
   //document.getElementById('playBtn').removeAttribute('disabled');
   //document.getElementById('resetBtn').setAttribute('disabled', 'disabled');
}
