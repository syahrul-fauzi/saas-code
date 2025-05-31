/**
 * Authentication configuration
 * Contains all authentication-related settings and providers
 */

import { AUTH } from './env';

// Authentication providers configuration
export const AUTH_PROVIDERS = {
  CREDENTIALS: {
    ENABLED: true,
  },
  GOOGLE: {
    ENABLED: !!AUTH.GOOGLE_CLIENT_ID && !!AUTH.GOOGLE_CLIENT_SECRET,
    CLIENT_ID: AUTH.GOOGLE_CLIENT_ID,
    CLIENT_SECRET: AUTH.GOOGLE_CLIENT_SECRET,
  },
  GITHUB: {
    ENABLED: !!AUTH.GITHUB_CLIENT_ID && !!AUTH.GITHUB_CLIENT_SECRET,
    CLIENT_ID: AUTH.GITHUB_CLIENT_ID,
    CLIENT_SECRET: AUTH.GITHUB_CLIENT_SECRET,
  },
};

// Authentication settings
export const AUTH_SETTINGS = {
  SESSION_MAX_AGE: 30 * 24 * 60 * 60, // 30 days in seconds
  JWT_MAX_AGE: 60 * 60 * 24 * 30, // 30 days in seconds
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_RESET_TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
  VERIFICATION_TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
};

// User roles and permissions
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
};

// Default user settings
export const DEFAULT_USER = {
  ROLE: USER_ROLES.USER,
  BANNED: false,
  EMAIL_VERIFIED: false,
  ACCESS: 'TRIAL',
  CREDITS_TOTAL: 20,
  CREDITS_USED: 0,
};