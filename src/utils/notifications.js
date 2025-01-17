export const requestNotificationPermission = async () => {
    if ('Notification' in window && navigator.serviceWorker) {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.error('Notification permission denied.');
      }
    }
  };
  
  export const sendNotification = async (title, options) => {
    if (navigator.serviceWorker) {
      const registration = await navigator.serviceWorker.ready;
      registration.showNotification(title, options);
    }
  };
  