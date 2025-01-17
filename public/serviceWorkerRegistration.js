export function register() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful:', registration);
  
            // Listen for updates to the service worker
            registration.onupdatefound = () => {
              const installingWorker = registration.installing;
  
              if (installingWorker) {
                installingWorker.onstatechange = () => {
                  if (installingWorker.state === 'installed') {
                    if (navigator.serviceWorker.controller) {
                      // New update available
                      const userConsent = window.confirm(
                        'A new version is available. Reload to update?'
                      );
                      if (userConsent) {
                        window.location.reload();
                      }
                    }
                  }
                };
              }
            };
          })
          .catch((error) => {
            console.error('ServiceWorker registration failed:', error);
          });
      });
    }
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.unregister();
      });
    }
  }
  