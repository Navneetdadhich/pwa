self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...");
  event.waitUntil(
    caches.open("pwa-cacher").then((cache) => {
      console.log("Service Worker: Caching Files...");
      return cache.addAll([
        "/",
        "/index.html",
        "/src/index.css",
        "/src/main.jsx",
        "/manifest.json",
        "/icons/count512.png",
        "/icons/countt.png",
        "/icons/count192.png",
        "/icons/count256.png",
        "/icons/count384.png",
        "/icons/count96.png",
        "/icons/count72.png",
        "/screenshots/desktop.png",
        "/screenshots/phone.png",
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
