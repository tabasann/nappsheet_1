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

self.addEventListener('push', function(event) {
    updateBadge()
});
let currentBadgeValue = 2; // 初期値を設定する

function updateBadge() {
    // バッジの値を更新する処理
    currentBadgeValue += 1;

    if ('setAppBadge' in navigator) {
        navigator.setAppBadge(currentBadgeValue).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    } else if ('setClientBadge' in navigator) {
        navigator.setClientBadge(currentBadgeValue).catch((error) => {
            console.error('Failed to set badge:', error);
        });
    }
}

// ページの読み込みが完了した後、バッジの値を取得する処理などがあればここで行う
