const { expect } = require("chai")

class ListYourPropertyPage {
    listYourPropertyDisplay= '//p[text()="What would you like to list?"]'
    lodgingLocator = '#classification_lodging'
    privateResidenceLocator= '#classification_privateResidence'
    step1OF3Locator = '//div[text()="Step 1 of 3"]'

    submitButtonLocator = '#propertyInfoNextBtn'
    step2Of3Locator = '//div[text()="Step 2 of 3"]'
    placeLocatedLocator = '//h1[contains(text(),"Where")]'
    setAddressLocator ='#locationTypeAhead'

    async setValueForAddress(value){
        const setAddressValue = await $(this.setAddressLocator)
        await setAddressValue.setValue(value)
    }
    async step2Of3Dispalyed(){
        await $(this.step2Of3Locator).isDisplayed()
        await browser.pause(3000)
    }

    async placeLocatedLocatorDisplayed(){
        await $(this.placeLocatedLocator).isDisplayed()
        await browser.pause(3000)
    }

    async clickSubmitButtonLocator(){
        await $(this.submitButtonLocator).click()
        await browser.pause(3000)
    }
    async step1OF3LocatorDisplayed(){
  
        await $(this.step1OF3Locator).isDisplayed()
        await browser.pause(3000)

    }
    async displayMessage(){
        //Switch to the new window/tab if needed
        const windowHandles = await browser.getWindowHandles();
        await browser.switchToWindow(windowHandles[1]); // Change to the second window using index 1
        await $(this.listYourPropertyDisplay).isDisplayed()
        await browser.pause(3000)
    }

    async lodgingPrivateLocatorDisplayed(){ 
        await $(this.lodgingLocator).isDisplayed()
        // await browser.pause(3000)
        await $(this.privateResidenceLocator).isDisplayed()
        // await browser.pause(3000)
    }

    async clickOnPrivateResidence(){
        await $(this.privateResidenceLocator).click()
        await browser.pause(3000)
    }

    bedroomNumberLocator = '//input[@name="bedroom-count"]/preceding-sibling::span'
    bathRoomNumberLocator = '//input[@name="bathroom-count"]/preceding-sibling::span'

    
    increaseBathroomLocator = '//button[@aria-label="Increase bathrooms"]'
    decreaseBathroomLocator = '//button[@aria-label="Decrease bathrooms"]'

    decreaseBedroomLocator = '//button[@aria-label="Decrease bedrooms"]'
    increaseBedroomLocator = '//button[@aria-label="Increase bedrooms"]'



    async getBedroomNumberCount() {
        
        const bedRoomElement = await $(this.bedroomNumberLocator);
        const bedRoomText = await bedRoomElement.getText(); // Get the text "4 bedrooms"
    
        const bedroomNumberText = bedRoomText.split(' ')[0]; // Split and get the first part "4"
        const bedroomNumber = Number(bedroomNumberText); // Convert to a number
    
        return bedroomNumber;
    }

    async getBathroomNumberCount() {
        
        const bathroomElement = await $(this.bathRoomNumberLocator);
        const bathRoomText = await bathroomElement.getText(); // Get the text "4 bathroom"
    
        const bathroomNumberText = bathRoomText.split(' ')[0]; // Split and get the first part "4"
        const bathroomNumber = Number(bathroomNumberText); // Convert to a number
    
        return bathroomNumber;
    }
    
    async selectBathroom(expBathroomCount) {
    
        await browser.pause(2000);
    
        for (let i = 0; i < 10; i++) {
          const bathroomCount = await this.getBathroomNumberCount();

        if (Number(bathroomCount) < Number(expBathroomCount)) {
            await $(this.increaseBathroomLocator).click();
        } else if (Number(bathroomCount) > Number(expBathroomCount)) {
            await $(this.decreaseBathroomLocator).click();
        } else {
            break;
        }

          
    
        }
      }


    async selectBedroom(expBedroomCount) {
    
        await browser.pause(2000);
    
        for (let i = 0; i < 10; i++) {
          const bedroomCount = await this.getBedroomNumberCount();

        if (Number(bedroomCount) < Number(expBedroomCount)) {
            await $(this.increaseBedroomLocator).click();
        } else if (Number(bedroomCount) > Number(expBedroomCount)) {
            await $(this.decreaseBedroomLocator).click();
        } else {
            break;
        }

          
    
        }
      }


      searchSuggestionAddressLocator = '//li[@class="typeahead-prediction-item fds-list-item"]'
      async selectSdrressFromAutoSuggestion(searchThis) {
        const allSuggestionAddress = await $$(this.searchSuggestionAddressLocator);
        for (const suggestion of allSuggestionAddress) {
            const suggestionAddressText = await suggestion.getText();
            // console.log("Suggestion Text:", suggestionAddressText);
            await browser.pause(3000);
            
            // Display debug information to understand the comparison
            // console.log("Comparing:", suggestionAddressText, "with", searchThis);
            
            if (suggestionAddressText.trim().toLowerCase() === searchThis.trim().toLowerCase()) {
                // console.log("Before click");
                await suggestion.click();
                // console.log("After click");
                await browser.pause(5000);
                return suggestionAddressText; 
            }
        }
        return null; 
    }
    
    
    
    
    
    
    
    
    
      mapLocator = '(//div)[65]'
      

      async mapIsDisplayed(){
        await $(this.mapLocator).isDisplayed()
        await browser.pause(3000)
      }
      
      mapPinLocator= '//img[@src="https://maps.gstatic.com/mapfiles/transparent.png" and @draggable="false"]'

      async mapPinDisplayed(){
        await $(this.mapPinLocator).isDisplayed()
        await browser.pause(3000)
      }

      mapBelowTextLocator= '//span[text()="Move the pin to adjust the location of your property."]'

      async mapBelowTextDisplayed(){
        await $(this.mapBelowTextLocator).isDisplayed()
        await browser.pause(3000)
      }
    
}

module.exports = ListYourPropertyPage;
