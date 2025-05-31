/**
 * External services configuration
 * Contains all third-party service configurations
 */

import { PUSHER, AI, EMAIL, STORAGE, PAYMENT, ANALYTICS } from './env';
import { API_ENDPOINTS } from './api';

// Pusher configuration
export const PUSHER_CONFIG = {
  SERVER: {
    APP_ID: PUSHER.APP_ID,
    KEY: PUSHER.KEY,
    SECRET: PUSHER.SECRET,
    CLUSTER: PUSHER.CLUSTER,
    USE_TLS: true,
  },
  CLIENT: {
    KEY: PUSHER.KEY,
    CLUSTER: PUSHER.CLUSTER,
    CHANNEL_AUTHORIZATION: {
      ENDPOINT: API_ENDPOINTS.PUSHER.AUTH,
      TRANSPORT: 'ajax',
    },
  },
  CHANNELS: {
    USER_NOTIFICATIONS: (userId: string) => `private-user-${userId}-notifications`,
    GLOBAL_ANNOUNCEMENTS: 'global-announcements',
  },
  EVENTS: {
    NEW_NOTIFICATION: 'new-notification',
    STATUS_UPDATE: 'status-update',
    NEW_MESSAGE: 'new-message',
  },
};

// OpenAI configuration
export const OPENAI_CONFIG = {
  API_KEY: AI.OPENAI_API_KEY,
  DEFAULT_MODEL: 'gpt-4o',
  FALLBACK_MODEL: 'gpt-3.5-turbo',
  MAX_TOKENS: 4000,
  TEMPERATURE: 0.7,
};

// Google AI configuration
export const GOOGLE_AI_CONFIG = {
  API_KEY: AI.GOOGLE_AI_API_KEY,
  DEFAULT_MODEL: 'gemini-pro',
};

// Email service configuration
export const EMAIL_CONFIG = {
  RESEND: {
    API_KEY: EMAIL.RESEND_API_KEY,
    FROM_EMAIL: 'no-reply@bayesian-labs.com',
    FROM_NAME: 'SaaS Forge',
  },
  TEMPLATES: {
    WELCOME: 'welcome',
    PASSWORD_RESET: 'password-reset',
    EMAIL_VERIFICATION: 'email-verification',
    INVOICE: 'invoice',
  },
};

// Storage configuration
export const STORAGE_CONFIG = {
  VERCEL_BLOB: {
    TOKEN: STORAGE.BLOB_READ_WRITE_TOKEN,
  },
  AWS_S3: {
    ACCESS_KEY_ID: STORAGE.AWS.ACCESS_KEY_ID,
    SECRET_ACCESS_KEY: STORAGE.AWS.SECRET_ACCESS_KEY,
    REGION: STORAGE.AWS.REGION,
    BUCKET_NAME: STORAGE.AWS.BUCKET_NAME,
  },
  UPLOAD_LIMITS: {
    IMAGE_MAX_SIZE: 5 * 1024 * 1024, // 5MB
    DOCUMENT_MAX_SIZE: 10 * 1024 * 1024, // 10MB
    ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    ALLOWED_DOCUMENT_TYPES: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  },
};

// Payment service configuration
export const PAYMENT_CONFIG = {
  STRIPE: {
    SECRET_KEY: PAYMENT.STRIPE.SECRET_KEY,
    WEBHOOK_SECRET: PAYMENT.STRIPE.WEBHOOK_SECRET,
    PUBLISHABLE_KEY: PAYMENT.STRIPE.PUBLISHABLE_KEY,
    PAYMENT_METHODS: ['card'],
    CURRENCY: 'usd',
  },
  PLANS: {
    FREE: {
      NAME: 'Free',
      PRICE_ID: '',
      PRICE: 0,
      FEATURES: [
        '20 credits',
        'Basic features',
        'Community support',
      ],
    },
    PRO: {
      NAME: 'Pro',
      PRICE_ID: 'price_pro',
      PRICE: 9.99,
      FEATURES: [
        '100 credits',
        'All basic features',
        'Priority support',
        'Advanced analytics',
      ],
    },
    ENTERPRISE: {
      NAME: 'Enterprise',
      PRICE_ID: 'price_enterprise',
      PRICE: 29.99,
      FEATURES: [
        'Unlimited credits',
        'All pro features',
        'Dedicated support',
        'Custom integrations',
        'Team collaboration',
      ],
    },
  },
};

// Analytics configuration
export const ANALYTICS_CONFIG = {
  GOOGLE_ANALYTICS: {
    MEASUREMENT_ID: ANALYTICS.GOOGLE_ANALYTICS_ID,
    ENABLED: !!ANALYTICS.GOOGLE_ANALYTICS_ID,
  },
  EVENTS: {
    PAGE_VIEW: 'page_view',
    SIGN_UP: 'sign_up',
    SIGN_IN: 'sign_in',
    SUBSCRIPTION: 'subscription',
    FEATURE_USAGE: 'feature_usage',
  },
};