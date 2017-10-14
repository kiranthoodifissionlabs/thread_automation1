$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LogOut.feature");
formatter.feature({
  "line": 1,
  "name": "LogOut Feature",
  "description": "\r\nLogOut functionality for Thread project.",
  "id": "logout-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5815887746,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Clicking on Save and exit button available on the top-right corner of the screen",
  "description": "",
  "id": "logout-feature;clicking-on-save-and-exit-button-available-on-the-top-right-corner-of-the-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "Application should be in Element Library screen of Customize phase",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Save and exit button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "It should navigate back to the Welcome or Landing screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LogOutFeature.application_should_be_in_Element_Library_screen_of_Customize_phase()"
});
formatter.result({
  "duration": 154268640,
  "status": "passed"
});
formatter.match({
  "location": "LogOutFeature.user_clicks_on_Save_and_exit_button()"
});
formatter.result({
  "duration": 34076,
  "status": "passed"
});
formatter.match({
  "location": "LogOutFeature.it_should_navigate_back_to_the_Welcome_or_Landing_screen()"
});
formatter.result({
  "duration": 20117,
  "status": "passed"
});
formatter.after({
  "duration": 583997054,
  "status": "passed"
});
formatter.before({
  "duration": 4663388571,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Signing out of the application",
  "description": "",
  "id": "logout-feature;signing-out-of-the-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "User navigates back to the Welcome or Landing screen",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Wait till the page gets loaded completely",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Select Logout from Welcome dropDown which is available on the top left corner of the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Application should be navigated to SignIn screen",
  "keyword": "Then "
});
formatter.match({
  "location": "LogOutFeature.user_navigates_back_to_the_Welcome_or_Landing_screen()"
});
formatter.result({
  "duration": 124807,
  "status": "passed"
});
formatter.match({
  "location": "LogOutFeature.wait_till_the_page_gets_loaded_completely()"
});
formatter.result({
  "duration": 27507,
  "status": "passed"
});
formatter.match({
  "location": "LogOutFeature.select_Logout_from_Welcome_dropDown_which_is_available_on_the_top_left_corner_of_the_screen()"
});
formatter.result({
  "duration": 139946234,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //span[contains(text(), \"Welcome\")]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-9LHQ8SA\u0027, ip: \u0027172.16.6.66\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\FISSIO~1\\AppData\\Local\\Temp\\rust_mozprofile.GVlQNxnGszOj, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d54.0.1, platformVersion\u003d10.0, moz:processID\u003d8696.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 690483aa-82b3-46b0-b034-230ed0d4acbe\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(), \"Welcome\")]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat com.thread.automation.pages.LandingPage.logOutFromThreadPortal(LandingPage.java:40)\r\n\tat com.thread.automation.stepDefinitions.LogOutFeature.select_Logout_from_Welcome_dropDown_which_is_available_on_the_top_left_corner_of_the_screen(LogOutFeature.java:46)\r\n\tat ✽.Then Select Logout from Welcome dropDown which is available on the top left corner of the screen(features/LogOut.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LogOutFeature.application_should_be_navigated_to_SignIn_screen()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 441658552,
  "status": "passed"
});
formatter.uri("features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "LoginFeature",
  "description": "This feature deals with the login functionality of the application",
  "id": "loginfeature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4400777333,
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
  "duration": 16346105370,
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
  "duration": 831573994,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_click_login_button()"
});
formatter.result({
  "duration": 258761111,
  "status": "passed"
});
formatter.match({
  "location": "LoginFeature.i_should_see_the_homepage()"
});
formatter.result({
  "duration": 13988630,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //span[contains(text(), \"Welcome\")]\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-9LHQ8SA\u0027, ip: \u0027172.16.6.66\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\FISSIO~1\\AppData\\Local\\Temp\\rust_mozprofile.cRDQKwDCz8Vg, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d54.0.1, platformVersion\u003d10.0, moz:processID\u003d10228.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 2879b699-1e91-42f9-8027-3e8a6e468c6d\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(), \"Welcome\")]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\r\n\tat com.thread.automation.pages.LandingPage.getlandingPageWelcome(LandingPage.java:35)\r\n\tat com.thread.automation.stepDefinitions.LoginFeature.i_should_see_the_homepage(LoginFeature.java:51)\r\n\tat ✽.Then I should see the homepage(features/Login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 658350316,
  "status": "passed"
});
});