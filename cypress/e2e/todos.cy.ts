describe('Todos', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.findByRole('textbox', { name: /email/i }).type(Cypress.env('CYPRESS_E2E_USERNAME'));
    cy.findByLabelText(/password/i).type(Cypress.env('CYPRESS_E2E_PASSWORD'));
    cy.findByRole('button', {
      name: /login/i
    }).click();
  });

  it('Should add and delete a todo', () => {
    const task = 'learn something new';
    cy.findByTestId('add-input').type(task);
    cy.findByRole('button', {
      name: /add/i
    }).click();
    cy.findByText(task).should('be.visible');
    cy.findByRole('button', {
      name: /delete/i
    }).click();
    cy.findByText(task).should('not.exist');
  });

  it('Should mark as done', () => {
    const task = 'learn something new';
    cy.findByTestId('add-input').type(task);
    cy.findByRole('button', {
      name: /add/i
    }).click();
    cy.findByText(task).should('be.visible');
    cy.findByRole('checkbox').click();
    cy.findByText(task).invoke('css', 'text-decoration').should('include', 'line-through');
  });

  it('Should mark as done', () => {
    const task = 'learn something new';
    cy.findByTestId('add-input').type(task);
    cy.findByRole('button', {
      name: /add/i
    }).click();
    cy.findByText(task).should('be.visible');
    cy.findByRole('checkbox').click();
    cy.findByText(task).invoke('css', 'text-decoration').should('include', 'line-through');
  });

  it('Should edit the task content ', () => {
    const task = 'learn something new';
    const task2 = 'learn everyday';
    cy.findByTestId('add-input').type(task);
    cy.findByRole('button', {
      name: /add/i
    }).click();
    cy.findByText(task).should('be.visible');
    cy.findByRole('button', {
      name: /edit/i
    }).click();
    cy.findByTestId('edit-input').clear().type(task2);
    cy.findByText(/save/i).click();
    cy.findByTestId('edit-input').should('not.exist');
    cy.findByText(task).should('not.exist');
    cy.findByText(task2).should('be.visible');
  });
});
