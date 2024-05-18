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
    if ('setAppBadge' in navigator && 'getAppBadge' in navigator) {
        navigator.getAppBadge().then(function(currentBadge) {
            var badgeCount = currentBadge ? currentBadge : 0;
            navigator.setAppBadge(badgeCount + 1);
        });
    } else {
        console.log('setAppBadge is not supported.');
    }
}

function showNotification(event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new notification!',
        //icon: 'images/icon-128.png' // アイコンのパスを適宜変更してください
    };
    self.registration.showNotification('New Notification', options);
}
