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
    let currentBadgeValue = 0; // 現在のバッジ値を格納する変数

    // 現在のバッジ値を取得
    if ('getAppBadge' in navigator) {
        navigator.getAppBadge().then((badge) => {
            currentBadgeValue = badge || 0; // バッジ値が取得できない場合は0として扱う
            updateBadgeValue(currentBadgeValue + 1); // 現在の値に1を足して更新
        }).catch((error) => {
            console.error('Failed to get badge:', error);
        });
    } else if ('getClientBadge' in navigator) {
        navigator.getClientBadge().then((badge) => {
            currentBadgeValue = badge || 0;
            updateBadgeValue(currentBadgeValue + 1);
        }).catch((error) => {
            console.error('Failed to get badge:', error);
        });
    }
}

function updateBadgeValue(newValue) {
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(newValue).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    } else if ('setClientBadge' in navigator) {
        navigator.setClientBadge(newValue).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    }
}



