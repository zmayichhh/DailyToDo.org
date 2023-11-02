const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  env: {
    url: "https://dailytodo.org",
  },
  e2e: {
    specPattern: "cypress/integration/examples/spec.js",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
