// useAutoTheme.js
import { ref, onMounted, watchEffect } from 'vue';

/**
 * Custom composable to automatically detect the OS theme and apply
 * the 'dark' class to the document element for Tailwind CSS.
 * It does NOT allow for manual theme selection or persistence.
 * @returns {object} currentTheme: a readonly ref ('light' or 'dark').
 */
export function useAutoTheme() {
  // Check the initial OS preference
  const isDarkPreferred = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Reactive state for the current theme, initialized based on OS
  const currentTheme = ref(isDarkPreferred ? 'dark' : 'light');

  // Set up the media query listener once on mount
  onMounted(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    /**
     * Listener function that updates the theme state when the OS preference changes.
     * @param {MediaQueryListEvent} e
     */
    const handleSystemChange = (e) => {
      // Update the reactive state based on the OS change
      currentTheme.value = e.matches ? 'dark' : 'light';
    };

    // Start listening for changes
    mediaQuery.addEventListener('change', handleSystemChange);

    // Cleanup the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  });

  // Side Effect: Watches the `currentTheme` ref and updates the DOM
  watchEffect(() => {
    if (currentTheme.value === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  // Return the current theme (no setter function needed)
  return {
    currentTheme,
  };
}