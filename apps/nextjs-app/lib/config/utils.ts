/**
 * Utility configuration
 * Contains utility functions and helpers for configuration
 */

import { URL } from './env';

/**
 * Constructs a complete URL by combining the base URL with a given path
 * @param path - The path to append to the base URL
 * @returns The complete URL
 */
export function getAppUrl(path: string = ''): string {
  const baseUrl = URL.BASE || 'http://localhost:3000';
  
  // Remove trailing slash from base URL if present
  const normalizedBaseUrl = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;
  
  // Remove leading slash from path if present
  const normalizedPath = path.startsWith('/') 
    ? path.slice(1) 
    : path;
  
  // Combine base URL with path
  return normalizedPath 
    ? `${normalizedBaseUrl}/${normalizedPath}` 
    : normalizedBaseUrl;
}

/**
 * Checks if the current environment is production
 * @returns Boolean indicating if the environment is production
 */
export function isProduction(): boolean {
  return process.env.NODE_ENV === 'production';
}

/**
 * Checks if the current environment is development
 * @returns Boolean indicating if the environment is development
 */
export function isDevelopment(): boolean {
  return process.env.NODE_ENV === 'development';
}

/**
 * Checks if the current environment is test
 * @returns Boolean indicating if the environment is test
 */
export function isTest(): boolean {
  return process.env.NODE_ENV === 'test';
}

/**
 * Safely access environment variables with fallbacks
 * @param key - The environment variable key
 * @param defaultValue - The default value to use if the environment variable is not set
 * @returns The environment variable value or the default value
 */
export function getEnv(key: string, defaultValue: string = ''): string {
  return process.env[key] || defaultValue;
}

/**
 * Safely parses a JSON string from an environment variable
 * @param key - The environment variable key
 * @param defaultValue - The default value to use if parsing fails
 * @returns The parsed JSON object or the default value
 */
export function getJsonEnv<T>(key: string, defaultValue: T): T {
  try {
    const value = process.env[key];
    return value ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(`Error parsing JSON from environment variable ${key}:`, error);
    return defaultValue;
  }
}

/**
 * Safely parses a boolean from an environment variable
 * @param key - The environment variable key
 * @param defaultValue - The default value to use if parsing fails
 * @returns The parsed boolean or the default value
 */
export function getBooleanEnv(key: string, defaultValue: boolean = false): boolean {
  const value = process.env[key];
  if (value === undefined || value === '') return defaultValue;
  return value.toLowerCase() === 'true';
}

/**
 * Safely parses a number from an environment variable
 * @param key - The environment variable key
 * @param defaultValue - The default value to use if parsing fails
 * @returns The parsed number or the default value
 */
export function getNumberEnv(key: string, defaultValue: number = 0): number {
  const value = process.env[key];
  if (value === undefined || value === '') return defaultValue;
  const parsed = Number(value);
  return isNaN(parsed) ? defaultValue : parsed;
}