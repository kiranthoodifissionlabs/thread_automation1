$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5696235760,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with correct username and password",
  "description": "",
  "id": "loginfeature;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter the username as \"vineeth.varada@fissionlabs.com\" and password as \"Password@18\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 10781379066,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vineeth.varada@fissionlabs.com",
      "offset": 25
    },
    {
      "val": "Password@18",
      "offset": 74
    }
  ],
  "location": "LoginFeature.i_enter_the_username_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 952542200,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_click_login_button()"
});
formatter.result({
  "duration": 288384671,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_should_see_the_homepage()"
});
formatter.result({
  "duration": 34666780936,
  "status": "passed"
});
formatter.after({
  "duration": 730486205,
  "status": "passed"
});
});