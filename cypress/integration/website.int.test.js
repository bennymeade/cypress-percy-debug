describe(
  "visual comparison - corporate",
  { tags: ["@site-monitoring", "@visual-comparison-corporate"] },
  () => {
    it("Visual comparison of pages", () => {
      cy.visit("/");
      cy.percySnapshot();
    });
  }
);
