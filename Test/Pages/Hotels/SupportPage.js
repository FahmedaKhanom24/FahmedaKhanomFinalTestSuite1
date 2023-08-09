const { expect } = require("chai");

class SupportPage {
    siteFeedbackLocator = '//a[text()="Site Feedback"]';
    submitButtonLocator = '//input[@type="submit"]';
    errorMessageSupportLocator = '//p[text()="The following fields are required:"]';

    errorBoxLocator = '#error-1'

    
    overallRatingLocator = '#overall-3'
    contentRatingLocator = '#content-3'
    designRatingLocator = '#design-3'
    usabilityRatingLocator = '#usability-3'
    thankYouLocator = '#int-thankyou-heading'

    async thankYouMessageDisplayed(){
        return await $(this.thankYouLocator).waitForDisplayed({ timeout: 5000, reverse: false });  
    }

    async assertThankYouMessageDisplayed() {
        const thankYouMessageDisplayedSupport = await this.thankYouMessageDisplayed();
        expect(thankYouMessageDisplayedSupport, 'Error not displayed').to.be.true;
    }


    async overRallRatingClick(){
        // Switch to the new window/tab if needed
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1

        await $(this.overallRatingLocator).click()
        await browser.pause(3000)
    }

    async contentRatingClick(){
        await $(this.contentRatingLocator).click()
        await browser.pause(3000)
    }

    async designRatingClick(){
        await $(this.designRatingLocator).click()
        await browser.pause(3000)
    }

    async usabilityRatingClick(){
        await $(this.usabilityRatingLocator).click()
        await browser.pause(3000)
    }

    


    async siteFeedbackLocatorClick() {
        await $(this.siteFeedbackLocator).click();

        
    }

    async submitButtonClick(){
         // Switch to the new window/tab if needed
         const windowHandles = await browser.getWindowHandles();
         await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1
 
         // Now interact with elements on the feedback form
         await $(this.submitButtonLocator).waitForClickable();
         await $(this.submitButtonLocator).click();
    }

    async isErrorMessageDisplayedSupport() {
        return await $(this.errorMessageSupportLocator).waitForDisplayed({ timeout: 5000, reverse: false });
    }

    async assertErrorMessageDisplayedSupport() {
        const errorMessageDisplayedSupport = await this.isErrorMessageDisplayedSupport();
        expect(errorMessageDisplayedSupport, 'Error not displayed').to.be.true;
    }

    async isErrorRedBoxDisplayedSupport() {
        return await $(this.errorBoxLocator).waitForDisplayed({ timeout: 5000, reverse: false });
    }

    async assertErrorRedBoxplayedSupport() {
        const errorRedBoxDisplayedSupport = await this.isErrorRedBoxDisplayedSupport();
        expect(errorRedBoxDisplayedSupport, 'Error not displayed').to.be.true;
    }
}

module.exports = SupportPage;
