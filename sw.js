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

/*self.addEventListener('push', function(event) {
    updateBadge(); // バッジのカウントをインクリメント

    const options = {
        body: 'a', // 通知の内容を 'a' に設定
    };
    event.waitUntil(
        new Promise(resolve => {
            setTimeout(() => {
                self.registration.showNotification('通知のタイトル2', options);
                resolve();
            }, 1000);
        })
    );
});
// 初期値をローカルストレージから取得する。保存された値がない場合は初期値を使用する
let currentBadgeValue = 0;

function updateBadge() {
    // バッジの値を更新する処理
    currentBadgeValue += 1;

    // 更新したバッジの値をローカルストレージに保存する
    //localStorage.setItem('badgeValue', currentBadgeValue);

    // バッジを設定する処理
    navigator.setAppBadge(currentBadgeValue);
}

// ページの読み込みが完了した後、バッジの値を取得する処理などがあればここで行う
*/

self.addEventListener('push', function(event) {
    // プッシュ通知のデータを取得
    const pushData = event.data.json();

    // ブラウザの通知を作成
    const options = {
        body: pushData.message, // プッシュ通知のメッセージを表示
        icon: 'icon.png' // 通知に表示するアイコン
    };

    // ブラウザの通知を表示
    event.waitUntil(
        self.registration.showNotification(pushData.title, options)
    );

    navigator.setAppBadge(pushData.title);
});


