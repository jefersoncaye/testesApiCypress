const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://fakerestapi.azurewebsites.net/api/v1/',
    video: false,
    reporter: 'mochawesome',
    reporterOptions: {
      overwrite: true,
      json: true,
      html: false,
      //timestamp: 'dd-mm-yyyy_(HH-MM)',
      reportFilename: "[name]",
      reportDir: "cypress/report/mochawesome-report" 
    }
  },
});
