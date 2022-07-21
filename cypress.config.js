const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      overwrite: false,
      json: false,
      html: true,
      timestamp: 'dd-mm-yyyy_(HH-MM)',
      reportFilename: "[status]-[datetime]-[name]",
    }
  },
});
