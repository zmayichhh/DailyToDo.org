/// <reference types="Cypress" />

describe("DailyToDo test cases", () => {
  it("Create a single task for the ToDo list", () => {
    cy.visit("https://dailytodo.org/");
    const task_entry = "a_random_entry";
    cy.get('input[type="submit"]').click();
    cy.get("textarea").type(task_entry);
    cy.get('input[type="submit"]').click();

    //         Assets        //
    //Provjeri broj unosa/redova u tabeli da je jednak broju unosa taskova
    cy.get("tr").find(".text").should("have.length", "1");
    //Provjeri da li je naziva taska u tabeli jednak tasku korisnika
    cy.get("tr").find(".text").contains(task_entry);
  });

  it("Create multiple tasks for the ToDo list", () => {
    cy.visit("https://dailytodo.org/");
    const task_entry1 = "a_random_entry1{enter}";
    const task_entry2 = "a_random_entry2{enter}";
    const task_entry3 = "a_random_entry3";
    cy.get('input[type="submit"]').click();
    cy.get("textarea").type(task_entry1);
    cy.get("textarea").type(task_entry2);
    cy.get("textarea").type(task_entry3);
    cy.get('input[type="submit"]').click();

    //         Assets        //
    //Provjeri broj unosa/redova u tabeli da je jednak broju unosa taskova
    cy.get("tr").find(".text").should("have.length", "3");

    //Selektuj checkmark drugog taska kao završen
    cy.get("tbody .tasktr").each(($el, index, $list) => {
      const tableValue = $el.find(".text").text();
      if (tableValue.includes("a_random_entry2")) {
        cy.wrap($el).find("td:nth-of-type(2)").click();
      }
    });
  });
});

//cy.get("#pitch p").should("have.text", "Daily Todo is a simple tool that lets you to track your daily tasks.");
