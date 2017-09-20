Feature: Sign in

  Scenario: Login to the URL with Invalid Credentials and check the Error message

    When the User opens the URL
    And enter the "Username" and "Password"
    And click on signIn
    Then It should show the error message as "The password you entered isn't correct"

  Scenario: Login to the URL with Valid Credentials and check the successful Message
    When the User opens the URL
    And enter the "Username" and "Password"
    And click on signIn
    Then It should navigate to welcome screen with successful login message as "Successfully logged in"

  Scenario: Login to the URL and search for particular study with studyname
    Given The user is in Welcome screen
    When the user enters the "studyName" in the search box
    And press the Enter key
    Then all that particular studies consisting the given studyname should get displayed.

  Scenario: After searching for particular studies click on create plus symbol button.
    When the study search gets completed
    And click on the create plus symbol button
    Then the application should be navigated to Design phase first carousel
