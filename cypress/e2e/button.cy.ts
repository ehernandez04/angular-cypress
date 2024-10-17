describe('Prueba del botón en Angular 18', () => {
    it('Debe cambiar el mensaje al hacer click en el botón', () => {
        // Visitar la página principal
        cy.visit('/');

        // Verificar que el mensaje inicial es "Hello World"
        cy.get('h1').should('have.text', 'Hello World');

        // Hacer click en el botón
        cy.get('button').click();

        // Verificar que el mensaje cambia a "Button Clicked"
        cy.get('h1').should('have.text','Button Clicked!')
    });
});