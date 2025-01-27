'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "07be2c645f75b72cf5bc94195ddea33c",
"assets/AssetManifest.bin.json": "c3216c336b7afb81760ac19bc95756ee",
"assets/AssetManifest.json": "6236863eeb269c54e97f4f5189ade7a8",
"assets/assets/images/aboutScene.jpg": "6f5565af217c71a6e86dd7c577da302e",
"assets/assets/images/Comprehensive%2520services.webp": "a7b182bafb6df08c20e742d47f2c4ba9",
"assets/assets/images/Contract%2520Service.webp": "f17a49bf116632463238bddbcd6ae883",
"assets/assets/images/Contract.png": "fb8da93ecc0624331de6daf2d5639958",
"assets/assets/images/Executive%2520search.png": "73a5c4dc5292f0f8165db78134d5bfa3",
"assets/assets/images/Executive%2520service.webp": "ef8c5001a7d82888a5f91e1ff3a6c30a",
"assets/assets/images/homeImage.jpg": "d56bf6710d90b564f8624e1832763c64",
"assets/assets/images/Image%25201%2520-Homepage.jpg": "6251728bde4bd2a1c30d0c38117c04ac",
"assets/assets/images/Image%25203%2520Homepage.jpg": "bdaf600c4c4279c4becca8b10cfdf3af",
"assets/assets/images/Industry%2520experts.webp": "45b1d3d6d1f1b8ca26ed536a17248a8e",
"assets/assets/images/insta-logo.svg": "304fb3151e3b1f86d0150dc8144fcc3c",
"assets/assets/images/lOgO.png": "05b7589b36aeaf0926a7d8ee6eb30d62",
"assets/assets/images/logoLinkedin.svg": "2c20928ddc18c3e2ac70e6f8f38ca825",
"assets/assets/images/meeting.png": "4dae8fe2e339ea903aaa03e8a942af2b",
"assets/assets/images/niche%2520hire.png": "0d29bc46540e01c8bda9ecc41db2ed87",
"assets/assets/images/Niche%2520Service.webp": "fc8f968880b8f28b2cdda390c4b9406b",
"assets/assets/images/Permanent%2520hiring%2520Service.webp": "d7d509dc00583df5476efaa16e33b30f",
"assets/assets/images/Permanent.png": "7844c48b7340fe237deeefc369fc4a34",
"assets/assets/images/Tailored%2520matches.webp": "906bbc84d9da02258fb67b27392b9681",
"assets/assets/images/Talent%2520mapping.png": "c878604786b8305299db27acc2373ee8",
"assets/assets/images/Talent%2520Service.webp": "7ef797652283da89bb215a0093827fb4",
"assets/assets/images/why%2520choose%2520us%2520below-Image.jpg": "e64ae7b2630ab1a030456e57abc9c8bb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "367a34d53e16d56dd3df07c0774d0afc",
"assets/NOTICES": "07828a5bedd9ad094b91693a290bee9c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.ico": "0a5806d015296cb28acea9ed3168ecb5",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "b79d9ad3a72cd9b3babead71aaaf927e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f8062216b48709a9250b67157fa11d4b",
"/": "f8062216b48709a9250b67157fa11d4b",
"main.dart.js": "6dadf4ef91c52bd2caf989ce1d647056",
"manifest.json": "feac0e95fd79b59b4e3c2b6e9c3fc115",
"version.json": "a4c2dc0f156e93c694bac778ca631970"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
