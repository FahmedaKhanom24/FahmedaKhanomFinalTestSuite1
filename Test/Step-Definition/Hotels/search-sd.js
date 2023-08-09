const {When, Then, Given } = require("@wdio/cucumber-framework");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const { expect } = require("chai");
const SearchResultsPage = require("../../Pages/Hotels/searchResultsPage");

const landingPage = new LandingPage();

const searchResultsPage = new SearchResultsPage()

Given(/^I am on hotels landing page$/, async function(){
    await browser.url('https://www.hotels.com/')

})

When(/^I enter (.+) in Search box$/, async function (destination){
    await landingPage.enterDestination(destination)
    await browser.pause(5000)

})


When(/^I select (.+) from Autosuggestion$/, async function (pickfromSuggestion){
    await landingPage.selectFromAutoSuggestion(pickfromSuggestion)
    await browser.pause(2000)

})

When(/^I click (.+) button$/, async function(buttonName){
    switch (buttonName){
        case 'Search':
            await landingPage.clickSearchButton()
            await browser.pause(2000)
            break

        case 'Sign in':
            break

        case 'Dates':
            await landingPage.clickOpenCalender()
            await browser.pause(10000)

        default:
            break
        }
})

Then(/^I verify Going to has the (.+) on Search Results page$/, async function(expectGoingTo){
    goingToWeb= await searchResultsPage.getGoingToText()
    await browser.pause(2000)
    expect(goingToWeb.includes(expectGoingTo),'Not same').to.be.true
})

