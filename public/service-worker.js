const CACHE_NAME = 'my-gita-cache-v5';
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
];

const gitaChapters = {
  1: 47,
  2: 72,
  3: 43,
  4: 42,
  5: 29,
  6: 47,
  7: 30,
  8: 28,
  9: 34,
  10: 42,
  11: 55,
  12: 20,
  13: 35,
  14: 27,
  15: 20,
  16: 24,
  17: 28,
  18: 78
};



// Pre-cache static assets during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_FILES);
    })
  );
  self.skipWaiting(); // Force the waiting service worker to activate
});

// Clean up old caches during activation
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  event.waitUntil(clients.claim()); // Take control of all clients immediately
  console.log('Service Worker Activated sw js activate()');
});

// Intercept fetch requests for caching
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Cache GET requests
  if (request.method === 'GET') {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request)
          .then((response) => {
            const clonedResponse = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, clonedResponse);
            });
            return response;
          })
          .catch(() => caches.match('/index.html')); // Fallback to index.html for offline mode
      })
    );
  }
});


// // Listen for messages from the main thread to force an update
// self.addEventListener('message', (event) => {
//   if (event.data === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  // Open the specific verse page when the notification is clicked
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});



// Schedule periodic random verse notifications
const sendRandomVerseNotification = async () => {
  try {
    // Select a random chapter and verse number
    const chapterNumber = Math.floor(Math.random() * 18) + 1;
    // Get the number of verses in the selected chapter
    const versesInChapter = gitaChapters[chapterNumber];
    const verseNumber = Math.floor(Math.random() * versesInChapter) + 1; // Assuming chapters have up to 47 verses

    const response = await fetch(`${API_URL}${chapterNumber}/verses/${verseNumber}/`, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9e17dd7387msh4e3da551f03d5bbp1b8162jsnf6f2281cfbf6",
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com"
      },
    });

    if (!response.ok) {
      console.error("Failed to fetch verse for notification");
      return;
    }

    const verseData = await response.json();
    const verseText = verseData.text || "Open Bhagavad Gita Verse";

    // Show the notification with verse text
    self.registration.showNotification("Bhagavad Gita Verse", {
      body: verseText,
      icon: "/favicon.ico",
      data: {
        url: `/verse/${chapterNumber}/${verseNumber}`
      }
    });

  } catch (error) {
    console.error("Error fetching random verse for notification:", error);
  }
};

// Schedule a notification every hour
setInterval(() => {
  sendRandomVerseNotification();
}, 3600000); // 1 hour in milliseconds
// setInterval(() => {
//   sendRandomVerseNotification();
// }, 1000); // 1 hour in milliseconds