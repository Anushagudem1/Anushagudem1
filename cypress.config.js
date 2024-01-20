const { defineConfig } = require('cypress')

module.exports = defineConfig({
  video: false,
  env: {
    username: "anushagudem12@gmail.com",
    password: "Anush@12",
    URL: 'https://www.amazon.com/',
  },
  defaultCommandTimeout: 30000,
  viewportWidth: 1920,
  viewportHeight: 1200,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    
    baseUrl: 'https://www.amazon.com/',
    specPattern: 'cypress/e2e/**/*.spec.js',
    experimentalSessionAndOrigin: true,
  },
})