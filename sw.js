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
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener('push', function(event) {
    setBadge();
    showNotification(event);
});

function setBadge() {
   if ('setAppBadge' in navigator) {
       navigator.setAppBadge(200);
   } else {
       console.log('setAppBadge is not supported.');
   }
}

// ページの読み込みが完了した後、バッジの値を取得する処理などがあればここで行う


function showNotification(event) {
    const options = {
        body: event.data ? event.data.text() : '新規通知',
        icon: 'images/icon-128.png' // アイコンのパスを適宜変更してください
    };
    self.registration.showNotification('テスト', options);
}



