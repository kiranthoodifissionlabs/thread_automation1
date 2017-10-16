$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 709427,
  "status": "passed"
});
formatter.before({
  "duration": 6073467939,
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
formatter.step({
  "line": 10,
  "name": "Select Logout from Welcome dropDown which is available on the top left corner of the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Application should be navigated to SignIn screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginFeature.i_navigate_to_the_login_page()"
});
formatter.result({
  "duration": 9984465282,
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
  "duration": 317209753,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_click_login_button()"
});
formatter.result({
  "duration": 618210258,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_should_see_the_homepage()"
});
formatter.result({
  "duration": 3054201341,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.select_Logout_from_Welcome_dropDown_which_is_available_on_the_top_left_corner_of_the_screen()"
});
formatter.result({
  "duration": 327683648,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.application_should_be_navigated_to_SignIn_screen()"
});
formatter.result({
  "duration": 20231795,
  "status": "passed"
});
formatter.after({
  "duration": 716827122,
  "status": "passed"
});
formatter.after({
  "duration": 63635,
  "status": "passed"
});
});