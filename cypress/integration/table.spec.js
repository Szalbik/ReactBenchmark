describe("Main page", function() {
  it("test table", function() {
    cy.server();
    cy.route("GET", "https://jsonplaceholder.typicode.com/posts", "fixture:posts");

    cy.visit("localhost:3000");
    cy.contains("Add 1000 Rows").click();
    cy.get("table tbody tr").should("have.length", 1000);
    cy.contains("Update Rows").click();
    cy.contains("Swap Rows").click();
    cy.contains("Clear Rows").click();
    cy.get("table tbody tr").should("have.length", 0);
  });
});
