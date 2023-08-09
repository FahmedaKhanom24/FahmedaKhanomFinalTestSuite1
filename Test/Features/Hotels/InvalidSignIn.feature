@feature1
Feature: InvalidSignIn

@invalidSignIn

Scenario:
    Given I am on hotels landing page 
    When I click on Sign in link 
          And I click on Sign in button on the sign up page
          And I enter invalid email address
          And I click on Continue button on the sign in page
    Then I verify error message is displayed on the invalid sign in page