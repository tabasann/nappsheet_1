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
updateBadge();
});

function updateBadge() {
    // ローカルストレージから現在のバッジの数字を取得
    var currentBadge = localStorage.getItem('badge');
    if (!currentBadge) {
        currentBadge = 0;
    } else {
        currentBadge = parseInt(currentBadge);
    }

    // 現在のバッジの数字に1を加算
    var newBadge = currentBadge + 1;

    // 新しいバッジの数字を保存
    localStorage.setItem('badge', newBadge);

    // バッジを更新
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(newBadge).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    } else if ('setClientBadge' in navigator) {
        navigator.setClientBadge(newBadge).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    }
}
