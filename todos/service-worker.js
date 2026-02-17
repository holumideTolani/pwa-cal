
const CACHE_NAME = "calculator-v1";

const FILES_T0_CACHE = [
    "index.html",
    "style.css",
    "script.js",
    "manifest.json"
];


self.addEventListener("install", function (event){
    event.waitUntil(
        catches.open(CACHE_NAME).then(function(cache){
            return cache.addAll(FILES_T0_CACHE);
        })
        
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(
        catches.match(event.request).then(function(response){
            return response || fetch(event.request)
        })
    );
});