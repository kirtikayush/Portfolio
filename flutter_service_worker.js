'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dac692c4bdb378eada8b1f6be5fa0b6b",
"version.json": "60a71d692c6e6a566ef45d00a046e4e4",
"favicon.ico": "7946354d7fb12ca4561ea4a4ec6cfaf1",
"index.html": "35285067a014f9a5b5482155607c990a",
"/": "35285067a014f9a5b5482155607c990a",
"apple-touch-icon.png": "d14027ebfb8f78732bf66f6b93ddccc8",
"myicons/web-app-manifest-192x192.png": "c470747872925dcbad7e253fb915a82f",
"myicons/web-app-manifest-512x512.png": "efc2f606f6564657e6132ed50093564c",
"main.dart.js": "b3246e5e69d57b9e7dd61fe13813cd38",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon-96x96.png": "7776e063ac210de882d479ae79d17d60",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0fa66319b7dcaea4f04af4b5ded5d2fd",
"assets/images/heart.gif": "38a291a78c4f9570d7ba91d8aa3db4aa",
"assets/images/background2.png": "9070cd9699137f2ffc98a8a991b777c6",
"assets/images/heart2.gif": "153b280e81461162851dec06e485daa7",
"assets/images/titanic.png": "5d732c41fe07ac159d748a42bbdde6d4",
"assets/images/handwave.gif": "f3fc3df204ab2c13aa0cf686dc941f13",
"assets/images/my_pic3.png": "120aae7329071b5c5be743354d914735",
"assets/images/customersegmentation.png": "3b87040c58f7771e41cb505fdc977191",
"assets/images/my_pic2.png": "ecd472c9ca0d007cec2501b86a50c43d",
"assets/images/projectsScreenshot/titanic.png": "97bd953aaab09b92d24c04549f27bf1c",
"assets/images/projectsScreenshot/todo.png": "653e8cda8a2bc683834c4f7dafe68531",
"assets/images/projectsScreenshot/foodigo.png": "aef1db3e614dee1efd459000a1bb9ac2",
"assets/images/projectsScreenshot/weather.png": "c790a17d02d0c697ff17ef0d4024d0c9",
"assets/images/projectsScreenshot/customer.png": "4087cb45c6d5e7b17c9efac64629cceb",
"assets/images/projectsScreenshot/traffic.png": "ae4c06dc7ba9b61258da619664801f77",
"assets/images/traffic.png": "5a65d204b15029cff6b80b5f67f34d69",
"assets/images/mypics/catslep.png": "f298dd30393f574d4d61a0155828b20f",
"assets/images/mypics/legsalbania.png": "de30f13f524b4c0395be0b910e0c8f8f",
"assets/images/mypics/vlore2.png": "f145fa17f322b1d3c78641650f72fa67",
"assets/images/mypics/f1.png": "32605ea7227e393d4ac67afed50896bd",
"assets/images/mypics/sweettooth.png": "676c3776a01981ea0a623fb06f1e2478",
"assets/images/mypics/homies.png": "da05fdc37b1e7fa33f7a75436287b67f",
"assets/images/mypics/painting.png": "e1beb3f2961b92f820ccfe6bf2d810af",
"assets/images/mypics/calbun.png": "2eedbc750a7f7b4d9740bab0ce18d83c",
"assets/images/mypics/albaniacat.png": "4251ecf8c4abe0bc8a1ed226c9f4c17e",
"assets/images/mypics/evening.png": "bbb06fb1b55ba622aaded03a5155c7c6",
"assets/images/mypics/my_pic4.png": "976d2635a98d01c6ffb95e0717c88c13",
"assets/images/mypics/graduation.png": "dc147a4308e7c0ef3cb871dc2b887652",
"assets/images/mypics/badmintion.png": "bb822022d2da14fc1f0a114cb3ddde4a",
"assets/images/mypics/smh.png": "da128319b6612e707e63e560f383b525",
"assets/images/mypics/albania.png": "38fd2fe6e26fdfa8fb5d7335ce9df90f",
"assets/images/mypics/christmas.png": "52d00acf86124329cc6fa393ded7bc0d",
"assets/images/mypics/uoa.png": "26523a4e8f81355a158ea94dbb1c7e90",
"assets/images/my_pic.png": "5e07ef4adc83cb40efade111521bc05e",
"assets/AssetManifest.json": "455ae12ec2b861523e57e5391ebefe5b",
"assets/NOTICES": "bcab64222a63e5ed141278bf38da1e9f",
"assets/FontManifest.json": "76ed802fa3174c653c2e2ef3faaaf804",
"assets/AssetManifest.bin.json": "98b506e7ef477e2861e8537220aef439",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "faaf6f02ffbba3d000ae30058707e17e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "e9e98cad099de36b742307c0488d9438",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2a763078af91a9ad0b16ff9d01014fe3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fe1417d08aff86ab9ba5c7b9d582045a",
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
"assets/fonts/satoshi/Satoshi-Regular.ttf": "4da5359f3f975b25249e8cfcf142f39e",
"assets/fonts/satoshi/Satoshi-Black.ttf": "f12126e8a8e529e8195c7357dd5ad0c4",
"assets/fonts/satoshi/Satoshi-Italic.ttf": "002093bee822f0b3287ad4bad21e2a9f",
"assets/fonts/satoshi/Satoshi-Bold.ttf": "50eee48d495ab752b3e6b873b1206f10",
"assets/fonts/satoshi/Satoshi-MediumItalic.ttf": "d7e82ee45e48a2a617efa87155b6dc9f",
"assets/fonts/satoshi/Satoshi-Medium.ttf": "7bec814954d059a7e7dae047285eedbc",
"assets/fonts/satoshi/Satoshi-BlackItalic.ttf": "bdec661cb56db4658d0421e0b51441be",
"assets/fonts/satoshi/Satoshi-BoldItalic.ttf": "cbbadbeec8490d033ca192e355d89d9e",
"assets/fonts/satoshi/Satoshi-Light.ttf": "02d43df8e0b9f0acb1d1c6b40aaa5b7e",
"assets/fonts/satoshi/Satoshi-LightItalic.ttf": "055ba8c42d30b81454e272acebb74cab",
"assets/fonts/bg/bgExtraLight.ttf": "0e66297d36d7f24484f3ec8a2232d6fc",
"assets/fonts/bg/bgExtraBold.ttf": "5bfb4fa1f8907c768231d97bc27e8df9",
"assets/fonts/bg/bgRegular.ttf": "6586800789b30b19bbaeb349ca5d240a",
"assets/fonts/bg/bgLight.ttf": "a1f1439e622b6998c9b639bbf0a23f01",
"assets/fonts/bg/bgBold.ttf": "2f7de7a336f650f9cee5ed919cc3b003",
"assets/fonts/bg/bgMedium.ttf": "1363130c7bdf956d164cb7e605619849",
"assets/fonts/MaterialIcons-Regular.otf": "ee975661f681023671de94bbfff6dacc",
"favicon.svg": "2521f65736828c357cccbf3a4cb0df4a",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
