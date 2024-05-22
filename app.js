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
}

function reload() {
  window.location.href = "https://tabasann.github.io";
}

function swjs() {
  navigator.serviceWorker.register('sw.js');
}

// OneSignalにメールアドレスを登録
document.getElementById('email-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;

    OneSignal.setExternalUserId(email).then(function() {
        console.log('メールアドレスが登録されました:', email);
    }).catch(function(error) {
        console.error('メールアドレスの登録に失敗しました:', error);
    });
});
