@feature4
Feature: Empty Feedback Form

@emptyFeedback
Scenario:
     Given I am on hotels landing page 
     When I click on Support
         And I click on Site Feedback
         And I click on Submit
     Then I verify error message is displayed on the support page
         And I verify red-box is displayed on the support page