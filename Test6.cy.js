// Short bullet points on testing strategy
// ---------------------------------------
// 1. Hit the boost button using .shodow()
// 2. Get the width of progress bar
// 3. Match the result with the exoected one
describe('Test Suite Name', ()=> {
    it("Test 6: Progress-bar", ()=> {
        // Launch the webpage
        cy.visit("https://qaplayground.dev/apps/shadow-dom/")
 
        // hit boost button
        cy.get("progress-bar").shadow()
        .find(".btn-green-outline").click()

        // get width of progress bar
        cy.get("progress-bar").shadow()
        .find("div.fill").then( (x) => {
            const width = x.width();
            assert.equal(width, "95")
        })
    })
})
