/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    VITE_GITHUB_TOKEN: string;
    // Добавьте другие переменные окружения по мере необходимости
  }
}

export {};
