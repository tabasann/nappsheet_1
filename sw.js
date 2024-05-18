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
});

// 初期値をローカルストレージから取得する。保存された値がない場合は初期値を使用する
let currentBadgeValue = localStorage.getItem('badgeValue') ? parseInt(localStorage.getItem('badgeValue')) : 0;

function setBadge() {
    // バッジの値を更新する処理
    currentBadgeValue += 1;

    // 更新したバッジの値をローカルストレージに保存する
    localStorage.setItem('badgeValue', currentBadgeValue);

    // バッジを設定する処理
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(currentBadgeValue);
   } else {
       console.log('setAppBadge is not supported.');
   }
}



