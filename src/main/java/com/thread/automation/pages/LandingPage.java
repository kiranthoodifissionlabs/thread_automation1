package com.thread.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by THOODI on 1/24/2017.
 */
public class LandingPage {

    private WebDriver driver;
    public LandingPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy(linkText = "Login/Register")
    private WebElement loginLink;



    public void clickonloginLink(){
        loginLink.click();
    }

}
