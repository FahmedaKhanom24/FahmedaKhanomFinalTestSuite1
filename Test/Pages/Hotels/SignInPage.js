const { expect } = require("chai")

class SignInPage {
    emailValueLocator = '#loginFormEmailInput'
    continueButtonLocator = '#loginFormSubmitButton'
    errorMessage = '#loginFormEmailInput-error'

    async setEmailValue(value) {
        const emailInput = await $(this.emailValueLocator);
        await emailInput.setValue(value);
    }

    async clickContinue() {
        const continueButton = await $(this.continueButtonLocator);
        await continueButton.waitForClickable();
        await continueButton.click();
    }

    async isErrorMessageDisplayed() {
        const errorMessageElement = await $(this.errorMessage);
        return await errorMessageElement.waitForDisplayed({ timeout: 8000, reverse: false });
    }

    async assertErrorMessageDisplayed() {
        const errorMessageDisplayed = await this.isErrorMessageDisplayed();
        expect(errorMessageDisplayed, 'Error not displayed').to.be.true;
    }
}

module.exports = SignInPage;
