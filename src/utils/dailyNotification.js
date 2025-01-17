import { getDailyVerse } from './dailyVerse';
import { sendNotification } from './notifications';

export const scheduleDailyNotifications = () => {
  const notificationTimes = JSON.parse(localStorage.getItem('notificationTimes')) || [];

  notificationTimes.forEach((time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const now = new Date();
    const targetTime = new Date();

    targetTime.setHours(hours, minutes, 0, 0);
    if (now > targetTime) {
      targetTime.setDate(targetTime.getDate() + 1); // Schedule for the next day
    }

    const delay = targetTime.getTime() - now.getTime();

    setTimeout(() => {
      const dailyVerse = getDailyVerse();
      const title = `Verse: Chapter ${dailyVerse.chapter}, Verse ${dailyVerse.verse}`;
      const options = {
        body: 'Click to view the verse!',
        icon: '/icon-192x192.png',
      };

      sendNotification(title, options);
    }, delay);
  });
};
