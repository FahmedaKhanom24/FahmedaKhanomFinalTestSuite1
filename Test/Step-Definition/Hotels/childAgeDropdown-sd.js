const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const SupportPage = require("../../Pages/Hotels/SupportPage");
const supportPage = new SupportPage()
const landingPage = new LandingPage()

//npx wdio wdio.conf.js --cucumberOpts.tagExpression='@Scenario2'
//in the tag expression i have @feature1
Then(/^I verify Children-age dropdown are (.+)$/, async function(number){
    switch (number) {
        case '2':
            await landingPage.children2DropdownDisplayedMessageDisplayed()
            await browser.pause(3000)
            break;
        case '6':
            await landingPage.children6DropdownDisplayedMessageDisplayed()
            await browser.pause(3000)
            break;
        case '5':
            await landingPage.children5DropdownDisplayedMessageDisplayed()
            await browser.pause(3000)
            break;
        case 'none':
            await landingPage.children0DropdownNOTDisplayed()
            await browser.pause(3000)
            break;
            
            
        default:
            break;
    }
    
    
})

Then(/^I verify (.+) is enabled$/, async function(plusMinuButton){
    switch (plusMinuButton) {
        case 'Plus-button':
            await landingPage.childPlusEnabled()
            await browser.pause(3000)
            break;
        case 'minus-button':
            await landingPage.childMinusEnabled()
            await browser.pause(3000)
            break;
        default:
            break;
    }
    
})

Then(/^I verify (.+) is disabled$/, async function(plusMinuButton){
    switch (plusMinuButton) {
        case 'Plus button':
            await landingPage.childPlusDisabled()
            await browser.pause(3000)
            break;
        case 'minus button':
            await landingPage.childMinusDisabled()
            await browser.pause(3000)
            break;
        
        default:
            break;
    }
    
})








