import React, { useState, useContext , useEffect} from 'react';
import { requestNotificationPermission } from '../utils/notifications';
import { SanskritContext } from '../context/SanskritContext';


const SettingsPage = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'english');
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(Notification.permission === 'granted');
  const [notificationTimes, setNotificationTimes] = useState(JSON.parse(localStorage.getItem('notificationTimes')) || []);
  const [newNotificationTime, setNewNotificationTime] = useState('');
  const { isSanskrit, toggleSanskrit } = useContext(SanskritContext);

  useEffect(() => {
    // Apply theme
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleAddNotificationTime = () => {
    if (newNotificationTime) {
      const updatedTimes = [...notificationTimes, newNotificationTime];
      setNotificationTimes(updatedTimes);
      localStorage.setItem('notificationTimes', JSON.stringify(updatedTimes));
      setNewNotificationTime('');
    }
  };

  const handleRemoveNotificationTime = (time) => {
    const updatedTimes = notificationTimes.filter((t) => t !== time);
    setNotificationTimes(updatedTimes);
    localStorage.setItem('notificationTimes', JSON.stringify(updatedTimes));
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const handleThemeToggle = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleNotificationPermission = async () => {
    const granted = await requestNotificationPermission();
    setNotificationsEnabled(granted === 'granted');
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      {/* Language Settings */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Language</h2>
        <select
          value={language}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="english">English</option>
          <option value="sanskrit">Sanskrit</option>
        </select>
      </div>

      {/* Theme Settings */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Theme</h2>
        <button
          onClick={handleThemeToggle}
          className={`p-2 rounded ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800 text-white'}`}
        >
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </div>

      {/* Notifications Settings */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Notifications</h2>
        {!notificationsEnabled && (
          <button
            onClick={handleNotificationPermission}
            className="p-2 bg-blue-600 text-white rounded"
          >
            Enable Notifications
          </button>
        )}
        {notificationsEnabled && (
          <>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Notification Times</h3>
              <ul>
                {notificationTimes.map((time) => (
                  <li key={time} className="flex items-center justify-between">
                    <span>{time}</span>
                    <button
                      onClick={() => handleRemoveNotificationTime(time)}
                      className="text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              <input
                type="time"
                value={newNotificationTime}
                onChange={(e) => setNewNotificationTime(e.target.value)}
                className="p-2 border rounded mr-2"
              />
              <button
                onClick={handleAddNotificationTime}
                className="p-2 bg-green-600 text-white rounded"
              >
                Add Time
              </button>
            </div>
          </>
        )}
      </div>

      {/* Install PWA */}
      <div>
        <h2 className="text-2xl font-semibold mb-2">Install App</h2>
        <button
          id="install-button"
          className="p-2 bg-blue-600 text-white rounded"
          onClick={() => alert('Use the browser install option to install the app.')}
        >
          Install App
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;
