// Short bullet points on testing strategy
// ---------------------------------------
// 1. get first iframe
// 2. go inside its body
// 3. get second iframe
// 4. go inside the body
// 5. click the button
// 6. assert the message displayed
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
