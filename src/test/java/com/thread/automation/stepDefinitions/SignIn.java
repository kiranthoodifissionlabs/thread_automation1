package com.thread.automation.stepDefinitions;

import com.thread.automation.framework.BaseClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SignIn extends BaseClass {

    @When("^the User opens the URL$")
    public void the_User_opens_the_URL(){
        System.out.println("Hello");
    }

    @And("^enter the \"([^\"]*)\" and \"([^\"]*)\"$")
    public void enter_the_and(String arg1, String arg2){
        System.out.println("Hello");

    }
    @And("^click on signIn$")
    public void click_on_signIn(){

    }
    @Then("^It should show the error message as \"([^\"]*)\"$")
    public void it_should_show_the_error_message_as(String arg1){
    }

    @Then("^It should navigate to welcome screen with successful login message as \"([^\"]*)\"$")
    public void it_should_navigate_to_welcome_screen_with_successful_login_message_as(String arg1){

    }

}
