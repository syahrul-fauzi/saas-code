import { describe, test, expect, beforeEach, afterEach, vi } from 'vitest';

vi.mock('../../../../lib/helper/appUrl', () => ({
  getAppUrl: vi.fn((path) => {
    const baseUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    const normalizedPath = path.startsWith('/') ? path.slice(1) : path;
    return normalizedPath ? `${normalizedBaseUrl}/${normalizedPath}` : normalizedBaseUrl;
  })
}));

import { getAppUrl } from '../../../../lib/helper/appUrl';

describe('getAppUrl', () => {
  // const originalEnv = process.env;

  beforeEach(() => {
    // vi.resetModules();
    // process.env = { ...originalEnv };
  });

  afterEach(() => {
    // process.env = originalEnv;
    vi.clearAllMocks();
  });

  test('returns correct URL when NEXT_PUBLIC_URL is set', () => {
    process.env.NEXT_PUBLIC_URL = 'https://example.com';

    const url = getAppUrl('dashboard');
    expect(url).toBe('https://example.com/dashboard');
  });

  test('returns localhost URL if NEXT_PUBLIC_URL is missing', () => {
    process.env.NEXT_PUBLIC_URL = '';

    const url = getAppUrl('dashboard');
    expect(url).toBe('http://localhost:3000/dashboard');
  });

  test('handles empty path correctly', () => {
    process.env.NEXT_PUBLIC_URL = 'https://example.com';

    const url = getAppUrl('');
    expect(url).toBe('https://example.com');
  });
});
