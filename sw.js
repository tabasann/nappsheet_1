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
    navigator.setAppBadge(300);
    showNotification(event);
});

self.addEventListener('push', function(event) {
    //incrementBadgeCount();
    //showNotification(event);
});

function incrementBadgeCount() {
    getBadgeCount().then(currentCount => {
        const newCount = currentCount + 1;
        setBadge(newCount);
        saveBadgeCount(newCount);
    });
}

function getBadgeCount() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('badgeDB', 1);

        request.onerror = (event) => {
            console.error('Database error:', event.target.errorCode);
            resolve(0);
        };

        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction(['badgeStore'], 'readonly');
            const objectStore = transaction.objectStore('badgeStore');
            const getRequest = objectStore.get('badgeCount');

            getRequest.onsuccess = () => {
                resolve(getRequest.result?.count || 0);
            };

            getRequest.onerror = () => {
                console.error('Failed to get badge count');
                resolve(0);
            };
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            const objectStore = db.createObjectStore('badgeStore', { keyPath: 'id' });
            objectStore.transaction.oncomplete = () => {
                const transaction = db.transaction(['badgeStore'], 'readwrite');
                transaction.objectStore('badgeStore').add({ id: 'badgeCount', count: 0 });
            };
        };
    });
}

function saveBadgeCount(count) {
    const request = indexedDB.open('badgeDB', 1);

    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(['badgeStore'], 'readwrite');
        transaction.objectStore('badgeStore').put({ id: 'badgeCount', count: count });
    };
}

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
