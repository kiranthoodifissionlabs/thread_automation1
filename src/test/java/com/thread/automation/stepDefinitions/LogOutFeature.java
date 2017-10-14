package com.thread.automation.stepDefinitions;

import com.thread.automation.framework.BaseClass;
import com.thread.automation.pages.LandingPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.testng.Assert;

public class LogOutFeature extends BaseClass{

    private BaseClass baseClass;

    public LogOutFeature(BaseClass baseClass) {
        this.baseClass = baseClass;
    }

    @Given("^Application should be in Element Library screen of Customize phase$")
    public void application_should_be_in_Element_Library_screen_of_Customize_phase() {

    }

    @And("^User clicks on Save and exit button$")
    public void user_clicks_on_Save_and_exit_button(){

    }

    @Then("^It should navigate back to the Welcome or Landing screen$")
    public void it_should_navigate_back_to_the_Welcome_or_Landing_screen(){

    }

    @Given("^User navigates back to the Welcome or Landing screen$")
    public void user_navigates_back_to_the_Welcome_or_Landing_screen(){

    }

    @And("^Wait till the page gets loaded completely$")
    public void wait_till_the_page_gets_loaded_completely() throws Throwable {

    }

    @Then("^Select Logout from Welcome dropDown which is available on the top left corner of the screen$")
    public void select_Logout_from_Welcome_dropDown_which_is_available_on_the_top_left_corner_of_the_screen(){
    landingPage = new LandingPage(baseClass);
    landingPage.logOutFromThreadPortal();

    }

    @Then("^Application should be navigated to SignIn screen$")
    public void application_should_be_navigated_to_SignIn_screen() {
        Assert.assertTrue(loginPage.getForgotPasswordText().equalsIgnoreCase("Forgot Password?"));
    }
}
