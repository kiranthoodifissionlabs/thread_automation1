package com.thread.automation.stepDefinitions;

import com.thread.automation.framework.BaseClass;
import com.thread.automation.pages.LandingPage;
import com.thread.automation.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class LoginFeature extends BaseClass{

    private BaseClass baseClass;
        public LoginFeature(BaseClass baseClass) {
        this.baseClass = baseClass;
    }

    @Given("^I navigate to the login page$")
    public void i_navigate_to_the_login_page(){
        System.out.println("In Login Screen");
        baseClass.driver.navigate().to("https://turbo-stage.styx.threadresearch.com/#/studies");
        baseClass.driver.manage().timeouts().pageLoadTimeout(40000, TimeUnit.MILLISECONDS);

    }


    @Given("^I enter the username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void i_enter_the_username_as_and_password_as(String username, String password)  {
        //System.out.println(baseClass.hashCode());
        loginPage = new LoginPage(baseClass);
        if(loginPage.getForgotPasswordText().equalsIgnoreCase("Forgot Password?")) {
            loginPage.loginToThreadPortal(username, password);
        }
        else
        {
            System.out.println("Forgot Password is not displayed");
        }
    }

    @And("^I click login button$")
    public void i_click_login_button(){
        loginPage = new LoginPage(baseClass);
        loginPage.clickOnSignIn();
    }

    @Then("^I should see the homepage$")
    public void i_should_see_the_homepage(){
       landingPage = new LandingPage(baseClass);
       String landingPageWelcome = landingPage.getlandingPageWelcome();
       Assert.assertTrue(landingPageWelcome.toLowerCase().contains("welcome"));
    }

}
