// store/themeStore.js
import { create } from 'zustand';

export const useThemeStore = create((set) => ({
  theme: 'dark', // Изначальное значение темы
  setTheme: (newTheme) => {
    set(() => {
      // Обновляем тему в состоянии
      localStorage.setItem('theme', newTheme);
      document.documentElement.classList.toggle('dark-theme', newTheme === 'dark');
      return { theme: newTheme };
    });
  },
  initializeTheme: () => {
    // Инициализация темы при загрузке
    const savedTheme = localStorage.getItem('theme') || 'dark';
    set(() => {
      document.documentElement.classList.toggle('dark-theme', savedTheme === 'dark');
      return { theme: savedTheme };
    });
  },
}));

