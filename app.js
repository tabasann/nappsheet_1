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
   navigator.serviceWorker.register('sw.js');
   handleSignupOrLogin();
}

function reload() {
  window.location.href = "https://tabasann.github.io";
}

function swjs() {
  navigator.serviceWorker.register('sw.js');
}

  window.addEventListener('load', function() {
    navigator.serviceWorker.register('sw.js')
  });

 function handleSignupOrLogin() {
      OneSignal.setExternalUserId("testid"); // OneSignalにexternal_idを送信
      console.log("External ID has been set successfully!");
    }
