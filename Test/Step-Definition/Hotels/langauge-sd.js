const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const ListYourPropertyPage = require("../../Pages/Hotels/ListYourProperty");

const landingPage = new LandingPage()

const listYourProperty= new ListYourPropertyPage()



When(/^I select (.+) in Language dropdown$/, async function (languageChange){
    switch (languageChange) {
        case 'Español':
            await landingPage.selectLanguageEspanol()
            
            break;
        case 'English':
            await landingPage.selectLanguageEnglish()
        default:
            break;
    }
    await browser.pause(2000)
    
})

When(/^I choose to click on (.+) button$/, async function (buttonType){
    switch (buttonType) {
        case 'Save':
            await landingPage.clickSaveButtonDropdown()
            break;
        case 'Guardar':
            await landingPage.clickGuardarButton()
        default:
            break;
    }
    await browser.pause(2000)
})

Then(/^I verify (.+) is displayed$/, async function (languagePreference){
    switch (languagePreference) {
        case 'Español':
            await landingPage.espanolDisplayed()
            break;
        case 'English':
            await landingPage.englishDisplayed()
            break;
        case 'What would you like to list':
            await listYourProperty.displayMessage()
            await browser.pause(3000)
            break;

        case 'Lodging and Private residence options':
            await listYourProperty.lodgingPrivateLocatorDisplayed()
            await browser.pause(3000)
            break;

        case 'Step 1 of 3':
            await listYourProperty.step1OF3LocatorDisplayed()
            await browser.pause(3000)
            break;

        case 'Step 2 of 3':
            await listYourProperty.step2Of3Dispalyed()
            await browser.pause(3000)
            break;

        case 'Where is your property located':
            await listYourProperty.placeLocatedLocatorDisplayed()
            await browser.pause(3000)
            break;

        case 'map':
            await listYourProperty.mapIsDisplayed()
            await browser.pause(2000)
            break;

        case 'pin in map':
            await listYourProperty.mapPinDisplayed()
            await browser.pause(2000)
            break;
        case 'Move the pin to adjust the location of your property':
            await listYourProperty.mapBelowTextDisplayed()
            await browser.pause(2000)
        default:
            break;
    
    }
    await browser.pause(2000)
})

