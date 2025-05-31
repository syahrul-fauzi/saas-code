/**
 * API configuration
 * Contains all API-related settings and endpoints
 */

import { URL } from './env';

// API request timeout settings
export const API_TIMEOUTS = {
  DEFAULT: 10000, // 10 seconds
  LONG: 30000, // 30 seconds
  SHORT: 5000, // 5 seconds
};

// API endpoints
export const API_ENDPOINTS = {
  AUTH: {
    SESSION: '/api/auth/get-session',
    SIGN_IN: '/api/auth/sign-in',
    SIGN_UP: '/api/auth/sign-up',
    SIGN_OUT: '/api/auth/sign-out',
    RESET_PASSWORD: '/api/auth/reset-password',
    FORGOT_PASSWORD: '/api/auth/forgot-password',
    VERIFY_EMAIL: '/api/auth/verify-email',
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE: '/api/user/update',
    DELETE: '/api/user/delete',
  },
  PAYMENTS: {
    STRIPE: {
      CHECKOUT: '/api/payments/stripe/checkout',
      PORTAL: '/api/payments/stripe/portal',
      WEBHOOK: '/api/payments/stripe/webhook',
    },
  },
  PUSHER: {
    AUTH: '/api/pusher',
  },
};

// API request configuration
export const API_CONFIG = {
  BASE_URL: URL.BASE,
  HEADERS: {
    'Content-Type': 'application/json',
  },
  CREDENTIALS: 'include' as const,
};

// API error messages
export const API_ERRORS = {
  NETWORK: 'Network error. Please check your connection.',
  TIMEOUT: 'Request timed out. Please try again.',
  SERVER: 'Server error. Please try again later.',
  UNAUTHORIZED: 'Unauthorized. Please sign in.',
  FORBIDDEN: 'Access denied. You do not have permission to access this resource.',
  NOT_FOUND: 'Resource not found.',
  VALIDATION: 'Validation error. Please check your input.',
};