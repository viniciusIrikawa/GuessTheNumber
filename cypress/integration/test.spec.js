describe('Test E2E Cypress' , () => {
    
    it('Visit the URL', () => {
        cy.visit('http://127.0.0.1:5500/index.html')
    })


    it('Insert the value on input', () => {
        cy.wait(3000)
        cy.get('#input-number').type('120')
    })
    
    it('Click on the button', () => {
        cy.wait(2000)
        cy.get('#btn-send').click();
    })
    
    it('Insert invalid characters', () => {
        cy.wait(2000)
        cy.get('#input-number').type('*/%$#@*&(')
    })
    
})