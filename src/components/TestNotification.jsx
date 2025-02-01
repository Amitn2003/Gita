import { showNotification } from '../utils/api';

const TestNotification = () => {
  const handleClick = () => {
    showNotification('Test Notification', 'This is a test notification for caching.');
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Show Test Notification
    </button>
  );
};

export default TestNotification;
