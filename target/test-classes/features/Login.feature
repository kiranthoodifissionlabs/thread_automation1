Feature: LoginFeature
  This feature deals with the login functionality of the application

  Scenario: Login with correct username and password

    Given I navigate to the login page
    And I enter the username as "vineeth.varada@fissionlabs.com" and password as "Password@18"
    And I click login button
    Then I should see the homepage
    Then Select Logout from Welcome dropDown which is available on the top left corner of the screen
    Then Application should be navigated to SignIn screen