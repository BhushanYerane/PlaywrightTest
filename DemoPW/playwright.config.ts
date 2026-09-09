import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  outputDir: 'test-results',
  timeout: 60 * 1000,
  expect: { timeout: 10000 },
  fullyParallel: false,
  workers: 1,
  //forbidOnly: !!process.env.CI,
  reporter: [
    ["html", { outputFolder: 'reports/html-report' }],
    ['html', { open: 'always' }],
    ["allure-playwright", { outputFolder: 'reports/allure-results' }]
  ],
  use: {
    baseURL: 'https://demowebshop.tricentis.com',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    colorScheme: 'dark',
    headless: false
  },
  projects: [
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' }
    },
    {
      name: 'edge',
      // use Chromium as a fallback when msedge channel is unavailable on the host
      use: { ...devices['Desktop Chrome'], browserName: 'chromium' }
    }
  ]
});
