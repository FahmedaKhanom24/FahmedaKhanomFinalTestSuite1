const { When, Then } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const SupportPage = require("../../Pages/Hotels/SupportPage");
const SignInPage = require("../../Pages/Hotels/SignInPage");
const ListYourPropertyPage = require("../../Pages/Hotels/ListYourProperty");
const supportPage = new SupportPage()
const landingPage = new LandingPage()
const listYourProperty= new ListYourPropertyPage()

const signIn= new SignInPage()

let bedroomCount=0
let bathroomCount=0

When(/^I enter (.+) as bedroom$/, async function(count){
    await listYourProperty.selectBedroom(count)
    bedroomCount = count
})

When(/^I enter (.+) as bathroom$/, async function(count){
    await listYourProperty.selectBathroom(count)
    bathroomCount = count
})

When(/^I put the value 121 in address on the list your property$/, async function(){
    await listYourProperty.setValueForAddress('121')
    await browser.pause(3000)
})

When(/^I choose to select (.+) from auto-suggestion$/, async function (pickFromSuggestion) {
    console.log("Picking suggestion:", pickFromSuggestion);
    const suggestedText= await listYourProperty.selectSdrressFromAutoSuggestion(pickFromSuggestion);
    console.log("After selecting suggestion",suggestedText);
    await browser.pause(3000);
    
});