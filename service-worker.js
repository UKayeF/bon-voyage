importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js')

if(workbox) {
  console.log('Yay, workbox loaded!');
  workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
}
else {
  console.log('booo it didnt load');
}
