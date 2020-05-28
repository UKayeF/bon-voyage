self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('complete').then(function (cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/index.html?homescreen=1',
        '/?homescreen=1',
        '/images/pathfinder.jpg',
        '/scripts/bootstrap.min.js',
        '/scripts/bvConfig.js',
        '/scripts/jquery.min.js',
        '/scripts/ogsim.js',
        '/sprites/resource-sprites.png',
        '/sprites/spritesheet.jpg',
        '/styles/app.css',
        '/styles/bootstrap.borrowed.css',
        '/styles/bootstrap.min.css',
        '/styles/cyborg.css',
        '/styles/sprites.css',
        '/bundle.js',
        '/manifest.json',
      ]);
    }),
  );
});

self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(
      res => res || fetch(evt.request),
    ),
  )
})
