var CACHE_NAME = 'pwa-sample-caches';
var urlsToCache = [
    'mako5656.github.io/pwa/',
    'mako5656.github.io/pwa/app.js',
];

self.addEventListener('install', function(event) {
    event.waitUntil(caches
        .open(CACHE_NAME)
        .then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(caches
        .match(event.request)
        .then(function(response) {
            return response ? response : fetch(event.request);
        })
    );
});

self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    badge: 5 // 数字を指定
  };

  event.waitUntil(
    self.registration.showNotification('プッシュ通知', options)
  );
});

