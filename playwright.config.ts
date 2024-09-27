import { defineConfig, devices } from '@playwright/test';

interface PlaywrightConfig {
  testDir: string;
  fullyParallel: boolean;
  forbidOnly: boolean;
  retries: number;
  workers?: number;
  reporter: string;
  use: {
    trace: string;
    browserName: string;
    headless: boolean;
  };
  projects: Array<{
    name: string;
    use: object;
  }>;
}

export default defineConfig<PlaywrightConfig>({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    browserName: 'chromium',
    headless: true
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});