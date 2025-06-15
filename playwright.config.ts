import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 0,
  fullyParallel: false,
  workers: 1,

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    headless: false,
    viewport: null,
    screenshot: 'only-on-failure',
    trace: 'on',
  },

  reporter: 'html',

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        deviceScaleFactor: undefined,
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});