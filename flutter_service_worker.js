'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "319bffbc05a3f347221f13e492fb589c",
"assets/AssetManifest.smcbin": "f6a09279ac07f3bf8cdc1021862da048",
"assets/assets/images/delete.png": "709d9ae627e1196d5388709a9adc80db",
"assets/assets/images/drawer.png": "87f9f09b3f7782a6d405d9df0ca5031f",
"assets/assets/images/enterAccesilu_fdf.png": "612811efef889fa76252a9c397c8df89",
"assets/assets/images/error.png": "63b92ae5ac331274a55181133928fcfc",
"assets/assets/images/kursIllustration.jpg": "b9d0971c3759fcfec6dabf8d4553a13b",
"assets/assets/images/laxCoin.png": "f0e30899efe3e13e4f6055be7df73415",
"assets/assets/images/laxoutLogo.png": "22d7c09d345465bc31d5d135f928db5c",
"assets/assets/images/Logoohneschrift.png": "42d2229f34aa5219fb254ba6cff78fd7",
"assets/assets/images/mittlerer_Ruecken_illustartion.jpg": "5d35be316e9a28427153c75f4ec570bc",
"assets/assets/images/Nacken_illustration.jpg": "1ddcb0a0cc17e6ed0579d16ed4352691",
"assets/assets/images/noData.png": "2ee88edf1dd99aabdb087e697bedd2f7",
"assets/assets/images/Schulter_illustartion.jpg": "3a3c1e45bd19a1b23f3b3a69bb920538",
"assets/assets/images/tropfen.png": "4e707fab1fec445de96e79123e7eae27",
"assets/assets/images/umfrage.png": "8d4c196ebb6158de41f3c6012d894296",
"assets/assets/images/Unterer_ruecken_illustration.png": "07075167d0a078de643295dadc15e209",
"assets/assets/images/welldone.png": "0760f916dd709a4e1db807ea57ceed87",
"assets/assets/images/wifi.png": "cc569b018910735411440b21ffd40576",
"assets/assets/videos/aufrichtenoberkoerper.mp4": "76d492024c7971acc899ba1dc7fba41b",
"assets/assets/videos/bagger.mp4": "b78183d6ff22992d9db5fee06b0920fe",
"assets/assets/videos/beckenschuakel.mp4": "8cf2d046de1e9b8d82324a2a937798fa",
"assets/assets/videos/brustwirbelsauleLinks.mp4": "34355883c8beca2be00455f787a04a77",
"assets/assets/videos/brustwirbelsauleRechts.mp4": "025437bbb622d15333be6ae329873965",
"assets/assets/videos/credits.mp4": "32a9ec323fb6791074c56466c75c2b0d",
"assets/assets/videos/Halbkreisnackenlinks.mp4": "46782bbdfba580e2995fe2b03d662ec0",
"assets/assets/videos/HalbkreisNackenrechts.mp4": "2cdb4518cce131c052a9899f76f85ff7",
"assets/assets/videos/hundretpercentplantstanding.mp4": "32c23d29741b7eb5ed07f304b10e8fff",
"assets/assets/videos/initanimation.mp4": "4472c93ddb10cf4265e695dc6f623167",
"assets/assets/videos/nackenLinksHinten.mp4": "9478a4b7b31a01b21666a2feee1c014a",
"assets/assets/videos/nackenRechtsHinten.mp4": "ae968d253e9dfdda187baeb7916fe55b",
"assets/assets/videos/plantstanding.mp4": "7c8fecb8acf5bef1c5eaa2ce3f113383",
"assets/assets/videos/Plumpsenrechtslinks.mp4": "9563d2122fd02a453f7855db31d920c7",
"assets/assets/videos/rotationMittlererR.mp4": "a5c963266319ea7c5a4a6fe01961d714",
"assets/assets/videos/schulterdehnung.mp4": "33dd6f6d0c590df39c076b2ecb60a50d",
"assets/assets/videos/schulterdehnungGerade.mp4": "ff5825178c84a5d1b4887c804f1aa208",
"assets/assets/videos/schuterblattkreisen.mp4": "04f91364fcfe0d0f15ffc145413af12f",
"assets/assets/videos/seitlicheDehnunglins.mp4": "cec0235db0e4dcfce31774487f41cb0f",
"assets/assets/videos/seitlicheDehnungm.rechts.mp4": "e046c1ae20f48492a71499c4be68ca72",
"assets/assets/videos/untererRueckenlinks.mp4": "ee9e0e9772b8fecf469813299e7d73cc",
"assets/assets/videos/untererRueckenrechts.mp4": "1a807fe65a4ace15ae706a3c9572f63d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7a417767977d7c21d371fdf4dc401264",
"assets/NOTICES": "2fad31a0fd70f98934781adc3af2e0cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "f29ce259449210c0021d70650097873a",
"canvaskit/canvaskit.wasm": "b821477188b1836443bcc911e4ab6e63",
"canvaskit/chromium/canvaskit.js": "a4552398e7eb819f30a495bad7fef865",
"canvaskit/chromium/canvaskit.wasm": "2adf05d96ca1f771bb50754f60216d18",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "8b6d925f0d0b8d0e2fe245f3c65b17cf",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "07a7e6ac402eda856445177fa60ef8b9",
"/": "07a7e6ac402eda856445177fa60ef8b9",
"main.dart.js": "377f4b75f93c8a465dddf32df4834952",
"manifest.json": "f5d359e47d88c261d88fc4bf8b4f9c75",
"version.json": "993b7901bcc6317ffcba8099adc203d5"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
