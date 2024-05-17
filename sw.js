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
            return response ? response : fetch(event.request);
        })
    );
});

self.addEventListener('push', function(event) {
    setBadge();
});

self.addEventListener('activate', function(event) {
    clearBadge();
});

function setBadge() {
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(1);
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
