var CACHE_NAME = '4lbertoc.github.io';
var urlsToCache = [
  '/',
  '/images/DomainToken-Arcane.png',
  '/images/DomainToken-Environment.png',
  '/images/DomainToken-Matter.png',
  '/images/DomainToken-Reality.png',
  '/images/Screenshot-board.png',
  '/images/TTS Thumbnail.jpg',
  '/styles.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});