describe("Quotes app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3001");
  });
  const nameInput = () => cy.get('input[name="username"]');
  const emailInput = () => cy.get('input[name="email"]');
  const passwordInput = () => cy.get('input[name="password"]');
  const termsofserviceInput = () => cy.get('input[type="checkbox"]');
  const submitButton = () => cy.get(".submit1");
  it("is name input working", () => {
    nameInput()
      .should("exist")
      .should("have.value", "")
      .type("inserted a name");
  });
  it("Email input is working", () => {
    emailInput()
      .should("exist")
      .should("have.value", "")
      .type("daniel.wright1207@gmail.com");
  });
  it("Password input is working", () => {
    passwordInput()
      .should("exist")
      .should("have.value", "")
      .type("password is password");
  });
  it("terms of service checkbox is working", () => {
    termsofserviceInput().not("be.checked").check();
  });
  it("Do errors show up? ", () => {
    nameInput().type("1");
    emailInput().type("Not_an_email");
    passwordInput().type("1");
    termsofserviceInput().check().uncheck();
  });
  it("can it submit???", () => {
    nameInput().type("inserted a name");
    emailInput().type("daniel.wright1207@gmail.com");
    passwordInput().type("password is password");
    termsofserviceInput().check().should("be.checked");
    submitButton().click();
  });
});
