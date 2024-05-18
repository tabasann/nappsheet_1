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
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(1).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    } else if ('setClientBadge' in navigator) {
        navigator.setClientBadge(1).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    }
}

