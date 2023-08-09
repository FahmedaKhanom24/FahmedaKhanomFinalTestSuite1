@feature6
Feature: Submit Feedback Form

@submitFeebackForm
Scenario:
    Given I am on hotels landing page 
    When I click on Support
        And I click on Site Feedback
        And I select OVERALL rating
        And I select CONTENT rating
        And I select DESIGN rating
        And I select EASE OF USE rating
        And I click on Submit
    Then I verify THANK YOU FOR YOUR FEEDBACK is displayed on the support page

