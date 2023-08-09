const { expect } = require("chai");
const moment = require("moment/moment");

class LandingPage {
  //Locators
  locatorDates = "//button[@id='date_form_field-btn']";

  disabledDatesOfCurrentMonth =
    "//button[@class='uitk-date-picker-day is-disabled']";

  enterSearchBoxValue =
    '//button[@data-stid="destination_form_field-menu-trigger"]';

  setLocatorGoingTo = "#destination_form_field";

  searchButtonLocator = "#search_button";

  //Search AutoSuggestion
  searchSuggestionsLocator =
    '//button[@data-stid="destination_form_field-result-item-button"]';

  //Traverlers locators

  traverlerInputTriggerLocator = '//button[@data-stid="open-room-picker"]';
  plusAdultLocator =
    '//input[@id="traveler_selector_adult_step_input-0"]/following-sibling::button';
  minusAdultLocator =
    '//input[@id="traveler_selector_adult_step_input-0"]/preceding-sibling::button';
  adultCountLocator = "#traveler_selector_adult_step_input-0";

  plusChildrenLocator =
    '//input[@id="traveler_selector_children_step_input-0"]/following-sibling::button';
  minusChildrenLocator =
    '//input[@id="traveler_selector_children_step_input-0"]/preceding-sibling::button';
  childrenCountLocator = "#traveler_selector_children_step_input-0";

  traverlerDoneButtonLocator = "#traveler_selector_done_button";

  childrenAgeDropdownLocator_starts =
    '//select[@id="age-traveler_selector_children_age_selector-0-';

  childrenAgeDropdownLocator_ends = '"]';

  travelersInfoLocator = '//label[text()="Travelers"]/following-sibling::input';

  dataInputOpenLocator = "#date_form_field-btn";

  //Calendar
  previousCalendarLocator = '(//button[@data-stid="date-picker-paging"])[1]';
  nextCalendarLocator = '(//button[@data-stid="date-picker-paging"])[2]';
  leftCalendarHeadingLocator = "(//h2)[1]";
  allDatesInAMonthLocator_Start = '//h2[text()="';
  allDatesInAMonthLocator_End = '"]/following-sibling::table//button';

  //Invalid Sign in Locator
  signInLocator = '//button[text()="Sign in"]';
  signInButtonLocator = '//a[@data-stid="link-header-account-signin"]'

  //language Locator

  englishLocator = '//div[text()="English"]'

  selectLanguageLocator = '#language-selector'

  changeSettingLocator = '//div[@class="uitk-spacing uitk-spacing-margin-block-three"]/following::option[contains(text(),"Español")]'

  changeToEnglish = '//div[@class="uitk-spacing uitk-spacing-margin-block-three"]/following::option[contains(text(),"English")]' 

  saveButton = '//button[text()="Save"]'
  guardarButton= '//button[text()="Guardar"]'

  espanolDisplayedLocator = '//div[text()="Español"]'

  englishDisplayedLocator = '//div[text()="English"]'

  //Feedback Form Locators 

  supportTextLocator = '//div[text()="Support"]'
  traverlerInputTriggerLocatorChildren = '//button[@class="uitk-menu-trigger open-room-picker-observer-root uitk-fake-input uitk-form-field-trigger"]'


  //Child Age dropdown 

  child2DropdownLocator = '//label[text()="Child 2 age"]'
  childMinusLocator = '(//button[@type="button"])[10]'
  childPlusLocator = '(//button[@type="button"])[11]'

  child6DropdownLocator = '//label[text()="Child 6 age"]'
  child5DropdownLocator = '//label[text()="Child 5 age"]'
  child0DropdownLocator = '#traveler_selector_children_step_input-0'

  child0NotDisplayedLocator = '//div[text()="Get the most accurate pricing by letting us know the exact age of your child."]'


  //Property flow

  listYourPropertyLocator = '//div[text()="List your property"]'

  async listPropertyClick(){
    await $(this.listYourPropertyLocator).click()
    await browser.pause(3000)
  }
  async childPlusDisabled() {
    const isChildPlusDisabled = !(await $(this.childPlusLocator).isEnabled());
    return isChildPlusDisabled;
  }

  async childMinusDisabled(){
    const isChildMinusDisabled = !(await $(this.childMinusLocator).isEnabled());
    return isChildMinusDisabled;
  }

  
  // async children0DropdownNOTDisplayed(){
  //   return !(await $(this.child0NotDisplayedLocator).waitForDisplayed({ timeout: 5000, reverse: true }));  

  // }

  async children0DropdownNOTDisplayed() {
    
        const isDropdownDisplayed = await $(this.child0DropdownLocator).isDisplayed();
        return isDropdownDisplayed;
    
}


  // async children0DropdownDisplayedMessageDisplayed() {
  //   const children0MessageDisplayed = await this.children0DropdownNOTDisplayed();
  //   expect(children0MessageDisplayed, 'Dropdown not displayed').to.be.false;
  // }


  async children5DropdownDisplayed(){
    return await $(this.child5DropdownLocator).waitForDisplayed({ timeout: 5000, reverse: false });  

  }

  async children5DropdownDisplayedMessageDisplayed() {
    const children5MessageDisplayed = await this.children5DropdownDisplayed();
    expect(children5MessageDisplayed, 'Dropdown not displayed').to.be.true;
  }

  async children6DropdownDisplayed(){
    return await $(this.child6DropdownLocator).waitForDisplayed({ timeout: 5000, reverse: false });  
 
  }

  async children6DropdownDisplayedMessageDisplayed() {
    const children6MessageDisplayed = await this.children6DropdownDisplayed();
    expect(children6MessageDisplayed, 'Dropdown not displayed').to.be.true;
  }
 

  async children2DropdownDisplayed(){
    return await $(this.child2DropdownLocator).waitForDisplayed({ timeout: 5000, reverse: false });  
 
  }

  async children2DropdownDisplayedMessageDisplayed() {
    const childrenMessageDisplayed = await this.children2DropdownDisplayed();
    expect(childrenMessageDisplayed, 'Dropdown not displayed').to.be.true;
  }
 
  async childMinusEnabled(){
    await $(this.childMinusLocator).isEnabled()
    await browser.pause(3000)
  }

  async childPlusEnabled(){
    await $(this.childPlusLocator).isEnabled()
    await browser.pause(3000)
  }

 
  async clickTravelers(){
    await $(this.traverlerInputTriggerLocatorChildren).click()
    await browser.pause(3000)
  }
  
  async clickSupportTextLocator(){
    await $(this.supportTextLocator).click()
  }

  async clickEspanol(){
    await $(this.espanolDisplayedLocator).click()
    await browser.pause(3000)
  }

  async espanolDisplayed(){
    const espnaolIsDisplayed = await $(this.espanolDisplayedLocator).isDisplayed()
    expect(espnaolIsDisplayed,'Esapnol is not displayed').to.be.true
    await browser.pause(5000)
  }

  async englishDisplayed(){
    const englishIsDisplayed= await $(this.englishDisplayedLocator).isDisplayed()
    expect(englishIsDisplayed,'English is not displayed').to.be.true

    await browser.pause(2000)
  }
 
  async englishClickLocator(){
    await $(this.englishLocator).click()
  }

  async selectLanguageEspanol(){
    await $(this.selectLanguageLocator).click()
    await browser.pause(3000)
    await $(this.changeSettingLocator).click()
    await browser.pause(5000)

  }

  async selectLanguageEnglish(){
    await $(this.selectLanguageLocator).click()
    await browser.pause(3000)
    await $(this.changeToEnglish).click()
    await browser.pause(5000)
  }

  async clickSaveButtonDropdown(){
    await $(this.saveButton).click()
    await browser.pause(5000)
  }

  async clickGuardarButton(){
    await $(this.guardarButton).click()
    await browser.pause(5000)
  }

  async clickSignIn(){
    await $(this.signInLocator).click()
  }

  async clickSignInButton(){
    await $(this.signInButtonLocator).click()
  }
  async getDisabledDatesCount(monthYear) {
    const allDatesInAMonthLocator =
      this.allDatesInAMonthLocator_Start +
      monthYear +
      this.allDatesInAMonthLocator_End;
    const allDates = await $$(allDatesInAMonthLocator);
    let disabledDateCount = 0;
    for (const date of allDates) {
      const classAttributeValue = await date.getAttribute("class");
      if (classAttributeValue.includes("is-disabled")) {
        disabledDateCount++;
      }
    }
    return disabledDateCount;
  }

  async goToCalendar(monthYear) {
    await browser.pause(5000);

    const previousCalendarArrowEnabled = await $(
      this.previousCalendarLocator
    ).isEnabled();

    for (let i = 0; i < 10; i++) {
      let leftCalendarHeading = await $(
        this.leftCalendarHeadingLocator
      ).getText();

      if (leftCalendarHeading.localeCompare(monthYear) !== 0) {
        if (previousCalendarArrowEnabled) {
          await $(this.previousCalendarLocator).click();
        } else {
          await $(this.nextCalendarLocator).click();
        }
      } else {
        break;
      }
    }
  }

  async clickDates() {
    await $(this.locatorDates).click();
    await browser.pause(2000);
  }

  async getDisabledDates() {
    // Find all date elements in the calendar
    const dateElements = await $$(this.disabledDatesOfCurrentMonth);

    // Verify if each past date is disabled
    for (const element of dateElements) {
      const dateValue = await element.getAttribute("data-day");

      // Check if the date is in the past
      if (dateValue.isBefore(moment(), "day")) {
        const isDisabled = await element.getAttribute("disabled");

        if (!isDisabled) {
          return false; // Return false if any past date is not disabled
        }
      }
    }

    return true; // Return true if all past dates are disabled
  }

  async enterDestination(destinationString) {
    await $(this.enterSearchBoxValue).click();

    await $(this.setLocatorGoingTo).setValue(destinationString);
    await browser.pause(2000);
  }

  async selectFromAutoSuggestion(searchTHis) {
    const allSuggestion = await $$(this.searchSuggestionsLocator);
    for (const suggestion of allSuggestion) {
      const suggestionDate = await suggestion.getAttribute("aria-label");
      if (suggestionDate.startsWith(searchTHis)) {
        await suggestion.click();
        break;
        
      }
    }
  }

  async clickSearchButton() {
    await $(this.searchButtonLocator).click();
  }

  async getAdultCount() {
    return await $(this.adultCountLocator).getAttribute("value");
  }

  async getChildrenCount() {
    return await $(this.childrenCountLocator).getAttribute("value");
  }

  async selectAdults(expAdultCount) {
    if (!(await $(this.traverlerDoneButtonLocator).isDisplayed())) {
      await $(this.traverlerInputTriggerLocator).click();
    }

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {
      const adultCount = await this.getAdultCount();

      if (Number(adultCount) < Number(expAdultCount)) {
        await $(this.plusAdultLocator).click();
      } else if (Number(adultCount) > Number(expAdultCount)) {
        await $(this.minusAdultLocator).click();
      } else {
        break;
      }

      await browser.pause(2000);
    }
  }

  async selectChildren(expChildrenCount) {
    if (!(await $(this.traverlerDoneButtonLocator).isDisplayed())) {
      await $(this.traverlerInputTriggerLocator).click();
    }

    await browser.pause(2000);

    for (let i = 0; i < 10; i++) {
      const childrenCount = await this.getChildrenCount();

      if (Number(childrenCount) < Number(expChildrenCount)) {
        await $(this.plusChildrenLocator).click();
      } else if (Number(childrenCount) > Number(expChildrenCount)) {
        await $(this.minusChildrenLocator).click();
      } else {
        break;
      }

      await browser.pause(2000);
    }
  }

  async selectChildAge(childNum, childAge) {
    const childAgeLocator =
      this.childrenAgeDropdownLocator_starts +
      Number(childNum - 1) +
      this.childrenAgeDropdownLocator_ends;
    const childAgeDropdown = $(childAgeLocator);

    childAgeDropdown.selectByVisibleText(childAge);
  }

  async clickTravelerDoneButton() {
    const doneButton = $(this.traverlerDoneButtonLocator);
    await browser.pause(2000);

    await doneButton.click();
    await browser.pause(2000);
  }

  async getTravelersCount() {
    const travelersInfo = await $(this.travelersInfoLocator).getAttribute(
      "value"
    );
    return travelersInfo.split(" ")[0];
  }

  async clickOpenCalender() {
    await $(this.dataInputOpenLocator).click();
  }
}

module.exports = LandingPage;
