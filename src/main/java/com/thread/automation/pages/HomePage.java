package com.thread.automation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

/**
 * Created by THOODI on 1/25/2017.
 */
public class HomePage{

   /* public HomePage(WebDriver driver) {
        super(driver);
        PageFactory.initElements(this.driver,this);
    }*/

    @FindBy(xpath = "(//a[text()=\"Submit Appeal\"])[1]")
    private WebElement submitAppeal;

    @FindBy(xpath = "//a[text()=\"Logout\"]")
    private WebElement logout;

    @FindBy(xpath = "(//a[text() = 'My Appeals'])[1]")
    private WebElement getmyAppeals;

    public void clickonMyAppealsLink(){
        getmyAppeals.click();
    }

    public void clickOnLogOut(){
        logout.click();
    }

    @FindBy(xpath = "//h1[text()=\"Cook County Board of Review Portal Home\"]")
    private WebElement homePageTitle;

    public void clickonSubmitAppealsLink(){
        submitAppeal.click();
    }
    public  String homePageTitle(){
      return  homePageTitle.getText();
    }
}
