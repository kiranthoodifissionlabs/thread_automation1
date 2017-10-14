package com.thread.automation.pages.Design;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;


public class DesignPage {

    private WebDriver driver;

    public DesignPage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(this.driver,this);
    }


}
