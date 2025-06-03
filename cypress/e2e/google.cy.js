

    describe("Google Search Test",{ tags: '@smoke' }, () => {
      it("should perform a search on Google", () => {
        // Visit Google
        cy.visit("https://www.google.com");
      });
    })

