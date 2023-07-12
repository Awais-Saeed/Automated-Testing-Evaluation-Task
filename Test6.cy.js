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
      // 1. get the bar (parent)
      // 2. get div.fill element (child)
      // 3. get width of pretn and child
      // 4. do some math to get child's width in %
      // .offsetParent() method allows us to search through the ancestors of elements
       cy.get("progress-bar").shadow()
       .find("div.fill").then( (x) => {
            var width = x.width();
            var parentWidth = x.offsetParent().width();
            var percent = Math.round(100*width/parentWidth);
            assert(percent, "95")
       })
   })
})
