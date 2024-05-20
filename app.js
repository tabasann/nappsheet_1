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
   location.reload(); // サイトを読み込みなおす
}

// app.js

function reload() {
  // OneSignalを初期化するための遅延処理用の配列を作成
  window.OneSignalDeferred = window.OneSignalDeferred || [];

  // OneSignalの初期化を遅延処理の配列に追加
  OneSignalDeferred.push(function(OneSignal) {
    OneSignal.init({
      appId: "bb2950f4-045a-443e-aede-0cdecd0ec239", // あなたのアプリID
      safari_web_id: "web.onesignal.auto.4dbe0dd2-36c1-4474-980b-740086f7dd0e", // Safari用のウェブID
      notifyButton: {
        enable: true, // 通知ボタンを有効にする
      },
    });
  });
}

// ページの読み込みが完了したら reload() を呼び出す
window.onload = function() {
  reload();
};
