var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    'tabasann.github.io',
    'tabasann.github.io/app.js',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});
self.addEventListener('install', function(event) {
  event.waitUntil(
    // Onesignal SDKを登録する非同期の処理
    // ここでOnesignalのプッシュ通知を初期化するなどの処理を行います
    self.importScripts('https://cdn.onesignal.com/sdks/OneSignalSDK.js')
    OneSignal.initialize({
    　appId: "bb2950f4-045a-443e-aede-0cdecd0ec239",
      safari_web_id: "web.onesignal.auto.4dbe0dd2-36c1-4474-980b-740086f7dd0e",
      notifyButton: {
        enable: true,
      },
      ...
    });
  );
});
self.addEventListener('fetch', function(event) {
  event.waitUntil(
    // Onesignal SDKを登録する非同期の処理
    // ここでOnesignalのプッシュ通知を初期化するなどの処理を行います
    self.importScripts('https://cdn.onesignal.com/sdks/OneSignalSDK.js')
    OneSignal.initialize({
    　appId: "bb2950f4-045a-443e-aede-0cdecd0ec239",
      safari_web_id: "web.onesignal.auto.4dbe0dd2-36c1-4474-980b-740086f7dd0e",
      notifyButton: {
        enable: true,
      },
      ...
    });
  );
});
self.addEventListener('fetch', function(event) {

    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', function(event) {
    showNotification(event);
    navigator.setAppBadgenavigator.clearAppBadge
    navigator.setAppBadge(300);
    
});


function setBadge(count) {
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(count);
    } else {
        console.log('setAppBadge is not supported.');
    }
}

function showNotification(event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new notification!',
        icon: 'images/icon-128.png' // アイコンのパスを適宜変更してください
    };
    self.registration.showNotification('New Notification', options);
}
self.addEventListener('push', function(event) {
  event.waitUntil(
    // プッシュ通知のデータを取得
    var payload = event.data.json();
    // プッシュ通知の処理を行う
    // 例えば通知を表示したり、特定のアクションを実行したりする処理をここに書きます
    self.registration.showNotification(payload.title, {
      body: payload.body,
      ...
    });
  );
});
