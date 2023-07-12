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
