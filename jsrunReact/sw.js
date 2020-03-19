self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('jsrunReact-store').then(function(cache) {
     return cache.addAll([
       '/jsrunReact/',
       '/jsrunReact/index.html',
       '/jsrunReact/index.js',
       '/jsrunReact/images/pirate_PNG90.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
