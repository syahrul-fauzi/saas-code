/**
 * Central configuration module for the application
 * This file exports all configuration modules for easy access
 */

export * from './env';
export * from './app';
export * from './auth';
export * from './api';
export * from './services';
export * from './utils';

// Re-export commonly used configurations for convenience
import { APP, COMPANY, ROUTES } from './app';
import { API_ENDPOINTS, API_CONFIG } from './api';
import { AUTH_PROVIDERS, AUTH_SETTINGS, USER_ROLES } from './auth';
import { PUSHER_CONFIG, PAYMENT_CONFIG } from './services';
import { getAppUrl, isProduction, isDevelopment } from './utils';

// Create a named configuration object
const appConfig = {
  APP,
  COMPANY,
  ROUTES,
  API: {
    ENDPOINTS: API_ENDPOINTS,
    CONFIG: API_CONFIG,
  },
  AUTH: {
    PROVIDERS: AUTH_PROVIDERS,
    SETTINGS: AUTH_SETTINGS,
    ROLES: USER_ROLES,
  },
  SERVICES: {
    PUSHER: PUSHER_CONFIG,
    PAYMENT: PAYMENT_CONFIG,
  },
  UTILS: {
    getAppUrl,
    isProduction,
    isDevelopment,
  },
};

// Default configuration export
export default appConfig;