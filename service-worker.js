self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open("pwa-cacher").then((cache) => {
      console.log("Service Worker: Caching Files...");
      return cache.addAll([
        "/",
        "/index.html",
        "/src/index.css",
        "/manifest.json",
        "/src/assets/icon512.png",
        "/src/assets/icon192.png",
        "/src/assets/icon384.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
    console.log("Service Worker: Fetching...", event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        return cachedResponse || fetch(event.request);
      }).catch((error) => {
        console.error("Service Worker: Fetching failed:", error);
        throw error;
      })
    );
});
