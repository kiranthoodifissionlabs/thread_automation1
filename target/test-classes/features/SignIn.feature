Feature: SignIn

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