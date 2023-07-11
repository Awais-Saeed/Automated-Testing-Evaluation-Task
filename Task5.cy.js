describe('Test Suite Name', ()=> {
    it("Test 5: Pop up", ()=> {
        // Launch the webpage
        cy.visit("https://qaplayground.dev/apps/shadow-dom/")
 
        // hit boost button
        cy.get("progress-bar").shadow()
        .find(".btn-green-outline").click()
 
        cy.get("progress-bar").shadow()
        .find("div.fill").then( (x) => {
            const width = x.width();
            assert.equal(width, "95")
        })
    })
})
