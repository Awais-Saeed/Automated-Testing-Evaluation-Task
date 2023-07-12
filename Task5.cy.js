// Short bullet points on testing strategy
// ---------------------------------------
describe("Test Suite Name", ()=> {
  it("Test 5: iFrames", ()=> {
    // Launch the webpage
    cy.visit("https://qaplayground.dev/apps/iframe/")
 
    // get first iframe
    // go to its document
    // then go inside the body
    // then find iframe2
    // then go inside its body
    // find anchor tag
    // click it
    cy.get("#frame1")
    .its("0.contentDocument")
    .its('body')
    .find("#frame2")
    .its("0.contentDocument")
    .find('a')
    .click();
 
    // assert the message displayed
    cy.get("#frame1").its("0.contentDocument")
    .its('body')
    .find("#frame2")
    .its("0.contentDocument")
    .find('#msg')
    .then( (x) => {
      assert(x.text(), "Button Clicked")
    });
    })
})




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
