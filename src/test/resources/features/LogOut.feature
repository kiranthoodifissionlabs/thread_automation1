Feature: LogOut Feature

  LogOut functionality for Thread project.

  Scenario: Clicking on Save and exit button available on the top-right corner of the screen
    Given Application should be in Element Library screen of Customize phase
    And  User clicks on Save and exit button
    Then It should navigate back to the Welcome or Landing screen

  Scenario: Signing out of the application
    Given User navigates back to the Welcome or Landing screen
    And Wait till the page gets loaded completely
    Then Select Logout from Welcome dropDown which is available on the top left corner of the screen
    Then Application should be navigated to SignIn screen