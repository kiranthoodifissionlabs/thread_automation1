Feature: Sign Out


  Scenario: Clicking on "Save and exit" button available on the top-right corner of the screen
    Given the application should be in "Element Library" screen of "Customize" phase
    When the user clicks on "Save and exit" button
    Then the user should navigate back to the "Welcome/Landing" screen

    Scenario: Signing out of the application
      Given The user navigates back to the "Welcome/Landing" screen
      And wait till the page gets loaded completely
      Then Click on "Welcome,(name)" dropdown available on the top-left corner of the screen
      Then Click on the "Log Out" button available in the dropdown box
      Then the application should be navigated to "Sign in" screen