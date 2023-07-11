describe('Test Suite Name', function(){
    it('Test 2: Tags Input Box', function(){
        // Launch the webpage
        cy.visit("https://qaplayground.dev/apps/tags-input-box/")
 
        // assert remaining tags
        cy.get("div[class='details'] p span").should('have.text', '8')


        cy.xpath("//input[@type='text']").type('Hello, World, these, are, randomly, chosen, words, OK?').type('{enter}')
 
        // assert tag's presence. There are a total of 10
        cy.xpath("//div[@class='content']//ul//li").should('have.length', '10')
 
        // assert remaining tags
        cy.get("div[class='details'] p span").should('have.text', '0')
      })
})
