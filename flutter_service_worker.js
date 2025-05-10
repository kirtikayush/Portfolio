'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f5beb4098178742f0ed2d3cd7863a160",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "80b7f3c2a7bb29c643595523dbc0fc2e",
"/": "80b7f3c2a7bb29c643595523dbc0fc2e",
"main.dart.js": "6cb75fa5b7f545448fb2da473e625a7a",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
".git/config": "b1cdc6a004b4f0ffa4292b29bc980a05",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"assets/images/heart.gif": "38a291a78c4f9570d7ba91d8aa3db4aa",
"assets/images/background2.png": "9070cd9699137f2ffc98a8a991b777c6",
"assets/images/heart2.gif": "153b280e81461162851dec06e485daa7",
"assets/images/titanic.png": "5d732c41fe07ac159d748a42bbdde6d4",
"assets/images/handwave.gif": "f3fc3df204ab2c13aa0cf686dc941f13",
"assets/images/customersegmentation.png": "3b87040c58f7771e41cb505fdc977191",
"assets/images/my_pic2.png": "ecd472c9ca0d007cec2501b86a50c43d",
"assets/images/traffic.png": "5a65d204b15029cff6b80b5f67f34d69",
"assets/images/my_pic.png": "5e07ef4adc83cb40efade111521bc05e",
"assets/AssetManifest.json": "138051e1bc0f91119a7c0a28188d2453",
"assets/NOTICES": "53310e2c782a0a2eea19a3f84cb888f2",
"assets/FontManifest.json": "a14d9f5930384bba499181cd9402381e",
"assets/AssetManifest.bin.json": "5eb07be8f836c862fe86b983f5062f30",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bc2eef8bfd8677673027e46c26b1cf9a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "41e8302cbaf04408585d948a435f4421",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1db6b8aa7085822bdd61f077988334be",
"assets/fonts/playfair/Playfair_144pt-SemiBold.ttf": "93bcca01f632a5d987a967ed71c67cbc",
"assets/fonts/playfair/Playfair_144pt-Light.ttf": "ccb8bc6271dcd89421c76bd1dffc34e2",
"assets/fonts/playfair/Playfair_144pt-MediumItalic.ttf": "17dc421b8012fb0b82bfb258f6497485",
"assets/fonts/playfair/Playfair_144pt-SemiBoldItalic.ttf": "42c30862f27c4657316704c439a8fd2b",
"assets/fonts/playfair/Playfair_144pt-Italic.ttf": "72aad46d6e0004f3e7aedd78e8762049",
"assets/fonts/playfair/Playfair_144pt-ExtraBoldItalic.ttf": "54d4a6ff593fe6ebf5c433b3c19e6846",
"assets/fonts/playfair/Playfair_144pt-BoldItalic.ttf": "0954570eb5262ebc8a4956395745018e",
"assets/fonts/playfair/Playfair_144pt-Medium.ttf": "33097f2684fdea5fc7284571aea4f38c",
"assets/fonts/playfair/Playfair_144pt-Bold.ttf": "12587d146bc5fa2379f7162f7907dc96",
"assets/fonts/playfair/Playfair_144pt-BlackItalic.ttf": "b58bbb640afccc3cc501a6b3706a7105",
"assets/fonts/playfair/Playfair_144pt-Regular.ttf": "ebf7977cebe7475e8dffe43fb5ab1502",
"assets/fonts/playfair/Playfair_144pt-Black.ttf": "77b6613d0a1d632e9f91542fb7f9441e",
"assets/fonts/playfair/Playfair_144pt-LightItalic.ttf": "0b16c36e511e2d464a0cf1f18b36379d",
"assets/fonts/playfair/Playfair_144pt-ExtraBold.ttf": "77cfc81bc71ea57e216d209f1c1eac41",
"assets/fonts/spectral/Spectral-ExtraBold.ttf": "c2d9c8497e0129a3eca21c8fcd872bf1",
"assets/fonts/spectral/Spectral-BoldItalic.ttf": "b1080ef46700d6d02951344d310b006c",
"assets/fonts/spectral/Spectral-MediumItalic.ttf": "b202f158a4a7931d1b444fb785fadb70",
"assets/fonts/spectral/Spectral-Medium.ttf": "bd7b2fbf172698f463734c9f9b0de319",
"assets/fonts/spectral/Spectral-Regular.ttf": "7faec6001a586192378b45f65129650a",
"assets/fonts/spectral/Spectral-ExtraBoldItalic.ttf": "199599649e080e8054bd1eea78b3f2e7",
"assets/fonts/spectral/Spectral-SemiBold.ttf": "482b4c26222e29b2aa4cbad51d9eaeb8",
"assets/fonts/spectral/Spectral-LightItalic.ttf": "d01a9d02908d915549fb5886d5cc058d",
"assets/fonts/spectral/Spectral-Italic.ttf": "2bbd8d844e3a5da1088b51045ed93af6",
"assets/fonts/spectral/Spectral-SemiBoldItalic.ttf": "551e02781e44c230be186242fe9b2369",
"assets/fonts/spectral/Spectral-Bold.ttf": "bf2eb9c68c1435f68690c9ab677fe13f",
"assets/fonts/spectral/Spectral-Light.ttf": "f0543fdd857883bd3c7616a787d928ee",
"assets/fonts/cursive/cursiveRegular.ttf": "8d31107b80c8b0c5a896d4188b733d16",
"assets/fonts/bg/bgExtraLight.ttf": "0e66297d36d7f24484f3ec8a2232d6fc",
"assets/fonts/bg/bgExtraBold.ttf": "5bfb4fa1f8907c768231d97bc27e8df9",
"assets/fonts/bg/bgRegular.ttf": "6586800789b30b19bbaeb349ca5d240a",
"assets/fonts/bg/bgLight.ttf": "a1f1439e622b6998c9b639bbf0a23f01",
"assets/fonts/bg/bgBold.ttf": "2f7de7a336f650f9cee5ed919cc3b003",
"assets/fonts/bg/bgMedium.ttf": "1363130c7bdf956d164cb7e605619849",
"assets/fonts/MaterialIcons-Regular.otf": "ee975661f681023671de94bbfff6dacc",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
