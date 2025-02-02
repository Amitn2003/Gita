const CACHE_NAME = 'my-gita-cache-v6';
const API_URL = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  'gitaicon.png',
  'gita-110.png',
  'gita2.png',
  'gita-112.png',
  'gita-126.png',
  'book.png',
  'delete.png',
  'gita-136.png',
  'gita-139.png',
  'gita-theme-image.jpg',
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
      return cache.addAll(STATIC_FILES).then(() => {
        console.log('Static assets cached successfully.');
      });
    })
  );
  self.skipWaiting(); // Force the waiting service worker to activate immediately
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
          // Return cached response if found
          return cachedResponse;
        }

        // Fetch from network if not in cache
        return fetch(request)
          .then((response) => {
            // Only cache GET requests for API responses or static assets
            if (request.url.startsWith(API_URL) || STATIC_FILES.includes(new URL(request.url).pathname)) {
              const clonedResponse = response.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, clonedResponse);
              });
            }
            return response;
          })
          .catch(() => caches.match('/index.html')); // Fallback to index.html for offline mode
      })
    );
  }
});

// self.addEventListener('fetch', (event) => {
//   const { request } = event;

//   // Cache GET requests
//   if (request.method === 'GET') {
//     event.respondWith(
//       caches.match(request).then((cachedResponse) => {
//         if (cachedResponse) {
//           return cachedResponse;
//         }

//         return fetch(request)
//           .then((response) => {
//             const clonedResponse = response.clone();
//             caches.open(CACHE_NAME).then((cache) => {
//               cache.put(request, clonedResponse);
//             });
//             return response;
//           })
//           .catch(() => caches.match('/index.html')); // Fallback to index.html for offline mode
//       })
//     );
//   }
// });


// // Listen for messages from the main thread to force an update
// self.addEventListener('message', (event) => {
//   if (event.data === 'SKIP_WAITING') {
//     self.skipWaiting();
//   }
// });

// Handle notification click events
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
// Ensure the URL is correctly set for the PWA to open
const notificationUrl = event.notification.data.url;

if (event.action === 'openVerse') {
  // Open the specific verse page when the "Read Verse" button is clicked
  event.waitUntil(clients.openWindow(notificationUrl));
} else if (event.action === 'dismiss') {
  // If "Dismiss" is clicked, do nothing or perform custom action
  console.log("Notification dismissed.");
} else {
  // Default action when the notification is clicked (e.g., open the verse)
  event.waitUntil(clients.openWindow(notificationUrl));
}
});



// Schedule periodic random verse notifications
const sendRandomVerseNotification = async () => {
  console.log("Sending random verse notification...");
  try {
    // Check if there is already an active notification with the same tag
    const existingNotifications = await self.registration.getNotifications();
    
    // If there is an existing notification with the same tag, don't send a new one
    if (existingNotifications.some(notification => notification.tag === "bhagavad-gita-verse-notification")) {
      console.log("An existing notification is still active. Not sending a new one.");
      return;
    }


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
    // console.log(response)

    if (!response.ok) {
      console.error("Failed to fetch verse for notification");
      return;
    }

    const verseData = await response.json();
    function getFirstEnglishTranslation(verseData) {
      // Check if translations array exists and has elements
      if (verseData.translations && verseData.translations.length > 0) {
        // Find the first translation in English
        const englishTranslation = verseData.translations.find(translation => translation.language.toLowerCase() === 'english');
        if (englishTranslation) {
          return englishTranslation.description; // Return the English translation text
        }
      }
      return null; // Return null if no English translation is found
    }
    
    // Example usage:
    console.log(getFirstEnglishTranslation(verseData));
    


    const verseText = getFirstEnglishTranslation(verseData) || "Open Bhagavad Gita Verse";

    // Show the notification with verse text
    self.registration.showNotification("Bhagavad Gita Verse", {
      body: verseText,
      icon: "https://mygita.vercel.app/gita2.png",
      badge: "https://mygita.vercel.app/gita-110.ico",
      image: "https://mygita.vercel.app/images/gita-139.jpg",  // Optional image to display
      sound: "https://mygita.vercel.app/Notification/shankh_sms.mp3",  // Custom sound for notification
      tag: "bhagavad-gita-verse-notification", // To replace similar notifications
      vibrate: [200, 100, 200], // Vibration pattern for mobile devices 
      renotify: true,  // Allow renotification on repeat notifications
      requireInteraction: false,  // Ensure notification stays visible
      actions: [
        {
          action: "openVerse",
          title: "Read Verse",
          icon: "https://mygita.vercel.app/Notification/book.png" // Action icon
        },
        {
          action: "dismiss",
          title: "Dismiss",
          icon: "https://mygita.vercel.app/Notification/delete.png" // Action icon
        }
      ],
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
// }, 1800000); // 30 minutes in milliseconds
// setInterval(() => {
//   sendRandomVerseNotification();
// }, 600000); // 5 minutes in milliseconds
setInterval(() => {
  sendRandomVerseNotification();
}, 10000); // 5 minutes in milliseconds