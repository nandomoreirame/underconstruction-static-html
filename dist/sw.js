importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/javascripts/bundle.6bc235e4.min.js",
    "revision": "e844b1715935676d5c7f65a672ba84b6"
  },
  {
    "url": "assets/javascripts/vendor.6bc235e4.min.js",
    "revision": "3221a143190e5e47874580cac9d26019"
  },
  {
    "url": "assets/stylesheets/bundle.6bc235e4.min.css",
    "revision": "39f6240fdd01e08e8c04803485193a1a"
  },
  {
    "url": "index.html",
    "revision": "45ab5dc18569fb148798ce466c496532"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
