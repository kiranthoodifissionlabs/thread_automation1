$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/SignIn.feature");
formatter.feature({
  "line": 1,
  "name": "SignIn",
  "description": "",
  "id": "signin",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Login to the URL with Invalid Credentials and check the Error message",
  "description": "",
  "id": "signin;login-to-the-url-with-invalid-credentials-and-check-the-error-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "the User opens the URL",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter the \"Username\" and \"Password\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click on signIn",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "It should show the error message as \"The password you entered isn\u0027t correct\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.the_User_opens_the_URL()"
});
formatter.result({
  "duration": 374235252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Password",
      "offset": 26
    }
  ],
  "location": "SignIn.enter_the_and(String,String)"
});
formatter.result({
  "duration": 6608588,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.click_on_signIn()"
});
formatter.result({
  "duration": 75130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The password you entered isn\u0027t correct",
      "offset": 37
    }
  ],
  "location": "SignIn.it_should_show_the_error_message_as(String)"
});
formatter.result({
  "duration": 195420,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Login to the URL with Valid Credentials and check the successful Message",
  "description": "",
  "id": "signin;login-to-the-url-with-valid-credentials-and-check-the-successful-message",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "the User opens the URL",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "enter the \"Username\" and \"Password\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on signIn",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "It should navigate to welcome screen with successful login message as \"Successfully logged in\"",
  "keyword": "Then "
});
formatter.match({
  "location": "SignIn.the_User_opens_the_URL()"
});
formatter.result({
  "duration": 469256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username",
      "offset": 11
    },
    {
      "val": "Password",
      "offset": 26
    }
  ],
  "location": "SignIn.enter_the_and(String,String)"
});
formatter.result({
  "duration": 890889,
  "status": "passed"
});
formatter.match({
  "location": "SignIn.click_on_signIn()"
});
formatter.result({
  "duration": 85805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Successfully logged in",
      "offset": 71
    }
  ],
  "location": "SignIn.it_should_navigate_to_welcome_screen_with_successful_login_message_as(String)"
});
formatter.result({
  "duration": 172840,
  "status": "passed"
});
});