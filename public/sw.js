self.addEventListener('install',function(event){
    console.log("[service worker] Installing Service Worker...",event);
});

self.addEventListener('activate',function(event){
    console.log("[service worker] Activating Service Worker...",event);
    return self.clients.claim();
})

self.addEventListener('fetch',function(event){
    console.log("[service worker] Fetching Something...",event);
    event.respondWith(fetch(event.request));
})