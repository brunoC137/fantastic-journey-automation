import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://localhost:3000",

    env: {
      API_URL: process.env.CYPRESS_API_URL || "http://localhost:5000/api",
      TEST_USER_EMAIL: process.env.CYPRESS_TEST_USER_EMAIL || "valllefor@gmail.com",
      TEST_USER_PASSWORD: process.env.CYPRESS_TEST_USER_PASSWORD || "admin"
    },

    specPattern: "cypress/e2e/**/*.cy.ts",
    supportFile: "cypress/support/e2e.ts",
    viewportWidth: 1920,
    viewportHeight: 1080,
    video: true,
    screenshotOnRunFailure: true,
  }
});
