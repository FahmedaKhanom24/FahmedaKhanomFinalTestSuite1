const { expect } = require("chai");
const LandingPage = require("../../Pages/Hotels/LandingPage");
const { When, Then } = require("@wdio/cucumber-framework");
const SignInPage = require("../../Pages/Hotels/SignInPage");

const landingPage = new LandingPage();
const signIn = new SignInPage();



When(/^I enter invalid email address$/, async function(){
    await signIn.setEmailValue("123");
});



Then(/^I verify error message is displayed on the invalid sign in page$/, async function(){
    await signIn.assertErrorMessageDisplayed();
});
