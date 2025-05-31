/**
 * Application configuration
 * Contains all application-specific constants and settings
 */

// Application details
export const APP = {
  TITLE: 'SaaS Forge',
  SITE_NAME: 'SaaS Forge',
  LOGO: 'https://strapi.bayesian-labs.com/uploads/logo_7f3a44668c.png',
  DARK_LOGO: 'https://strapi.bayesian-labs.com/uploads/logo_7f3a44668c.png',
  VERSION: '1.0.0',
  PRODUCT_DETAILS: 'Build your Turborepo Micro SaaS Application effortlessly by keeping and modifying the required components, packages and apps to your project.',
  TAGLINE: 'Best Turborepo Micro SaaS Boilerplate Code',
  SHOW_CREDITS: true,
};

// Company details
export const COMPANY = {
  NAME: 'Bayesian Labs',
  LEGAL_NAME: 'Bayesian Labs (OPC) Private Limited',
  WEBSITE_URL: 'https://boilerplate.bayesian-labs.com',
  COUNTRY: 'India',
  ADDRESS: 'B-2, 2nd Floor, Maruthi Enclave, Domalguda, Himayatnagar, Hyderabad, Telangana, India, 500029',
  CONTACT_NUMBER: '+919666678363',
  SUPPORT_EMAIL: 'support@bayesian-labs.com',
  LAST_UPDATED: '2025-02-02',
};

// Creator details
export const CREATOR = {
  NAME: 'Anoop Karnik',
  LINK: 'https://www.linkedin.com/in/anoopkarnik/',
};

// GitHub repository details
export const GITHUB = {
  USERNAME: 'anoopkarnik',
  REPOSITORY_NAME: 'turborepo-saas-boilerplate-code',
  LINK: 'https://github.com/anoopkarnik/turborepo-saas-boilerplate-code',
};

// Routes configuration
export const ROUTES = {
  PUBLIC: [
    '/landing',
    '/api/workflows',
    '/public',
    '/api/payments/dodo/webhook',
    '/api/payments/stripe/webhook'
  ],
  AUTH: [
    '/sign-in',
    '/sign-up',
    '/error',
    '/forgot-password',
    '/reset-password',
    '/email-verified'
  ],
  API_AUTH_PREFIX: '/api/auth',
};

// CORS configuration
export const CORS = {
  ALLOWED_ORIGINS: [
    'http://localhost:3000', 
    'https://bsamaritan.com',
    'https://bayesian-labs.com'
  ],
  OPTIONS: {
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
};