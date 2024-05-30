self.addEventListener('push', function(event) {
    // プッシュ通知のデータを取得
    const pushData = event.data.json();

    // ブラウザの通知を作成
    const options = {
        body: pushData.message, // プッシュ通知のメッセージを表示
        icon: 'icon.png' // 通知に表示するアイコン
    };

    // ブラウザの通知を表示
    event.waitUntil(
        self.registration.showNotification(pushData.title, options)
    );
    navigator.setAppBadge(pushData.title);
});

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

self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request)
    );
});

