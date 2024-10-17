describe('Prueba del componente MessageComponent', () => {
    it('Debe cambiar el mensaje al hacer click en el botón', () => {
        // Visita la página principal
        cy.visit('/');

        // Verificar que el mensaje inicial es "Hello from MessageComponent!"
        cy.get('h2').should('have.text', 'Hello from MessageComponent!');

        // Hace click en el botón para cambiar el mensaje
        cy.get('button').contains('Change Message').click();

        // Verifica que el mensaje a cambiado a "Message Changed!"
        cy.get('h2').should('have.text', 'Message Changed!');
    });
});