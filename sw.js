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
    event.waitUntil(
        self.registration.showNotification('New Message', {
            body: 'You have received a new message.',
            icon: 'path/to/icon.png'
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        self.registration.getNotifications().then(function(notifications) {
            notifications.forEach(function(notification) {
                notification.close();
            });
        })
    );
});
