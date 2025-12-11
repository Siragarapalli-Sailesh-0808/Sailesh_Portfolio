/**
 * ThemeToggle Component
 * Button to switch between light and dark themes
 */

import { useTheme } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-icon sun-icon">☀️</div>
        <div className="toggle-icon moon-icon">🌙</div>
        <div className="toggle-thumb"></div>
      </div>
    </button>
  );
};

export default ThemeToggle;
