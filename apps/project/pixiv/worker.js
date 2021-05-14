import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';

precacheAndRoute(self.__WB_MANIFEST);

// Image cache
registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
      cacheName: 'image-cache',
      plugins: [
          new ExpirationPlugin({
              maxAgeSeconds: 7 * 24 * 60 * 60,
              maxEntries: 100,
            }),
        ]
    })
);

