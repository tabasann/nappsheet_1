// Service Worker registration
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('my-cache').then(function(cache) {
            return cache.addAll([
                // Add URLs of your site assets to cache for offline access
                '/',
                '/index.html',
                '/manifest.json',
                '/icon.png',
                // Add more URLs as needed
            ]);
        })
    );
});

// Service Worker activation
self.addEventListener('activate', function(event) {
    // Service Worker activated successfully
});

// Listen for push notifications
self.addEventListener('push', function(event) {
    const title = 'Push Notification';
    const options = {
        body: event.data.text(),
        icon: '/icon.png',
        badge: '/icon.png'
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});
