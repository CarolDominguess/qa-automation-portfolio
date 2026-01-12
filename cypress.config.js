const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.automationpratice.com.br",
    video: true,
    screenshotOnRunFailure: true
  },
});
