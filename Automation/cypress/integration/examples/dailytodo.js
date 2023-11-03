/// <reference types="Cypress" />

describe("DailyToDo test cases", () => {
  it("Create a single task for the ToDo list", () => {
    cy.visit(Cypress.env("url"));
    const task_entry = "a_random_entry";
    cy.get('input[type="submit"]').click();
    cy.get("textarea").type(task_entry);
    cy.get('input[type="submit"]').click();

    //Provjeri broj unosa/redova u tabeli da je jednak broju unosa taskova
    cy.get("tr").find(".text").should("have.length", "1");
    //Provjeri da li je naziva taska u tabeli jednak tasku korisnika
    cy.get("tr").find(".text").contains(task_entry);
  });

  it("Create multiple tasks for the ToDo list", () => {
    cy.visit(Cypress.env("url"));
    const task_entry1 = "First entry{enter}";
    const task_entry2 = "Second entry{enter}";
    const task_entry3 = "Third entry";
    cy.get('input[type="submit"]').click();
    cy.get("textarea").type(task_entry1);
    cy.get("textarea").type(task_entry2);
    cy.get("textarea").type(task_entry3);
    cy.get('input[type="submit"]').click();

    //Provjeri broj unosa/redova u tabeli da je jednak broju unosa taskova
    cy.get("tr").find(".text").should("have.length", "3");

    //Selektuj checkmark drugog taska kao završen
    cy.get("tbody .tasktr").each(($el, index, $list) => {
      const tableValue = $el.find(".text").text();
      if (tableValue.includes("Second entry")) {
        cy.wrap($el).find("td:nth-of-type(2)").click();
      }
    });
  });

  it("Start the DailyToDo list but cancel the entry", () => {
    cy.visit(Cypress.env("url"));
    const homeDescription = "Daily Todo is a simple tool";
    cy.get('input[type="submit"]').click();
    cy.get(".red").click();
    //Provjeri da li je naslov prisutan, ako jeste znaci da se nalazimo na pocetnoj stranici (samo je tamo prisutan)
    cy.get("#pitch p").contains(homeDescription);
  });
});
