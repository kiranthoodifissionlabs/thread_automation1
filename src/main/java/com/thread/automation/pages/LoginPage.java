package com.thread.automation.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by THOODI on 1/25/2017.
 */
public class LoginPage {
    protected WebDriver driver;
    public LoginPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver,this);
    }

    @FindBy(id= "UserName")
    private WebElement userName;

    @FindBy(id="Password")
    private WebElement password;

    @FindBy(xpath="//h2[text() = \"Login\"]")
    private WebElement titleText;

     //Get the title of Login Page
    public String getRegisterText(){
        return titleText.getText();
    }

    public void loginToCookCounty(String user,String pass){
        userName.sendKeys(user);
        password.sendKeys(pass);
     //   dsl.clickSubmit();
    }

}
