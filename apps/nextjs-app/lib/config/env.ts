/**
 * Environment variables configuration
 * Provides type-safe access to environment variables with default values
 */

// Helper function to get environment variables with default values
const getEnvVar = (key: string, defaultValue: string = ''): string => {
  const value = process.env[key];
  return value !== undefined ? value : defaultValue;
};

// Application environment
export const ENV = {
  NODE_ENV: getEnvVar('NODE_ENV', 'development'),
  IS_PRODUCTION: getEnvVar('NODE_ENV') === 'production',
  IS_DEVELOPMENT: getEnvVar('NODE_ENV') === 'development',
  IS_TEST: getEnvVar('NODE_ENV') === 'test',
};

// Application URLs
export const URL = {
  BASE: getEnvVar('NEXT_PUBLIC_URL', 'http://localhost:3000'),
  DOCS: getEnvVar('NEXT_PUBLIC_DOCUMENTATION_URL', 'http://localhost:3010'),
  AUTH: getEnvVar('NEXTAUTH_URL', 'http://localhost:3000'),
};

// Authentication settings
export const AUTH = {
  SECRET: getEnvVar('AUTH_SECRET', 'dev-secret-should-be-random-and-long'),
  TRUST_HOST: getEnvVar('AUTH_TRUST_HOST', 'true') === 'true',
  GOOGLE_CLIENT_ID: getEnvVar('AUTH_GOOGLE_CLIENT_ID'),
  GOOGLE_CLIENT_SECRET: getEnvVar('AUTH_GOOGLE_CLIENT_SECRET'),
  GITHUB_CLIENT_ID: getEnvVar('AUTH_GITHUB_CLIENT_ID'),
  GITHUB_CLIENT_SECRET: getEnvVar('AUTH_GITHUB_CLIENT_SECRET'),
};

// Pusher configuration
export const PUSHER = {
  APP_ID: getEnvVar('PUSHER_APP_ID'),
  KEY: getEnvVar('NEXT_PUBLIC_PUSHER_APP_KEY'),
  SECRET: getEnvVar('PUSHER_SECRET'),
  CLUSTER: getEnvVar('NEXT_PUBLIC_PUSHER_APP_CLUSTER', 'eu'),
};

// Database configuration
export const DATABASE = {
  URL_POSTGRES: getEnvVar('DATABASE_URL_POSTGRES'),
};

// AI services configuration
export const AI = {
  OPENAI_API_KEY: getEnvVar('OPENAI_API_KEY'),
  GOOGLE_AI_API_KEY: getEnvVar('GOOGLE_AI_API_KEY'),
};

// Email service configuration
export const EMAIL = {
  RESEND_API_KEY: getEnvVar('RESEND_API_KEY'),
};

// Storage configuration
export const STORAGE = {
  BLOB_READ_WRITE_TOKEN: getEnvVar('BLOB_READ_WRITE_TOKEN'),
  AWS: {
    ACCESS_KEY_ID: getEnvVar('AWS_ACCESS_KEY_ID'),
    SECRET_ACCESS_KEY: getEnvVar('AWS_SECRET_ACCESS_KEY'),
    REGION: getEnvVar('AWS_REGION'),
    BUCKET_NAME: getEnvVar('AWS_BUCKET_NAME'),
  },
};

// Payment services configuration
export const PAYMENT = {
  STRIPE: {
    SECRET_KEY: getEnvVar('STRIPE_SECRET_KEY'),
    WEBHOOK_SECRET: getEnvVar('STRIPE_WEBHOOK_SECRET'),
    PUBLISHABLE_KEY: getEnvVar('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY'),
  },
};

// Analytics configuration
export const ANALYTICS = {
  GOOGLE_ANALYTICS_ID: getEnvVar('NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID'),
};