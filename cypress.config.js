const { defineConfig } = require("cypress");

// @ts-nocheck
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       require('@cypress/grep/src/plugin')(config);
      return config;
        
       
     
    },
  },
});
