describe('Test Suite Name', function(){
    it('Test 4: Dynamic table', function(){
        // Launch the webpage
        cy.visit("https://qaplayground.dev/apps/dynamic-table/")
 
        cy.get("div.text-white-900").each( (x, ind) => {
            if(x.text() == "Spider-Man"){
                // Now we know the index
                // Use this to create a css selector for Peter Parker
                let firstHalf = "tbody>tr:nth-child("
                let secHalf   = ")>td:nth-child(3)>span"
 
                // 0 indexed
                // so +1
                let css_selector = firstHalf.concat(String(ind+1), secHalf)
 
                cy.get(css_selector).should('have.text', 'Peter Parker')
            }
        })
    })
})
