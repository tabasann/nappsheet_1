var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    'tabasann.github.io',
    'tabasann.github.io/app.js',
];

/*self.addEventListener('install', function(event) {
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
});*/
self.addEventListener('push', function(event) {
    const options = {
        body: 'a', // 通知の内容を 'a' に設定
    };
    event.waitUntil(
        new Promise(resolve => {
            setTimeout(() => {
                self.registration.showNotification('通知のタイトル', options);
                resolve();
            }, 5000);
        })
    );
});

self.addEventListener('push', function(event) {
    showNotification(event);
    navigator.setAppBadge(1);
    
});


function setBadge(count) {
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(count);
    } else {
        console.log('setAppBadge is not supported.');
    }
}

function showNotification(event) {
    const options = {
        body: event.data ? event.data.text() : 'You have a new notification!',
        icon: 'images/icon-128.png' // アイコンのパスを適宜変更してください
    };
    self.registration.showNotification('New Notification', options);
}
