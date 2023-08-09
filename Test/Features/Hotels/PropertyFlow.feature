@feature3
Feature: Property Flow

@propertyflow
Scenario:
    Given I am on hotels landing page 
    When I click on List your property on the page
    Then I verify What would you like to list is displayed
         And I verify Lodging and Private residence options is displayed
    When I click on Private residence
    Then I verify Step 1 of 3 is displayed
    When I enter 4 as bedroom
         And I enter 2.5 as bathroom
         And I click on Next button on the list your property 
    Then I verify Step 2 of 3 is displayed
         And I verify Where is your property located is displayed
    When I put the value 121 in address on the list your property
         And I choose to select 1211 6th Avenue, New York, NY from auto-suggestion
    Then I verify map is displayed
         And I verify pin in map is displayed
         And I verify Move the pin to adjust the location of your property is displayed 
