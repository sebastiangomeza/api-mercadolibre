describe('my fist cypress test', () => {

    it('first cypress test on a webpage', () => {
        cy.visit('http://localhost:8080/#/Home')
        cy.get('#input-9').type('carro')
        cy.get('.mdi-magnify').click()
        cy.get('div .v-responsive__content:first').click()
    })

}
)