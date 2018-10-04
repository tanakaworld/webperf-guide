self.addEventListener('install', event => {
  // cache-key-nameをキーに、キャッシュにリソースを登録する
  const saving = caches.open('cache-key-name').then(cache => {
    return cache.addAll([
      'app.js',
      'app.css',
      'lena.jpg'
    ]);
  });

  event.waitUntil(saving);
});

self.addEventListener('activate', event => {
  // キーがcache-key-name以外のキャッシュを削除する
  const deleting = caches.keys().then(cacheKeys => {
    return Promise.all(
      cacheKeys.map(cacheKey => {
        if (cacheKey !== 'cache-key-name') {
          return caches.delete(cacheKey);
        }
      })
    );
  });

  event.waitUntil(deleting);
});

self.addEventListener('fetch', event => {
  const fetching = caches.open('cache-key-name').then(cache => {
    // キャッシュからリクエストにマッチするものを探す
    return cache.match(event.request).then(response => {
      // 見つかったらそれをレスポンスとして返し
      // 見つからなかったらそのままリクエストする
      return response || fetch(event.request.clone());
    });
  });

  event.respondWith(fetching);
});
