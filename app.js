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

function reset() {
   clearBadge(); // バッジをクリア
   navigator.serviceWorker.register('sw.js');
   //handleSignupOrLogin();
}

function refresh() {
  navigator.serviceWorker.register('sw.js');
}

function load() {
  window.location.href = "https://tabasann.github.io/";
}

// function handleSignupOrLogin() {
//      OneSignal.login("EID");
//    } 
    
