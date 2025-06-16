

    describe("Google Search Test", () => {
      it("should perform a search on Google",{ tags: '@smoke' }, () => {
        // Visit Google
        cy.visit("https://www.google.com");
        cy.title().should('eq', 'Google')

     

        // this is for PR
        // this is for dev branch
        // This is for tests



      });
    })

