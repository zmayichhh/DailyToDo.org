describe("DailyToDo test cases", () => {
  it("Create a single task for the ToDo list", () => {
    cy.visit("https://dailytodo.org/");
    cy.get('input[type="submit"]').click();
  });

  it("Create a single task for the ToDo list", () => {
    cy.visit("https://dailytodo.org/");
    cy.get('input[type="submit"]').click();
  });
});
