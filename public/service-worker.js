const CACHE_NAME = 'app-cache-v1';
const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/src/main.jsx', // أو المسار الصحيح لملف React الأساسي
  '/src/App.jsx',  // أو ملف التطبيق الرئيسي
];

// 🟢 تثبيت الـ Service Worker وتخزين الملفات في الكاش
self.addEventListener('install', (event) => {
  // console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log('Service Worker: Caching Files');
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// 🟢 جلب الملفات من الكاش عند فقدان الاتصال
self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Fetching', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// 🟢 تحديث الكاش عند وجود إصدار جديد من Service Worker
self.addEventListener('activate', (event) => {
  // console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            // console.log('Service Worker: Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
