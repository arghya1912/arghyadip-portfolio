'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "396d93ab6021ab7e6c9c238d4d957b08",
".git/config": "53d7cac60c80f7ae0ceb11dfe1d4d2da",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ac53592cf4b55322189cb721cee4e86b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ecb23b31e4a1183ee90c7a5de4c5dac6",
".git/logs/refs/heads/master": "ecb23b31e4a1183ee90c7a5de4c5dac6",
".git/logs/refs/remotes/origin/master": "f87dd9b6269018f159408dcda67e805d",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/0a/935fada516b1e52526abf15e879d2eede8b8fd": "a2be1aa8d46230a1c322cb7be79885c3",
".git/objects/0b/7796ceb3373faf244a7d97c9243f42cdfa2225": "605b5f1233896c7beaa930baed8257e5",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/02d68a59e5e5ed8d2b2980f8118755e8086f52": "93b276bb6b605c9640596b1fba307618",
".git/objects/1d/9d1323297457538e32c8690ecb2ba33a653a97": "9d6acd1855987c9331d1f2548dc2cf9f",
".git/objects/21/0d69a5476d14c183eed791d9d9c200050ccace": "e415da083ea2249101d9f787293b3f1a",
".git/objects/2c/ae5ccdc18eaca8be0990039535bb1ac746b310": "83ff45f5de0a206c21b54a037a54fc2f",
".git/objects/32/45e1c5a5d7f373b7ebfe185c7f6231ceced015": "119e6e79b367f6b9cbf94dbaaec00d04",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/4d2197fe4bb5546b28d076b17ec582af9d2b86": "eaa59a3995697bfebc6be0c1c257a14c",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/dd60b39301d3f368e8cec198da1a20bbfadfde": "544df2cd4a247a2d8332e0610c1baae9",
".git/objects/46/dda9928b3480251668340bdf0536cd7ef2e067": "f2942673d0741be79cd9df881ff4900b",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/9f4140ad497903ab3a9e7682880230f2dbc31f": "7ff575de55c575431e72c2f25305a766",
".git/objects/4e/b4a3c868ff5f9b966f335b96fc443b85cc4b78": "760a09a04475e42ab3dfd730abb8d774",
".git/objects/53/4cd44cacfc1ca2f111823d5359cd77780126c2": "126bc582f43192b77dca9d53fd6d2514",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/fa82d7efa9b67d16a240c4ad16c5b353a9f605": "94dde29df253ab454764303b85004d14",
".git/objects/5c/a34885e1df366e4483f51b442b3d3c2708831c": "75ead723edd53be3cc92749e9b82496c",
".git/objects/65/822348c406cd086b1c15a1876291d64bd36f3a": "68e69583cc963aa9160b0e47b559ebce",
".git/objects/66/ec1bf1c6deac5fe794cdeb3a21d50aa1273e29": "74e3373de1fcf902abceb720d04cf176",
".git/objects/68/3e562ce228f9607e9c974b322962956a2912fd": "b5061916b4a5b0bad440621dcce954bf",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/607479c5cef0c81c8a363c195ac2910f519574": "50ec11d479ca8a7beecb27967a5423ee",
".git/objects/72/4bfe8d58524d2e0bbe0b26bafa632c368b3ec0": "8df84e698e31c6d9bee98359d735968c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/cfa9340c38c22ab53760dbd567b0fd238ddf82": "9881be19d5255443f3144df387f8a170",
".git/objects/7f/d633c2118f1430ccafdb83503fe8824e03fb5f": "89a4f599d542ed04f3b18c0b2279b9da",
".git/objects/83/7993e27b2e563da88f1a92e671fdc291feda2e": "696d00a92bad082b97ea0d2dff445c16",
".git/objects/84/2b787a2354939e875ff17eb1c372370d0c28c4": "a92dfb71615bb3420578acd929127d04",
".git/objects/85/e5ac9c8458c048c4f8c814769254089b10354b": "5dba2d27a33d6d639516045cd9a7d982",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/9d/c79ff128fff31191ca3bcecf4a614b708d2992": "c57566b52341b3d7cfc678568273e7a6",
".git/objects/9e/da0235b8c38c3d32b159073c61f697b75c8292": "4946002c9d3262fe687248ef9937faf0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/cb98458d3fed65d01bec64d878411f90ab8117": "31d6703f5c199f7025f10989cb96340c",
".git/objects/a9/348887c4af19de81915b3c05dc54f205b60919": "97347a62d9d00ce9815d2e50054cea62",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/ad/44d43c2ff6133178434e701e41014e3bccca34": "15674227cc02c317203e1f8810d5edae",
".git/objects/b4/e69f9d47ffafecbce08e577a979567f62632b9": "725b40fc42c57c0de05d052badbe7d2f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/14044682ea161d73a41d0ed5b590c5d3784332": "fb148e881b54db49ec7f05e2c32fd978",
".git/objects/b9/20b3cccada9f8e7111e35a72021611244b59ea": "778d9f4feedf90eb65a76984ee9be698",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/621ab373c84d5079019a3e5a5e155e2846c333": "793a5f2ffb97080404d430d93d86fcff",
".git/objects/d4/783cec86cee53eb626e1a09be74d12f81fddd5": "ae5cf52a5f4507f090ece995915f8068",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bb163fabdad4da4e3938dc7a5547c0d2bbc6f5": "e9a11886c98668c16f87c0110994823f",
".git/objects/e1/f1f6c23c749c1b30fc26254f92d8cd15d31dec": "e01a070b07216957c5dbe0aeaadbc00f",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fa/9cdcc765d6db591daa80b8a03ad588f7c5d355": "86427449c21f10161ea8f3b732ce9bc4",
".git/objects/ff/26eeb5e30ae553d761944cc8d4ce8bc3602c3a": "f45e16425e910a89ed21e90fc7a0e60d",
".git/refs/heads/master": "c7174f10a8a1099fed754e56fb1f3311",
".git/refs/remotes/origin/master": "c7174f10a8a1099fed754e56fb1f3311",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "1514f844f8f950be2524e64d78cb7246",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b50b99495f70a6866dc5efb91aa456ff",
"/": "b50b99495f70a6866dc5efb91aa456ff",
"main.dart.js": "440eb0beed60cce3afbb2c8ea59f1377",
"manifest.json": "a25697d20e2fae72eb063bc4d26b1e9d",
"version.json": "b00d72a847632953c91e7e091270d0c6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
