const CACHE = 'cropai-v2';
const STATIC = [
  '/',
  '/static/styles.css',
  '/static/script.js',
  '/static/manifest.json',
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(STATIC))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Always pass through: API calls, ping, POST requests
  if (
    e.request.method !== 'GET' ||
    e.request.url.includes('/api/') ||
    e.request.url.includes('/ping') ||
    e.request.url.includes('/health')
  ) return;

  e.respondWith(
    fetch(e.request)
      .then(resp => {
        // Cache successful responses for static assets
        if (resp && resp.status === 200 && resp.type === 'basic') {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      })
      .catch(() => caches.match(e.request))
  );
});