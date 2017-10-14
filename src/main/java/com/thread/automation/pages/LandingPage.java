package com.thread.automation.pages;

import com.thread.automation.framework.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by THOODI on 1/24/2017.
 */
public class LandingPage extends BaseClass{

    private BaseClass baseClass;

  public LandingPage(BaseClass baseClass) {
      this.baseClass = baseClass;
      PageFactory.initElements(baseClass.driver,this);
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
