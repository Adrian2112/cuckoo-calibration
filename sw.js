/* Cuckoo Clock Calibration — retirement service worker.
   Old versions cached the app aggressively; this one deletes every cache it
   finds and unregisters itself, so every reload after the first fetches fresh
   from the network. Keep updating this file; do not reintroduce caching. */
self.addEventListener("install", () => self.skipWaiting());

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.map(key => caches.delete(key))))
      .then(() => self.clients.claim())
      .then(() => self.registration.unregister())
  );
});
