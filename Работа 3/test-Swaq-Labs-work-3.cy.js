describe('example to-do app', () => {
    it('Захожу на сайт', () =>{
        beforeEach(() =>{
            cy.visit('https://www.saucedemo.com')
        })
    })
    it('Захожу в аккаунт', () =>{
        const username = 'standard_user'
        const password = 'secret_sauce' 

        cy.get('[id=user-name]').type(`${username}`)
        cy.get('[id=password]').type(`${password}{enter}`)
        cy.get('[class=title]').should('have.text', 'Products')
    })
    it('Проверка сортировки', () =>{
        const username = 'standard_user'
        const password = 'secret_sauce' 

        cy.get('[id=user-name]').type(`${username}`)
        cy.get('[id=password]').type(`${password}{enter}`)

       // Sort from low to high
       cy.get('[class=product_sort_container]').select('lohi');
       // Get prices and compare
       cy.get('.inventory_list .inventory_item_price')
           .then(prices => {
               const lowPrice = parseFloat(prices.first().text().replace('$', ''));
               const highPrice = parseFloat(prices.last().text().replace('$', ''));
               expect(lowPrice).to.be.lessThan(highPrice);
           });
       // Sort from high to low
       cy.get('[class=product_sort_container]').select('hilo');
       // Get prices and compare again
       cy.get('.inventory_list .inventory_item_price')
           .then(prices => {
               const lowPrice = parseFloat(prices.last().text().replace('$', ''));
               const highPrice = parseFloat(prices.first().text().replace('$', ''));
               expect(highPrice).to.be.greaterThan(lowPrice);
           });
   });
    it('Проверка покупки', () =>{
        const username = 'standard_user'
        const password = 'secret_sauce' 

        cy.get('[id=user-name]').type(`${username}`)
        cy.get('[id=password]').type(`${password}{enter}`)  

        cy.get('[id=add-to-cart-sauce-labs-backpack]').click({ force: true })
        cy.get('[id=add-to-cart-sauce-labs-bike-light]').click({ force: true })
        cy.get('[class=shopping_cart_link]').click({ force: true })
        cy.get('[id=checkout]').click({ force: true })
        cy.get('[id=first-name]').type(`${username}`)
        cy.get('[id=last-name]').type(`${username}`)
        cy.get('[id=postal-code]').type(`${username}`)  
        cy.get('[id=continue]').click({ force: true })
        cy.get('[id=finish]').click({ force: true })
        cy.get('[class=complete-header]').should('have.text', 'Checkout: Overview')

    })
});