describe('Test Suite Name', function(){
    it('Test 3: Multi-level-dropdown', function(){
        // Launch the webpage
        cy.visit("https://qaplayground.dev/apps/multi-level-dropdown/")
 
        // click the dropdown link
        cy.get("ul>li:nth-child(4)>a").click()
 
        // click the "Settings" options
        cy.get("div.menu>a:nth-child(2)").click()
 
        // assertion: get text and match with array
        cy.get("div.menu-secondary-enter-done>a:not(:first-child)").each( (x, ind) => {
            const arr = ["HTML", "CSS", "JavaScript", "Awesome!"]
            assert.equal(arr[ind], x.text())
      })
    })
})
