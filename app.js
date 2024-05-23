// app.js

async function registerUser() {
    const username = document.getElementById('username').value;

    const user = await OneSignal.createUserAsync('bb2950f4-045a-443e-aede-0cdecd0ec239', {
        properties: {
            tags: {
                username: username,
            },
            language: 'en',
            timezone_id: Intl.DateTimeFormat().resolvedOptions().timeZone,
            lat: 0,
            long: 0,
            country: 'US',
            first_active: Date.now(),
            last_active: Date.now(),
            amount_spent: 0,
            purchases: [],
            ip: 'string',
        },
        identity: {},
        subscriptions: [
            {
                id: 'string',
                type: 'webPush',
                token: 'string',
                enabled: true,
                notification_types: 1,
                session_time: 0,
                session_count: 0,
                sdk: 'web',
                device_model: navigator.userAgent,
                device_os: navigator.platform,
                rooted: false,
                test_type: 0,
                app_version: '1.0',
                net_type: 1,
                carrier: 'none',
                web_auth: 'string',
                web_p256: 'string',
            },
        ],
        subscription_options: {
            retain_previous_owner: true,
        },
    });

    console.log('User registered:', user);
}

function setBadge() {
   if ('setAppBadge' in navigator) {
       navigator.setAppBadge(20);
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

function omikuji() {
   setBadge(); // バッジを設定
}

function reset() {
   clearBadge(); // バッジをクリア
   navigator.serviceWorker.register('sw.js');
}

function reload() {
  window.location.href = "https://tabasann.github.io";
}

function swjs() {
  navigator.serviceWorker.register('sw.js');
}
