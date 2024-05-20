// app.js

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
   location.reload(); // サイトを読み込みなおす
}

// app.js

function reload() {
 location.reload(); // サイトを読み込みなおす
};
