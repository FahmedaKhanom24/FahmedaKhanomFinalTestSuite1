const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const SupportPage = require("../../Pages/Hotels/SupportPage");
const supportPage = new SupportPage()
const landingPage = new LandingPage()

When(/^I select (.+) rating$/, async function(rating){
    switch (rating) {
        case 'OVERALL':
            await supportPage.overRallRatingClick()
            await browser.pause(3000)
            break;
        case 'CONTENT':
            await supportPage.contentRatingClick()
            await browser.pause(3000)
            break;

        case 'DESIGN':
            await supportPage.designRatingClick()
            await browser.pause(3000)
            break;

        case 'EASE OF USE':
            await supportPage.usabilityRatingClick()
            await browser.pause(3000)
            break;

        
            
        default:
            break;
    }
    
  
})







