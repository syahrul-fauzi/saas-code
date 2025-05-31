// vitest.setup.ts
// This file can be used to set up global mocks or configurations for Vitest.
// For Next.js, you might need to mock specific modules or global objects.

// Example: Mocking Next.js router if your tests depend on it
// vi.mock('next/router', () => require('next-router-mock'));

// Example: Mocking specific Next.js internal modules if they cause issues
// global.jest = require('jest'); // If you need jest globals for some reason

// Mocking the problematic modules to prevent Vitest from trying to resolve them
// This is a common workaround for issues with Next.js internal modules in Vitest
vi.mock('next/dist/compiled/react-server-dom-webpack/client.browser', () => ({}));
vi.mock('next/dist/compiled/react/jsx-runtime', () => ({}));

// Mock process.env for tests that rely on environment variables
import { vi, beforeAll, afterEach, afterAll } from 'vitest';
import { cleanup } from '@testing-library/react';

const originalEnv = process.env;

beforeAll(() => {
  process.env = {
    ...originalEnv,
    NEXT_PUBLIC_URL: 'http://localhost:3000',
    // Add any other environment variables your tests might need
  };
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  process.env = originalEnv;
});

// You might need to add more mocks here depending on what your components/pages import