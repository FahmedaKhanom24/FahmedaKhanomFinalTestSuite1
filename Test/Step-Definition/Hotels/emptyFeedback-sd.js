const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const SupportPage = require("../../Pages/Hotels/SupportPage");
const SignInPage = require("../../Pages/Hotels/SignInPage");
const ListYourPropertyPage = require("../../Pages/Hotels/ListYourProperty");
const supportPage = new SupportPage()
const landingPage = new LandingPage()
const listYourProperty= new ListYourPropertyPage()

const signIn= new SignInPage()
When(/^I click on (.+)$/, async function(clickForm){
    switch (clickForm) {
        case 'Support':
            await landingPage.clickSupportTextLocator()
            await browser.pause(3000)
            break;
        case 'Site Feedback':
            await supportPage.siteFeedbackLocatorClick()
            await browser.pause(3000)
            break;

        case 'Submit':
            await supportPage.submitButtonClick()
            await browser.pause(3000)
            break;
        case 'List your property on the page':
            await landingPage.listPropertyClick()
            await browser.pause(3000)
            break;

        case 'English language':
            await landingPage.englishClickLocator()
            break;
        case 'Español language':
            await landingPage.clickEspanol()
            break;
        case 'Sign in link':
            await landingPage.clickSignIn();
            await browser.pause(3000)

            break;
        case 'Sign in button on the sign up page':
            await landingPage.clickSignInButton();
            await browser.pause(3000)

            break;
        case 'Continue button on the sign in page':
            await signIn.clickContinue();
            await browser.pause(3000)

            break;

        case 'Private residence':
            await listYourProperty.clickOnPrivateResidence()
            await browser.pause(3000)

            break;
        case 'Next button on the list your property':
            await listYourProperty.clickSubmitButtonLocator()
            await browser.pause(3000)
            break;
        default:
            break;
    }
    
})



Then(/^I verify (.+) is displayed on the support page$/, async function(errorMessageDisplayed){
    switch (errorMessageDisplayed) {
        case 'error message':
            await supportPage.assertErrorMessageDisplayedSupport()
            break;
        case 'red-box':
            await supportPage.assertErrorRedBoxplayedSupport()
            break;

        case 'THANK YOU FOR YOUR FEEDBACK':
            await supportPage.assertThankYouMessageDisplayed()
            break;
        default:
            break;
    }
})

