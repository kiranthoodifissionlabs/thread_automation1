package com.thread.automation.pages;

import com.thread.automation.framework.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

/**
 * Created by THOODI on 1/25/2017.
 */
public class LoginPage extends BaseClass {

  private BaseClass baseClass;

     public LoginPage(BaseClass baseClass) {
        this.baseClass = baseClass;
        PageFactory.initElements(baseClass.driver,this);
    }

    @FindBy(name = "email")
     private WebElement userName;

    @FindBy(name ="password")
    private WebElement password;

    @FindBy(xpath="//button[text() = \"Sign in\"]")
    private WebElement signIn;

    @FindBy(linkText = "Forgot Password?")
    private WebElement forgotPassword;

    //Get the title of Login Page
    public String getForgotPasswordText(){
        return forgotPassword.getText();
    }

   public void clickOnSignIn(){
       signIn.click();
   }
    public void loginToThreadPortal(String user,String pass){
        userName.sendKeys(user);
        password.sendKeys(pass);
    }

}
