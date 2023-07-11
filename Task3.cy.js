// Short bullet points on testing strategy
// ---------------------------------------
// 1. click the dropdown
// 2. then hit "settings" menu
// 3. capture sub-menu items, then iterate over each of them
//    match them with expected texts. The expected texts are
//    stored in an array

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
