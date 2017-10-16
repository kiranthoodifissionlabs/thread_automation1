package com.thread.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by THOODI on 1/24/2017.
 */
public class LandingPage{

  public LandingPage(WebDriver driver) {
      PageFactory.initElements(driver,this);
    }


    @FindBy(xpath = "//span[contains(text(), \"Welcome\")]")
    private WebElement landingPageWelcome;

    @FindBy(xpath = ".//span[contains(text(),'+')]")
    private WebElement createStudyButton;

    @FindBy(xpath = ".//li[contains(text(),'My Profile')]")
    private WebElement myProfileButton;

    @FindBy(xpath = ".//li[contains(text(),'Log Out')]")
    private WebElement logOut;


    public String getlandingPageWelcome(){
        return landingPageWelcome.getText();
    }

    public void logOutFromThreadPortal()
    {
        landingPageWelcome.click();
        logOut.click();
    }

    public void startCreatingStudy()
    {
        createStudyButton.click();
    }




}
