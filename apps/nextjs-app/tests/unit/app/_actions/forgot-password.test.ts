import { describe, test, expect, vi } from 'vitest';

// Mock the entire module where authClient is exported
vi.mock('@repo/auth/better-auth/auth-client', () => ({
  authClient: {
    forgetPassword: vi.fn(),
  },
}));

import { authClient } from '@repo/auth/better-auth/auth-client';

import dotenv from "dotenv";
dotenv.config();

// Mock external functions


describe.concurrent('authClient.forgetPassword', () => {
  test('returns error when email does not exist', async () => {
    
    (authClient.forgetPassword as any).mockResolvedValue({ error: "Email doesn't exist!" });

    const response = await authClient.forgetPassword({ email: 'nonexistent@example.com', redirectTo: "/reset-password" });

    expect(response).toEqual({ error: "Email doesn't exist!" });
    expect(authClient.forgetPassword).toHaveBeenCalledWith({ email: 'nonexistent@example.com', redirectTo: "/reset-password" });
  });

  test('sends email when email exists', async () => {
    (authClient.forgetPassword as any).mockResolvedValue({ success: 'Email with Reset Token sent!' });

    const response = await authClient.forgetPassword({ email: 'user@example.com', redirectTo: "/reset-password" });

    expect(response).toEqual({ success: 'Email with Reset Token sent!' });
    expect(authClient.forgetPassword).toHaveBeenCalledWith({ email: 'user@example.com', redirectTo: "/reset-password" });
  });
});
