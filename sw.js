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
/*self.addEventListener('push', function(event) {
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
});*/

let badgeCount = 0; // バッジのカウントを初期化

self.addEventListener('push', function(event) {
    incrementBadgeCount(); // バッジのカウントをインクリメント

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

function incrementBadgeCount() {
    badgeCount += 1;
    setBadge(badgeCount);
}

function setBadge(count) {
    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(count).catch(err => {
            console.log('Failed to set app badge:', err);
        });
    } else {
        console.log('setAppBadge is not supported.');
    }
}
