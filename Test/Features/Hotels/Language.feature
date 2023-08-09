@feature2
Feature: Language

@language
Scenario:
    Given I am on hotels landing page 
    When I click on English language
        And I select Español in Language dropdown
        And I choose to click on Save button
    Then I verify Español is displayed
        And I click on Español language
        And I select English in Language dropdown
        And I choose to click on Guardar button 
    Then I verify English is displayed