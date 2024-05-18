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
    let currentBadgeValue = 0; // 現在のバッジの値を取得する必要がある場合、ここにその方法を追加する必要があります

    if ('setAppBadge' in navigator) {
        currentBadgeValue += 1; // 現在のバッジの値に1を加える
        navigator.setAppBadge(currentBadgeValue).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    } else if ('setClientBadge' in navigator) {
        currentBadgeValue += 1; // 現在のバッジの値に1を加える
        navigator.setClientBadge(currentBadgeValue).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    }
}


